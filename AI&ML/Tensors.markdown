---
layout: narrow
title: Tensors
---
<h4>Tensors</h4>
<p>Tensors are \(n\)-dimensional generalisations of scalars, vectors and matrices. A scalar is a zero-dimensional tensor. A vector is a 
one-dimensional tensor, a matrix is a two-dimensional tensor. A tensor has a shape, which exists as a list of scalars, where each scalar
represents the length of one of the tensor's dimensions. Tensors can contain anything really, but let's first consider a three-dimensional tensor
with two dimensions of length two and one dimension of length four, containing scalars (visualised as collections).</p>
<p><img src="/Assets/images/tensors1.png" width="100%" height="100%"></p>
<p><img src="/Assets/images/tensors2.png" width="100%" height="100%"></p>
<p>The shape of the tensor determines its navigation. This tensor has two dimensions of two unit length, and one dimension of four unit length.
We could describe the tensor as having shape (2,2,4), (4,2,2) or (2,4,2) from some vertex in the tensor. The vertex we select for navigation
will determine the orientation of the tensor with respect to us as navigators.</p>
<p>Like scalars, vectors and matrices, tensors can exist as operands, being transformed by suitable operators. Unary operators that operate on
tensors take a single tensor as input and produce a single tensor as output. This includes negation, logarithm, reciprocal, sin, 
addition/subtraction/multiplication/division with a scalar quantity, and the kind of activation functions used in neural networks. These unary ops
apply element-wise to each element in the tensor.

</p>



<!--
    Binary operators on tensors (pointwise arithmetic, comparison, plus additional dot product/matmul)
    Reduce operators (sum, max, min)
    Movement operators (reshapes, permutes, expands, flips, resize, squeeze, unsqueeze)
    Matmul
    Inverse matrices
-->