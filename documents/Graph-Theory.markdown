---
layout: narrow
title: Graph Theory
---
<h4>Graph Theory</h4>
<p>Graph Theory studies the structure of objects and object-relations. Let us start with some definitions. A simple graph exists as the
ordered pair \(G=(V,E)\) with vertices \(V=\{v_1,v_2,\ldots,v_n\}\) and edges \(E\) defined over \(V\). Our definition of \(E\) 
for a simple undirected graph (respectively permitting and prohibiting loops) is as follows.
\[E \subset \{\{x, y\} \>|\> x, y \in V\} \]
\[E \subset \{\{x, y\} \>|\> x, y \in V, x \neq y\} \]
In the case of a directed graph our definition changes to the following.
\[E \subset \{(x, y) \>|\> (x, y) \in V^2\} \]
\[E \subset \{(x, y) \>|\> (x, y) \in V^2, x \neq y\} \]
A multigraph exists as the ordered pair \(G=(V,E,\phi)\) with vertices \(V=\{v_1,v_2,\ldots,v_n\}\), edges \(E\) defined over \(V\)
and an incidence function \(\phi\) that maps edges to unordered pairs of vertices. This way, multiple edges can exist between vertices. For a
directed and undirected multigraph permitting loops, the definition of \(\phi\) is as follows.
\[\phi : E \rightarrow \{\{x, y\} \>|\> x, y \in V\} \]
\[\phi : E \rightarrow \{(x, y) \>|\> (x, y) \in V^2\} \]
We can then introduce the hypergraph as a generalisation of these definitions. A hypergraph exists as the ordered pair \(H=(X,E)\) with
vertices \(X=\{x_1, x_2, \ldots, x_n\}\), and edges \(E\) defined over \(X\) as a set of ordered pairs of subsets of \(X\). Thus, we can
define \(E\) for a simple undirected hypergraph as follows.
\[E \subset \{\{D,C\} \>|\> D, C \subset X\}\]
We can modify this definition to permit loops, directionality, and multiple edges, just as above. Alternatively, we can use a recursive
definition to construct nested hypergraphs, with a potentially infinite degree of nesting.   
\[H_n=(X_n,E_n)\]
\[X_n = \{D, C \>|\> D, C \in E_{n-1}\} \]
\[E_n \subset \{\{D, C\} \>|\> D, C \in E_{n-1}\} \]
Let us look at some of the classes of problems commonly encountered in graph theory.</p>
<h4>Graph Isomorphism Problems</h4>
<p>Problems of this sort require one to determine whether two finite graphs are isomorphic. Two graphs are isomorphic if there exists
a structure-preserving bijection between them, expressed formally as follows.
\[f : V(G) \rightarrow V(H) \]
\[u \in G \rightarrow f(u) \in H \]
\[(u,v) \in E(G) \rightarrow (f(u), f(v)) \in E(H)\]</p>
<p>Take as a simpler example, the determination of graph isomorphism for undirected acylic graphs (i.e. trees). The following
algorithm solves this problem in linear time and space for the given trees \(T_1, T_2\).<p>
<p><code>
Find Centroid of T_1, T_2:<br>
&emsp;R ← select arbitrary root<br>
&emsp;Perform recursive DFS from R:<br>
&emsp;&emsp;&emsp;s_n ← number of child nodes + 1 &emsp;&emsp;// store subtree size of vertex n<br>
&emsp;Perform recursive DFS from R:<br>
&emsp;&emsp;&emsp;p ← n - s_k &emsp;// find subtree size of parent when node k is removed<br>
&emsp;&emsp;&emsp;a ← max(s_a) &emsp;// find max adjacent subtree size when node k is removed<br>
&emsp;&emsp;&emsp;m_n ← max(p, a) &emsp;<br>
&emsp;Perform recursive DFS from R:<br>
&emsp;&emsp;&emsp;Store minimum m_n less than equal to ⌊n/2⌋<br>
For each pair of centroids:<br>
&emsp;Perform recursive DFS from R:<br>
&emsp;&emsp;&emsp;Order labels of all child nodes using counting sort<br>
&emsp;&emsp;&emsp;Label current node as concatenation of ordered child node labels<br>
&emsp;If labels identical then return that trees are isomorphic<br>
Return that trees are not isomorphic
</code></p>
<h4>Graph Coloring Problems</h4>
<p>Problems of this sort may require the coloring of vertices as a means of marking properties encountered along a traversal. 
Alternatively, graph coloring problems may seek to pair graph properties with coloring properties, for instance the 4-color theorem, 
which states that the vertices of any loopless planar graph can be colored such that no vertex has adjacent vertices of more than four
distinct colors. Take as a simple example, the determination of whether a graph is or is not bipartite. A graph is bipartite if and only
if there exists a coloring such that all vertices are one of two colors and the colors of any pair of adjacent vertices are distinct. Thus
to determine if a graph is bipartite we can simply perform a breadth-first traversal and check for this condition for each visited node.</p>
<h4>Paths & Cycles</h4>
<p>Path & Cycle problems involve deriving traversals within a graph that maintain a certain property, oftentimes minimisation of cost. We
can take Prim's algorithm to find a minimum spanning tree on a connected graph, as an introductory example. A minimum spanning tree is a
tree connecting all vertices in a connected graph, such that the sum of the tree's edge weights is a minimum. Prim's algorithm takes a
relatively simple greedy approach. Select any intial vertex and select the path to an adjacent vertex of minimum cost. Select the minimum
cost path from all selected to all unselected vertices and add that edge-vertex pair to the selected set. Repeat until all vertices exist
in a selected edge-vertex pair.</p>
<h4>Subgraphs & Decomposition</h4>
<p>Decomposition problems involve partitioning the edge set of a graph into partitions that uphold a property of interest. This may 
include partitioning a graph into subgraphs isomorphic to a given fixed graph. This is useful when graph properties are hereditary, i.e.,
a graph has a property if and only if all subgraphs have that same property. We can take, as a simple example, decomposition of a graph 
into its biconnected subgraphs. A subgraph is biconnected if all vertices belonging to that subgraph remain connected despite the removal 
of any one vertex. A naive quadratic time algorithm we can use to decompose a graph into its biconnected components is as follows.</p>
<p><img src="/Assets/images/biconnected_decomposition.png" width="100%" height="100%"></p>
<p>For each vertex we perform a depth-first-search on adjacent vertices with that vertex removed and determine if they remain 
connected. If not, the edge between the removed and adjacent vertex, as well as all edges in the discovered connected component, are 
attributed a unique color.</p>
