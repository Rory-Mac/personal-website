---
layout: narrow
title: Linear Algebra
---
<h4>Linear Algebra</h4>
<p>Linear algebra studies systems of linear equations and their encodings as vectors and matrices. 
A vector describes a movement through a space defined by a set of base vectors of unit magnitude.</p>
<p><img src="/Assets/images/vector_ops.png" width="100%" height="100%"></p>
<p>Matrices exist as bundles of vectors, for which the scaled vector operation equivalents exist
as well as distinct matrix operations. Some operations generalise to \(n\)-dimensional matrices, termed tensors.
<p><img src="/Assets/images/matrix_ops.png" width="100%" height="100%"></p>
<p>A vector \(\vec{v}\) exists as the linear combination of vectors \(\>(\vec{u_1}, \vec{u_2}, \> \ldots \> \vec{u_n} )\>\) if
\(\> \vec{v} = c_1 \vec{u_1} + c_2 \vec{u_2} + \ldots + c_n\vec{u_n} \>\) for a set of scalars \((c_1, c_2, \> \ldots \> c_n)\). The span
of a set of vectors is the set of all linear combinations of those vectors. A set of vectors is said to have linear independence if no 
vector within the set exists as the linear combination of a subset of vectors within that set. This set then forms a basis.</p>
<p>In the case of the matrix multiplication \(AB\), we take each component of a vector in \(B\) as the operand of scalar multiplication
with a corresponding vector in \(A\) before summing to produce a new vector. We do this for each vector in \(B\). Thus matrix multiplication is the
transformation of a vector through transformation of the components of its basis.</p>
<p>If a vector that undergoes a linear transformation \(T\) is equal to itself multiplied by some scalar \(\lambda\), we say that it is an
eigenvector with eigenvalue \(\lambda\).
\[T\textbf{v} = λ\textbf{v}\]</p>