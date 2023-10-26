---
layout: narrow
title: Imperative Programming
---
<h4>Imperative Programming</h4>
<p>Imperative programming is a programming paradigm in which the sequence of steps that require execution by the computer map to the 
sequence of steps we are explicity writing in code. When writing in an imperative language, we are essentially constructing algorithms.
An algorithm is a finite set of rigorous instructions that transforms a set of inputs into a set of outputs. We seek to design algorithms
that implement our desired input-output pairings with minimum run-time cost and minimum memory usage. It is typically the first paradigm 
learnt by a programmer, who upon becoming rehearsed in the features of a given imperative language, begins moving towards implementation 
of abstract data types and definition of their interfaces. An abstract data type is constructed from a combination of primitive data 
types and access functions. Primitive data types include integers, characters, booleans, and arrays. Abstract data types include linked
lists, dictionaries, trees, stacks, heaps, queues, graphs, and so on.</p> 
<h4>Arrays</h4>
<p> An array is a primitive data type with a linear ordering (by index). Arrays can be uni-dimensional or multi-dimensional (see tensors
document for more). Arrays can be of fixed or dynamic in size. It can be helpful to color-code subsets of an array, and visualise numerical
values as heights in a histogram, for sorting.</p>
<p><img src="/Assets/images/array1.png" width="100%" height="100%"></p>
<h4>Linked Lists</h4>
<p>A linked list is a data structure containing a linear set of data elements. Unlike an array, the ordering of elements in a linked
list does not necessarily correspond to the ordering of elements in physical memory. Linked lists are composed of individual nodes which
store relevant values, linked singly or doubly by pointers. The dynamic nature of linked lists can save on memory usage when compared to
arrays, also insertion/deletions do not require shifting of subsequent elements as they typically do with arrays. Arrays do however possess
the benefit of random element access, which linked lists do not, and have less overhead seeing as reference pointers do not need to be 
stored in memory for each stored element.</p>
<p><img src="/Assets/images/linked_list.png" width="100%" height="100%"></p>
Doubly-Linked Lists are easily reversed by simply swapping the head and tail pointers. Singly-Linked lists require a few additional steps
as visualised to the right of the above diagram. The current node sets the current node pointer to the previous node (which is initially
null), the previous node pointer then catches up to the current pointer, which catches up to the next pointer (which was set to the 
next node at the very beginning of the pointer shuffle).
<h4>Trees</h4>
<p>Trees are widely used abstract data types. Let's start with the binary search tree (BST), which has a maximum of two children
per parent node, and maintains that all nodes in the left subtree of a node have values less than that node's value, and all nodes
in the right subtree of a node have values greater than that node's value. The first operations to implement are node insertion and
deletion. Insertion can be visualised like marbles bouncing from the walls of a pinball machine, left if less than the current
node value, right if greater than the current node value. Deletion is a little more complex. When removing the left child of a parent node,
we replace it with it's right subtree. The child's left subtree attaches itself to the right subtree's leftmost node. This process is mirrored 
for the right child of a parent node.</p>
<p><img src="/Assets/images/bst_insertion_deletion.png" width="100%" height="100%"></p>
<p>Additionally, we want to be able to traverse the tree in a variety of ways. These traversals are identical in terms of recursion,
their difference lies in which recursive step the stored data is accessed. In a preorder traversal data is accessed before the left and
right recursive step, in a postorder traversal data is accessed after, and in an inorder traversal data is accessed between the left and
right recursive step.</p>
<p><img src="/Assets/images/bst_traversal.png" width="100%" height="100%"></p>
<p>Alternatively, we can use a stack to traverse a binary search tree, which may be necessary if we need to index each traversal step
in a way that is not conducive to the recursive process. To do so, we traverse from the root to the leftmost node, pushing each node to
the stack as we go, then for each popped element, we traverse to the leftomost node of the right node of that popped element, pushing 
each encountered node to the stack as we go, until the stack is empty. Each element will be pushed, popped and processed once.</p> 
<p><img src="/Assets/images/bst_balancing.png" width="100%" height="100%"></p>
<p>Additional properties include node depth and node height. Node depth is a zero-indexed value meaning 'distance from root node'. Thus,
the root node has depth zero, its children have depth one, their children have depth two, and so on. Node height is equal to the 
longest path that exists to a leaf node. We say that a tree is balanced if for all parent nodes the difference in height between each 
child node does not exceed one. In the above visualisation, node depth is marked dark blue and height difference is marked light blue.
To balance an unbalanced BST, we can map the values discovered through an inorder traversal to an array and reconstruct a new BST from 
its sorted values through a binary search. This is an expensive operation however. If balance requests are expected to be frequent,
self-balancing trees such as AVL and Red-Black trees can be implemented instead.</p>