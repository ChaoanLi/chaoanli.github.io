"""Reproduce website figures from the accompanying data and explicit formulas.

Run with Python, numpy, pandas and matplotlib installed.
No Monte Carlo experiment is rerun and no result is inferred from a screenshot.
"""
from pathlib import Path
import json
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

OUT = Path(__file__).resolve().parents[1] / 'public/research'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10,
                     'axes.spines.top': False, 'axes.spines.right': False,
                     'axes.labelcolor': '#293943', 'text.color': '#293943',
                     'svg.fonttype': 'none', 'svg.hashsalt': 'chaoanli-research',
                     'savefig.facecolor': 'white'})
COLORS = ['#236b88', '#b66037', '#687b46']

def save(fig, name):
    fig.savefig(OUT / name, bbox_inches='tight', dpi=160, metadata={'Creator': 'research_figures.py', 'Date': None})
    plt.close(fig)

def cardiac():
    obs = pd.read_csv(OUT / 'data/sodium-observations.csv')
    results = pd.read_csv(OUT / 'data/calibration-estimates.csv').set_index('method')
    x = np.linspace(obs.X.min(), obs.X.max(), 250)
    fig, ax = plt.subplots(figsize=(7.6, 4.6), layout='constrained')
    ax.scatter(obs.X, obs.Y, color='#293943', s=22, label='19 observations', zorder=5)
    for method, color, label in zip(['F-L2', 'F-Sobolev', 'F-RKHS'], COLORS,
                                  ['$L^2$', 'Sobolev $W^1$', 'RKHS (numerical benchmark)']):
        r = results.loc[method]
        a, b, c = r[['theta_1', 'theta_2', 'theta_3']]
        A = np.array([[-b-c,a,0,0],[b,-a-b,a,0],[0,b,-a-b,a],[0,0,b,-a]])
        eigenvalues, vectors = np.linalg.eig(A)
        inverse = np.linalg.inv(vectors)
        y = [np.real((vectors @ np.diag(np.exp(np.exp(t)*eigenvalues)) @ inverse)[0,3]) for t in x]
        predicted = np.array([np.real((vectors @ np.diag(np.exp(np.exp(t)*eigenvalues)) @ inverse)[0,3]) for t in obs.X])
        rmse = np.sqrt(np.mean((predicted - obs.Y.to_numpy())**2))
        assert np.isclose(rmse, r.rmse_obs, atol=1e-10), (method, rmse, r.rmse_obs)
        ax.plot(x, y, color=color, linewidth=2, label=label)
    ax.set(xlabel='log(time)', ylabel='Normalized current', ylim=(-.005,.155))
    ax.legend(frameon=False, fontsize=9)
    ax.grid(alpha=.16)
    save(fig, 'calibration-curves.svg')
    fig, axes = plt.subplots(1,3,figsize=(9.3,3.5),layout='constrained')
    for j, ax in enumerate(axes,1):
        for i, (method,color,label) in enumerate(zip(['F-L2','F-Sobolev'], COLORS, ['$L^2$','$W^1$'])):
            r = results.loc[method]
            ax.errorbar(r[f'theta_{j}'], i, xerr=[[r[f'theta_{j}']-r[f'ci_lower_{j}']],
                        [r[f'ci_upper_{j}']-r[f'theta_{j}']]], fmt='o',color=color,capsize=5)
        ax.set(yticks=[0,1],yticklabels=['$L^2$','$W^1$'],ylim=(-.5,1.5),xlabel=fr'$\theta_{j}$')
        ax.grid(axis='x',alpha=.2)
    fig.suptitle('Marginal 95% plug-in intervals: each norm defines its own target', fontsize=11)
    save(fig,'calibration-intervals.svg')

def fourier():
    # Fourier convention: exp(-2*pi*i*x.xi), as in the paper.
    # f(x) = d/dx1 exp(-pi |x|^2). Its Fourier transform is
    # 2*pi*i*xi1*exp(-pi |xi|^2). Under dilation A^k, det(A)=8.
    for k in [-1,0,1]:
        fig, axes = plt.subplots(1,2,figsize=(8,4.0),layout='constrained')
        t=np.linspace(-5,5,301); x,y=np.meshgrid(t,t)
        u,v=x/2.**k,y/4.**k
        z=-2*np.pi*u*np.exp(-np.pi*(u*u+v*v))
        q=np.linspace(-2.5,2.5,301); a,b=np.meshgrid(q,q)
        freq=2*np.pi*np.abs(2.**k*a)*np.exp(-np.pi*((2.**k*a)**2+(4.**k*b)**2))
        for ax in axes: ax.set_rasterization_zorder(0)
        axes[0].contourf(x,y,z,levels=np.linspace(-1.6,1.6,33),cmap='RdBu_r',extend='both',zorder=-1)
        axes[1].contourf(a,b,freq,levels=np.linspace(0,1.6,33),cmap='Blues',extend='max',zorder=-1)
        axes[0].set(title=r'Spatial: $f_k(x)=f(A^{-k}x)$',xlabel='$x_1$',ylabel='$x_2$')
        axes[1].set(title=r'Frequency: $|\widehat f_k(\xi)|/8^k$',xlabel=r'$\xi_1$',ylabel=r'$\xi_2$')
        for ax in axes: ax.set_aspect('equal')
        fig.suptitle(fr'$A=\mathrm{{diag}}(2,4)$,  $k={k}$; fixed axes across scales',fontsize=11)
        save(fig,f'fourier-{k}.svg')

def campanato():
    metadata={}
    # Delta has area 1; B_k = A^k Delta. Discrete uniform quadrature of
    # the paper's polynomial moment condition int_B (f-P) h = 0.
    for k in [-1,0,1]:
        R=1/np.sqrt(np.pi)
        u,v=np.meshgrid(np.linspace(-1,1,181),np.linspace(-1,1,181))
        x,y=u*R*2.**k,v*R*4.**k
        mask=u*u+v*v<=1
        f=np.sin(2*x)+.25*y*y
        for degree in [0,1]:
            design=np.stack([np.ones_like(x),x,y],axis=-1)[...,:1 if degree==0 else 3]
            coeff=np.linalg.lstsq(design[mask],f[mask],rcond=None)[0]
            poly=design@coeff; residual=f-poly
            rms=float(np.sqrt(np.mean(residual[mask]**2)))
            assert np.max(np.abs(design[mask].T @ residual[mask])) / mask.sum() < 1e-10
            metadata[f'{k}:{degree}']=round(rms,5)
            fig,axes=plt.subplots(1,3,figsize=(9.3,3.6),layout='constrained')
            lim=max(abs(f[mask]).max(),abs(poly[mask]).max(),abs(residual[mask]).max(),.01)
            for ax,z,title in zip(axes,[f,poly,residual],['Function $f$',fr'Projection $P_B^{degree}f$',r'Residual $f-P_B^d f$']):
                z=np.where(mask,z,np.nan)
                im=ax.pcolormesh(x,y,z,cmap='RdBu_r',vmin=-lim,vmax=lim,shading='auto',rasterized=True)
                ax.set(title=title,xlabel='$x_1$',ylabel='$x_2$');ax.set_aspect('equal')
            fig.colorbar(im,ax=axes,shrink=.7,label='Function value (shared scale)')
            fig.suptitle(fr'$B_k=A^k\Delta$, $|\Delta|=1$, $k={k}$, degree $d={degree}$; local RMS={rms:.4f}',fontsize=11)
            save(fig,f'campanato-{k}-{degree}.svg')
    (OUT/'campanato-values.json').write_text(json.dumps(metadata,indent=2)+'\n')

if __name__=='__main__':
    cardiac(); fourier(); campanato()
    print('Verified: all three cardiac RMSEs match the source results; all six polynomial projections satisfy discrete moment conditions.')
