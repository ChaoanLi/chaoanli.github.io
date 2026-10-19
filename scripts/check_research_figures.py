"""Scientific checks independent of the plotting code; requires numpy/pandas."""
from pathlib import Path
import xml.etree.ElementTree as ET
import numpy as np
import pandas as pd

root = Path(__file__).resolve().parents[1] / 'public/research'
obs = pd.read_csv(root/'data/sodium-observations.csv')
assert len(obs) == 19 and obs[['X','Y']].notna().all().all()
est = pd.read_csv(root/'data/calibration-estimates.csv').set_index('method')
for method in ['F-L2','F-Sobolev']:
    for j in [1,2,3]:
        r=est.loc[method]
        assert r[f'ci_lower_{j}'] < r[f'theta_{j}'] < r[f'ci_upper_{j}']

# Independent numerical integral under the paper's exp(-2*pi*i*x.xi) convention.
for k in [-1,0,1]:
    N=1024; dx=40/N
    a=(np.arange(N)-N//2)*dx; x,y=np.meshgrid(a,a)
    u,v=x/2.**k,y/4.**k
    f=-2*np.pi*u*np.exp(-np.pi*(u*u+v*v))
    numerical=np.fft.fftshift(np.fft.fft2(np.fft.ifftshift(f)))*dx**2
    q=np.fft.fftshift(np.fft.fftfreq(N,d=dx)); s,t=np.meshgrid(q,q)
    exact=8.**k*2j*np.pi*(2.**k*s)*np.exp(-np.pi*((2.**k*s)**2+(4.**k*t)**2))
    error=np.max(np.abs(numerical-exact))/np.max(np.abs(exact))
    assert error < 1e-6, (k,error)
    print(f'Fourier k={k}: relative max FFT error {error:.2e}')
    for name in [f'fourier-{k}.svg',f'campanato-{k}-0.svg',f'campanato-{k}-1.svg']:
        ET.parse(root/name)
for name in ['calibration-curves.svg','calibration-intervals.svg']:
    ET.parse(root/name)
print('Passed: FFT convention/dilation identity, 19 observations, saved parameter intervals, all 11 SVG views.')
