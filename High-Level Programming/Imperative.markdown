---
layout: narrow
title: Imperative Programming
---
<h4>Imperative Programming</h4>
<p>Imperative programming is a programming paradigm in which the sequence of steps that require execution by the computer map to the 
sequence of steps we are explicity writing in code. When writing in an imperative language, what we are writing is an algorithm: a
sequence of rigorous instructions defining an input-output map. We seek to design algorithms that are feasible and scalable,
feasible in the sense that the algorithm will run within a desired time-frame and use a desirable amount of memory (e.g. nanoseconds as 
opposed to megayears and megabytes as opposed to petabytes), and scalable in the sense that time taken and memory used does not massively 
increase as the input size increases. To analyse algorithmic efficiency we use the concept of space-time complexity, a quantitative value
describing how an algorithm's efficiency and memory usage scales with its input size.</p>
<p>Space-time complexity is denoted with big O notation, so that 
    \[ f(x) = O(g(x)), \; x \to \infty \] reads as \(f(x)\) is big O of \(g(x)\). Here, \(x\) denotes the size of the input and \(f(x)\)
denotes the number of computational steps involved in determining its corresponding output. The comparison function \(g(x)\) is constrained
by the property \( |f(x)| \le M(g(x))\) for some positive constant multiple \(M\) for all \(x \ge x_0 \;\). Thus, if \(f(x)\) is big O of 
\(g(x)\) then \(f(x)\) is strictly less than or equal to some positive constant multiple of \(g(x)\). We typically seek to prove that 
an algorithm is big O of some generic comparison function,
    \[g(x) = x\]
    \[g(x) = log_2x\]
    \[g(x) = x^2\]
    \[g(x) = x^k\]
This allows us to assert that the algorithm's runtime/memory-usage is linear, logarithmic, quadratic, polynomial, etc., with respect to the size of its input.
Our analysis is complicated by the fact that some inputs may be more efficient to process than others despite their equal size.
This may be due to a property of the input itself or of the algorithm's current state. For example, let's consider an array that stores elements from
left to right and removes elements from right to left. The array is of fixed size. If we attempt to store more elements than the array can hold, the 
array is reallocated, meaning all elements are moved to a new area in memory of twice the size. Our algorithm simply inserts an element
into the array.</p>
<p>The best-case time complexity of this algorithm is \(O(1)\) when reallocation does not occur. The worst-case time
complexity is \(O(n)\) when reallocation requires moving \(n\) elements to the newly allocated memory segment. 
The more informal, average-case time complexity is \(O(1)\) because most insertion operations do not call for reallocation. And finally, the amortized 
time complexity is \(O(1)\) because the \(O(n)\) reallocation occurs once for every \(n\) insertion operations and is thus effectively
distributed across \(n\) insertion operations making for an \(O(n/n) = O(1)\) time complexity. Amortized time complexity can be thought 
of as a more formal means of expressing an algorithm's average time complexity.</p>
<p>Imperative programming is typically the first paradigm learnt by a programmer, who upon becoming rehearsed in an imperative-style
language can begin to practice implementing abstract data types and defining their user-interfaces keeping space-time complexity in mind.
An abstract data type (ADT) wraps primitive data types in access functions, creating an abstract interface around its underlying primitive components.
Examples of primitive data types include integers, characters, booleans, and arrays. Examples of ADTs include stacks, queues, linked lists,
hash tables, graphs and trees.</p>
<h4>Arrays</h4>
<p> An array is a primitive data type with a linear ordering by index. It may be uni-dimensional or multi-dimensional, and either fixed
or dynamic in size. As a primitive data type, an array acts as a simple pointer to memory. Thus the memory address stored plus the
value index multipled by the size of the value type stored by the array, will give direct address to that item in memory. It can be 
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
index both arrays, compare elements, increment the index of the lesser element and insert it into the result.</p>
<p>Merge sort is an example of comparative sorting in which sorting involves the direct comparison of elements. There also exist 
non-comparative sorting methods such as radix sort which examine and compare parts of elements rather than the elements themselves.
Radix sort sorts elements by comparing their least-significant digits, then second-least, then third-least, and so on for all digits
in the element of maximum length. It uses counting sort to quickly sort values of the currently sorted for order of magnitude (0-9), by
storing the count of each occurrence in an array, and finding the array's prefix sum.</p>
<p><img src="/Assets/images/array_techniques_1.png" width="100%" height="100%"></p>
<p>The least obvious step in our counting sort is the last one, in which we traverse backwards through the item array and find each 
item's corresponding pre-fixed item count as the index for its insertion into the resulting sorted array, before decreasing this pre-fixed
item count. This ensures that the order of items with the same value for the currently sorted for digit is preserved.
Having sorted our array, we can use binary search to search for an element in \(O(log_2n)\) time rather than \(O(n)\) time through index
manipulation of a hi, lo and mid value. This technique, amongst other array manipulation techniques, prove useful in a wide array of 
algorithmic problems. Also of use is the two-pointer and the sliding-window techniques.</p>
<p><img src="/Assets/images/array_techniques_2.png" width="100%" height="100%"></p>
<p>The two pointer technique allows for faster comparison of items in a sorted array than a naive brute-force comparison of all item pairs,
as does the sliding-window technique. The sliding window technique is used anytime we wish to analyse contiguous subarrays of size \(k\).
We do this by operating on the first \(k\) elements and then continuously removing the first element from the window and adding the next 
element to the window until the array size terminates. Array manipulation is also present in more esoteric fields of algorithmic problems, 
including low-level bit manipulation based on boolean algebra (arrays as vectors of bits) and dynamic programming (arrays as a means of
storage for partial solutions).</p>
<h4>Stacks</h4>
<p>A stack is an abstract data type that wraps an array and forces last-in first-out data access. Elements can be pushed to the top of
the stack, popped from the stack, or peeked from the top of the stack (without removal). The stack typically comes with a function to 
check whether or not it is empty. A stack can be of a pre-determined fixed size, or can grow dynamically with the number of pushed elements.</p>
<p><img src="/Assets/images/stack_simple.png" width="100%" height="100%"></p>
<p>Stacks are used in memory storage for local procedures, backtracking for syntactic completion, non-recursive tree-traversal,
depth-first and breadth-first walks, undo functionality in text editors, and of course, the call stack. Stacks can be implemented to 
restrict stack usage to stack operators only, or can be flexibile in also allowing random access to the internal stack element array.</p>
<h4>Queues</h4>
<p>A queue is an abstract data type that wraps an array and forces first-in first-out data access. Elements can be enqueued or 
dequeued. Other methods that a queue implementation typically come with include checks for whether the queue is full or empty and a peek
method to check the value of the element at the front of the queue without dequeuing.</p>
<p><img src="/Assets/images/queue_simple.png" width="100%" height="100%"></p>
<p>A queue is typically implemented not with an array but with another abstract data type such as a linked list to
avoid shuffling all internally stored values when enqueueing or dequeueing values. Queues can be used as buffers. For instance, process wait
and ready queues in OS schedulers, multithreaded application handling, signalling between asynchronous clock regions, and user actions on
distributed system apps.</p>
<h4>Linked Lists</h4>
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
next node at the very beginning of the pointer shuffle).</p>
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
<h4>Graphs</h4>
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
<h4>Hash Tables</h4>
<p>A Hash Table is a data structure that allows for the storage and retrieval of data items in constant rather than linear time. Consider
that to retrieve an element from an array, if the index of said element is unknown, takes on average \(n\) operations for \(n\) elements in
the array. A hash table uses a hash function to associate the index of the element with the element itself, so that if we know the element,
we know the index and can retrieve said element in constant time. To do this, the hash function takes the binary equivalent of the element,
hashes it (maps input item to output index via a bijective mathematical function where each input maps to a singular output and for enough
inputs all outputs are covered), and then collapses the output index into a suitable index range. Hash functions are not perfect, and so
collisions occur. Collisions are cases where the hash function hashes items with the same index. Thus, we implement the hash table as 
a dynamically allocated array of linked lists to store collisions. An ideal hash function minimises collisions and disperses collisions 
equally across the index range.</p>
<p><img src="/Assets/images/hash_table.png" width="100%" height="100%"></p>
<p>In a simple hash table, a hash item 8 is hashed and stored at a given index as is. Alternatively, the hashed value can be distinct 
from the item stored, with the hashed value acting as a key and the hashed item acting as that key's key-value. Often, when storing 
key-values in a hash table, we will simultaneously store keys, values and key-value pairs in three distinct hash tables, for quick 
retrieval of the key or value set.</p>