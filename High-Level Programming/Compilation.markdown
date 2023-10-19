---
layout: narrow
title: Compilation
---
<h4>Compilation</h4>
<p>Compilation is the translation of a high-level programming language into a low-level programming language. More formally, a compiler
translates an expression belonging to a context-free grammar into an expression belonging to a regular language, which is then assembled
into a sequence of executable binary instructions. Backus-Naur Form is a metasyntax notation composed of symbol-expression pairs of the
form '&lt;symbol&gt; ::= expression' used to formalise context-free grammars. Consider a simple C-like program which for a
given input \(n\) finds the \(n^{th}\) fibonacci number.</p>
<p><img src="/Assets/images/compiler_input.png" width="100%" height="100%"></p>
<p>Tokenizers/lexers perform the first step in compilation by determining the words of signficance belonging to an input program and 
giving them additional meaning, such as the class of expression they belong to. The above visualisation acts as an example to show how
a Backus-Naur form description of a high-level programming languages sorts its tokens in hierarchical fashion. Consider that just one
symbol-expression pair such as<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;functionDeclaration&gt; &nbsp; ::= &nbsp; &lt;type&gt; &lt;identifier&gt; '(' &lt;args&gt; ')' '{' &lt;statements&gt; '}'<br> 
can describe the entire program, with additional symbol-expression pairs acting to increase the resolution from non-terminal to terminal symbols.
Note that #include statements are left to the linker.</p>
<!--
syntax diagram
parser and parse tree
is C a context-free grammar
-->