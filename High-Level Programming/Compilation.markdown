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
giving them additional meaning, such as the class of expression they belong to. A parser then parses the tokenized input text into a 
parse tree, as visualised above. Backus-Naur form formalises the hierarchical structure of a high-level programming language.
Just one Backus-Naur symbol-expression pair
"&lt;functionDeclaration&gt; &nbsp; ::= &nbsp; &lt;type&gt; &lt;identifier&gt; '(' &lt;args&gt; ')' '{' &lt;statements&gt; '}'"<br> 
can describe the entire program. Additional symbol-expression pairs increase the resolution from non-terminal to terminal symbols
in the parse tree. Note that #include statements are left to the linker. Syntax diagrams (also called railroad diagrams) can assist 
in visualising rules of parsing. For a simple C-like language, the syntax diagram will look approximately as follows.</p>
<p><img src="/Assets/images/syntax_diagram.png" width="100%" height="100%"></p>
<p>This syntax diagram, although limited to a small feature set, parses a context-free grammar. Context-free grammars are grammers 
in which the rules of expression production can apply to any non-terminal symbol regardless of context. Put simply, we can parse
any non-terminal symbol by simply knowing the rule set, and not the symbols that preceded it.</p>