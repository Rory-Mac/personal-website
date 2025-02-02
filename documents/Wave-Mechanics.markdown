---
layout: narrow
title: Wave Mechanics
---
<h4>Wave Mechanics</h4>
<p>We start with a sinusoidal expression of a wave in one-dimensional space, and extend this definition to \(n\)-space through use of
an \(n\)-sized propagation and position vector \(k\) and \(r\).  
\[ u = A\sin\left(\frac{2\pi}{\lambda}x + 2\pi f t\right) = A\sin(kx + \omega t)  \]
\[ u(r, t) = A\sin(\textbf{k} \cdot \textbf{r} + \omega t). \]
We then imagine an infinitesimal interval of a wave as a string with infinitesimal deformation and curvature. We can express tension 
vectors of equal magnitude at the endpoints of this string as \(T\) with horizontal component zero and angle \(\theta_1, \theta_2\) to
derive a physical wave equation as follows.
\[ F = ma = \mu \frac{d^2y}{dx^2} \]
\[ (\theta \rightarrow \infty) \rightarrow \sin(\theta) \approx \tan(\theta) \approx \frac{dy}{dx} \]
\[ \Sigma F = T\sin(\theta_1) + T\sin(\theta_2) \]
\[ T \left( \left( \frac{\partial y}{\partial  x} \right)_2 - \left( \frac{\partial  y}{\partial x} \right)_1 \right) = \mu \frac{d^2y}{dx^2} \]
\[ \frac{d^2y}{dx^2} = \frac{T}{\mu} \left( \frac{\partial^2 y}{\partial x^2} \right) \]
The wave equation extends to \(n\)-space.
\[ \frac{d^2y}{dx^2} = \frac{T}{\mu} \left( \left( \frac{\partial^2 \> g(x_1, x_2, \ldots, x_n)}{\partial x_1} \right) + 
\left( \frac{\partial^2 \> g(x_1, x_2, \ldots, x_n)}{\partial x_2} \right) + 
\ldots + \left( \frac{\partial^2 \> g(x_1, x_2, \ldots, x_n)}{\partial x_n}\right) \right) \]
The fourier transform then allows us to compose sinusoidal frequencies into complex wave forms and decompose complex wave forms into 
sinusoidal frequencies.
\[ \hat g(f) = \int_{-\infty}^{\infty}g(t)e^{-2\pi ift}dt \]
\[ g(t) = \int_{-\infty}^{\infty} \hat g(f)e^{2\pi ift}df \]</p>