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
<p>Big O notation is a mathematical notation used to classify the efficiency of our algorithms. For an algorithm we have constructed
we denote the number of computational steps involved in processing an input of size \(x\) as \(f(x)\) and denote a comparison function \(g(x)\).
We then say that "\(f(x)\) is big O of \(g(x)\)" which can be expressed as 
\(f(x) = O(g(x)) \; \) as \(\; x \to \infty \). Big O notation translates to \( |f(x)| \le M(g(x))\) for all \(x \ge x_0\).
This means that for some positive constant multiple of \(g(x)\) for sufficiently large \(x\), our function \(f(x)\) is strictly less 
than equal to g\((x)\). Setting our comparison function to generic relationships such as \(g(x) = x,\;\) \(g(x) = log_2(x),\;\) \(g(x) = x^k\),
and proving that \(f(x) = O(g(x))\) is the equivalent of classing our algorithm as an algorithm that, for an input of size \(n\), runs in
linear, logarithmic, or polynomial time. We can use this equivalent process to study memory usage, where \(f(n)\) represents not
the computational steps involved but rather the amount of memory used in the computation. Certain inputs may be significantly more or less computationally
expensive than others, and so in studying the efficiency of our algorithms, we typically refer to best-case, average-case and worst-case time and
space complexities.</p><br>
<h4>Array</h4>
<p> An array is a primitive data type with a linear ordering by index. It may be uni-dimensional or multi-dimensional, with either fixed
or dynamic length. As a primitive data type, an array acts as a simple pointer to memory. Thus the memory address stored plus the
value index multipled by the size of the value type stored by the array, will give the direct address of that item in memory. It can be 
helpful to color-code subsets of an array, and visualise numerical values as heights in a histogram.</p>
<p><img src="/Assets/images/array1.png" width="100%" height="100%"></p>
<p>There are myriad approaches to sorting arrays. Perhaps the simplest and most intuitive is that of the bubble sort sorting algorithm, which
traverses through the array, comparing each element with its subsequent element and swapping them if out of order. It does so repeatedly 
until the array is sorted. This means that a minimum array element positioned at the end of the array would require \(n\)-swaps to be
ordered making for a worst-case time complexity of \(O(n^2)\).</p>
<p><img src="/Assets/images/merge_sort.png" width="100%" height="100%"></p>
<p>More efficient algorithms such as the merge sort algorithm can reduce this complexity to \(O(nlog(n))\). Merge sort is a divide and
conquer algorithm in which the input array is recursively broken down into subarrays until each subarray has only one element, which are
then recursively merged to produce a single sorted array. The merge process involves iterating across the two subarrays to be merged. We
index both arrays, compare elements, increment the index of the lesser element and insert it into the result. 
</p><br>
<h4>Stack</h4>
<p>A stack is an abstract data type that wraps an array and forces last-in first-out data access. Elements can be pushed to the top of
the stack, popped from the stack, or peeked from the top of the stack (without removal). The stack typically comes with a function to 
check whether or not it is empty. A stack can be of a pre-determined fixed size, or can grow dynamically with the number of pushed elements.</p>
<p><img src="/Assets/images/stack_simple.png" width="100%" height="100%"></p>
<p>Stacks are used in memory storage for local procedures, backtracking for syntactic completion, non-recursive tree-traversal,
depth-first and breadth-first walks, undo functionality in text editors, and of course, the call stack.</p><br>
<h4>Queue</h4>
<p>A queue is an abstract data type that wraps an array and forces first-in first-out data access. Elements can be enqueued or 
dequeued. Other methods that a queue implementation typically come with include checks for whether the queue is full or empty and a peek
method to check the value of the element at the front of the queue without dequeuing.</p>
<p><img src="/Assets/images/queue_simple.png" width="100%" height="100%"></p>
<p>A queue is typically implemented not with an array but with another abstract data type such as a linked list to
avoid shuffling all internally stored values when enqueueing or dequeueing values. Queues can be used as buffers. For instance, process wait
and ready queues in OS schedulers, multithreaded application handling, signalling between asynchronous clock regions, and user actions on
distributed system apps.</p><br>
<h4>Linked List</h4>
<p>A linked list is a data structure containing a linear set of data elements. Unlike an array, the ordering of elements in a linked
list does not necessarily correspond to the ordering of elements in physical memory. Linked lists are composed of individual nodes which
store relevant values, linked singly or doubly by pointers. The dynamic nature of linked lists can save on memory usage when compared to
arrays, also insertion/deletions do not require shifting of subsequent elements as they typically do with arrays. Arrays do however possess
the benefit of random element access, which linked lists do not, and have less overhead seeing as reference pointers do not need to be 
stored in memory for each stored element.</p>
<p><img src="/Assets/images/linked_list.png" width="100%" height="100%"></p>
<p>Doubly-Linked Lists are easily reversed by simply swapping the head and tail pointers. Singly-Linked lists require a few additional steps
as visualised to the right of the above diagram. The current node sets the current node pointer to the previous node (which is initially
null), the previous node pointer then catches up to the current pointer, which catches up to the next pointer (which was set to the 
next node at the very beginning of the pointer shuffle).</p><br>
<h4>Tree</h4>
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
<h4>Graph</h4>
<p>The graph data structure, comprised of a set of vertices and edges, is typically implemented with a two-dimensional boolean array
(if space complexity is of minimal concern) or a set of adjacency lists (equivalent to linked lists but in the context of a graph ADT)
stored within a dynamically allocated array. This array can be fixed if the number of vertices in the graph is pre-determined and 
unchanging.</p>
<p><img src="/Assets/images/graph_implementation.png" width="100%" height="100%"></p>
<p>Breadth-first and depth-first traversals are the fundamental graph traversal methods, and can be implemented with the help of a 
queue and stack respectively. These traversals create a spanning tree across the graph with root node equivalent to the initial node
in the traversal. The spanning tree of a graph is a tree that covers all vertices in a graph and whose edges exist as a subset of the
graph's edges. Consider, in the below diagram, the sequence of visited nodes in a breadth-first traversal. The neighbours of the root node 
0 are visited first (2 and 8). The neighbours of 2 and then 8 are discovered, and so on recursively until all nodes are discovered.
Thus we simply use a queue, dequeuing a current node, and enqueueing all the current node's neighbours, recursively until all nodes are
discovered. </p>
<p><img src="/Assets/images/graph_traversal.png" width="100%" height="100%"></p>
<p>Now consider, in the above diagram, the sequence of nodes in a depth-first traversal. The neighbours of the root node 0 are first discovered
(2 and 8). Then the neighbours of the most recently discovered node (8) are discovered (1 and 6) and so on recursively until all nodes
are discovered. We use a stack so that we are always searching for the neighbours of the most recently discovered node, and then jumping
back to previous nodes once such a path is exhausted. The result of the depth-first traversal is equivalent to the order of elements
popped from the stack.</p>