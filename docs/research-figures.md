# Research content and figure provenance

Updated 2026-10-19. The website distinguishes saved research results from
mathematical examples. No synthetic data are presented as empirical findings.

## Biography and résumé

The public PDF is a byte-for-byte copy of the current general-purpose
`getajob/output/pdf/Chaoan_Li_Resume.pdf`, inspected as a one-page PDF before
publication. It is newer than the frozen v8 résumé and the company-specific
versions are not used as a general academic résumé. The degree is Industrial
Engineering, Data Science track; advisor Rui Tuo. The preceding mathematics
research at Beijing Normal University was with Dachun Yang.

The résumé lists the calibration paper as under review at IISE Transactions
and the validation paper as under review at Technometrics. Neither is labeled
accepted or published. The two pure mathematics papers are published.

## Validation

`validation-shear-layer.png` is the original figure included in the public
preprint [arXiv:2604.17144](https://arxiv.org/abs/2604.17144), section
“Application to Shear Layer Experiment.” It contains physical observations
(n=32), simulator observations (n=11), KRR fits, estimated input density, test
statistics and p-values. The input interval [0,1.5] is split into six intervals
of width 0.25. The raw observations derive from the sources cited by that paper.

No p-values have been extracted from pixels, no curves redrawn from screenshots,
and no claims of universal superiority or equivalence on non-rejection are made.

## Calibration

The saved outputs and observations from the author's submitted calibration
reproducibility package are in `public/research/data/`. The observation file
contains the 19 normalized cardiac sodium-current observations provided in
[Zhang and Wang's supplementary materials](https://doi.org/10.1080/01621459.2024.2340793).
The underlying experiment is attributed there to Ednie and Bennett (2013).

The plotting script evaluates the four-state simulator using the **saved**
F-L2, F-Sobolev and F-RKHS parameter estimates. With θ=(a,b,c),

```
A = [[-b-c, a,    0,    0],
     [b,   -a-b, a,    0],
     [0,   b,    -a-b, a],
     [0,   0,    b,   -a]]
f_s(x, θ) = (exp(exp(x) A))[0,3]
```

These curves are not a new calibration run. Recomputed observation RMSEs must
match the saved results within absolute tolerance 1e-10. Marginal 95% intervals
are read from the saved F-L2 and F-Sobolev results. They concern different
norm-defined targets and are not prediction bands. The exact fitting-RKHS
curve is a **numerical benchmark**: it is outside the manuscript's common
undersmoothing theorem, so no RKHS uncertainty guarantee is advertised.

## Fourier / anisotropic Hardy spaces

Source: [Li, Yan and Yang, 2024](https://doi.org/10.1007/s10255-024-1124-5),
[open preprint](https://arxiv.org/abs/2306.05840), dilation definitions and
Fourier convention exp(-2πi x·ξ). The interactive figure uses the exact example

```
A = diag(2,4), |det A| = 8
f(x) = ∂₁ exp(-π|x|²)
f_k(x) = f(A^(-k)x)
Fourier(f_k)(ξ) = 8^k Fourier(f)((A^T)^k ξ)
Fourier(f)(ξ) = 2πi ξ₁ exp(-π|ξ|²).
```

Axes are fixed when k changes. Frequency magnitude is divided by 8^k for
comparison. This illustrates a dilation identity; it neither replaces nor
numerically proves the paper's theorem about general distributions in H_X^A.

## Campanato / local polynomial oscillation

Source: [Li, Yan and Yang, 2023](https://doi.org/10.1007/s13324-023-00814-w),
[open preprint](https://arxiv.org/abs/2304.12120), section 3's minimizing
polynomial definition: ∫_B(f-P_B^d f)q=0 for every polynomial q of degree ≤d.

For a worked example, Δ is the centered disk of area 1, B_k=A^kΔ, and
f(x)=sin(2x₁)+x₂²/4. Uniform-grid quadrature and least squares approximate that
moment condition for d=0 or 1. All six displayed projections must satisfy
their discrete moment conditions to 1e-10. Shared color limits are used across
the three panels in a given view. Axes and color limits can change with k.
The displayed RMS is only a **local L² residual**, not the full Campanato norm,
which also requires the paper's space X, normalizations and collection supremum.

## Reproduction

Run `python scripts/research_figures.py` with numpy, pandas and matplotlib.
The figures are static SVG assets; switching views needs no plotting server,
API key, external font or paid service.

`python scripts/check_research_figures.py` independently checks the analytic
Fourier identity against a 2D numerical FFT and verifies the data and assets.
