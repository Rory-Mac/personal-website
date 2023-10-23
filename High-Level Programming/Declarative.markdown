---
layout: narrow
title: Declarative Programming
---
<h4>Declarative Programming</h4>
<p>Declarative Programming is programming that is structured such that the code we write does not tell the computer what to do but rather 
what we want as a response. Markup languages, such as HTML, XML and CSS, are declarative, as we are telling the computer the structure
and the formatting of the display we wish to present to the screen, the functionality of which is left to the rendering application.
Relational database managers such as SQL also fall under this category. Other languages that considered declarative or partially 
declarative include Haskell, Prolog, ML and LISP. Let's go through a quick primer on Structured Query Language (SQL) which is a relatively
intuitive relational database management system (RDBMS) that introduces the concept of declarative programming.
Consider the following simple example query.</p>
<p><code>
&emsp;&emsp;&emsp;&emsp;SELECT * FROM table INNER JOIN table2 ON table.column3 = table2.column4 <br>
&emsp;&emsp;&emsp;&emsp;WHERE table.column1 > 40 GROUP BY table.column1 ORDER BY table.column2
</code></p>
<p>Note that such a query does not specify how to extract the requested data from the database in a step by step manner, instead it
specifies the constraints deciding what data should be retrieved. The actual workflow of retrieving the requested data is distinct from
the query itself, hence SQL belongs to the declarative programming paradigm. Let's consider another simple example, written in Haskell.
Haskell is a functional programming language which allows us to write partially or totally declarative programs. A simple expression
like<code> f x = x + 1 </code>can be thought more as a declaration rather than an instruction. In imperative programming, such an 
expression would equate to assignment at a single timestep. In declarative programming, however, the expression acts as a definition,
and any future expression of the form<code> f y </code>is equivalent to the expression<code> y + 1 </code>.</p>
