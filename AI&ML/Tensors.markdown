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
apply element-wise to each element in the tensor.</p>
<p>Binary operators that operate on tensors take two tensors as input and produce a single tensor as output. This includes pointwise arithmetic
(addition/subtraction/multiplication/division between elements of two tensors of equivalent shape), comparison operators (set if greater than/equal,
set if less than/equal, etc), and matrix multiplication. Matrix multiplication, which generalises to the tensor product, is interesting because it is
a tensor specific operation, rather than a tensor-equivalent operation (a non-tensor operation applied to the context of tensors).</p>
<p><img src="/Assets/images/matmul.png" width="100%" height="100%"></p>
<p>Two tensors can be multiplied together if the number of columns in one of the tensors is equal to the number of rows in the other. Since rows
can be permuted into columns and vice versa, we can say that two tensors can be multiplied if they share a dimension of equal unit length. For example,
consider tensor \(A\) with shape \((m, n)\) and tensor \(B\) with shape \((n, p)\). These tensors can be multiplied to give tensor \(C\) with shape \((m, p)\). The notion of
a tensor product generalises this rule to higher dimensions.</p>
<p>Although two tensors with shape \((m, n)\) and \((n, p)\) can be multiplied together, two tensors with shape \((m, n)\) and \((p, n)\) can not. To multiply these 
latter tensors we can reshape \((p, n)\) to \((n, p)\). This is an example of a movement operator which alters the way in which we navigate through the
tensor, whilst preserving the values of the entities stored within the tensor. Other examples include permute, expand, squeeze and unsqueeze. Reduction
operators also exist and take one tensor as input to produce one tensor with reduced dimensionality as output. Examples of reduction operators include
sum, max and min.</p>