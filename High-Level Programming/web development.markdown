---
layout: default
mode: light
title: Web Development
---
<h3>Web Development</h3>
<p>The world wide web refers to the portion of the internet dedicated to serving and consuming web-content. Web-servers serve web-content, and web-browsers consume
web-content, like any other instance of the client-server model. Unlike other instances of the client-server model, the world wide web specifically communicates in
HTML, CSS and Javascript (and perhaps a few web-frameworks layered atop these cardinal three languages). Such communication occurs over ports 80 (less-secure) and 
443 (more-secure) via the Hypertext Transfer Protocol (HTTP). The web-browser, which receives web-content served from the web-server, renders it visually to the screen
as a web-page. HTML encodes the structure of the web-page, CSS styles the web-page, and JavaScript allows for the web-page to be dynamic and interactable. A web-site
is simply a collection of web-pages served by a set of web-servers. The entirety of the world wide web can be visualised as a finite state machine, like so:
<img src="/Assets/images/www_as_dfa.png" width="100%" height="100%">
In this visualisation, the left set represents the world wide web, containing a set of top-level domains, containing a set of domains, containing a set of subdomains,
containing a set of web-directories, containing a set of web-pages, in accordance with the general URL format,
"https://SubDomain.Domain.TopLevelDomain.CountryCode/webDirectory/webPage". At the bottom of this recursion sits the web-page itself, which has a set of URLs 
represented as edges that direct to other web-pages in the world wide web.</p>
<p>In this visualisation, the right set represents a single example web-directory derived 
from this very website (at the time of writing). Each node represents a web-page, each edge represents a URL, most of which are internal-redirections, some of 
which are external-redirections (back out into the world wide web). If we zoomed in on any individual node we would find yet another discrete finite automaton 
representing the set of states a single web-page can occupy, as created by the use of JavaScript which can dynamically change the state of a web-page based on 
user-interaction. We can consider a decision-making agent (you, the individual browsing the web) as a kind of colourful circle directing itself from edge to edge on 
this enormous world-wide finite state machine.</p>
<p>HTML, CSS and JavaScript are the tools by which these web-pages (seated at the bottom of the above recursion) are built. Lets first consider HTML. HTML is 
responsible for the structure of the web-page; it creates this structure through the use of elements, denoted by opening and closing tags. Consider the simple 
set of HTML elements: 
<ul>
    <li> &lt;html&gt; &nbsp; &lt;/html&gt; </li>
    <li> &lt;body&gt; &nbsp; &lt;/body&gt; </li>
    <li> &lt;main&gt; &nbsp; &lt;/main&gt; </li>
    <li> &lt;div&gt; &nbsp; &lt;/div&gt; </li>
    <li> &lt;p&gt; &nbsp; &lt;/p&gt; </li>
</ul>
These elements are nested within one another, that is to say, the &lt;p&gt; element is nested within the &lt;div&gt; element is nested within the &lt;main &gt;element
and so on. Similarly, the &lt;html&gt;is the parent element of the child element &lt;body&gt;, which is the parent element of the child element &lt;main&gt;, and so on.
Child elements are positioned in relation to parent elements in accordance with the following child-element properties: 
<img src="/Assets/images/html_progression_0.png" width="100%" height="100%">
</p>
<p>Note that these properties are defined in CSS. In the above image, we are also assuming that the element is displayed in a 'static' way, which simply means it is displayed in accordance with the rules we have thus far explained. We could change
the 'display' property of the element to be relative, which means we can push it left, right, up and down relative to the closest ancestral parent with a non-static display.
Alternatively we could change the 'display' property to absolute, which means it is positioned relative to the viewport itself, rather than any parent element. Without
any such properties set:</p>
<p><img src="/Assets/images/html_progression_1.png" width="100%" height="100%"></p>
<p>Lets then add a margin property to each element with a value of 1rem. Rem is a unit of measurement set to the root element's font size. In the case of our document, the root element 
is the &lt;html&gt; element. This gives us the following rendered viewport:</p>
<p><img src="/Assets/images/html_progression_2.png" width="100%" height="100%"></p>
<p>Now lets add multiple child elements to the &lt;div&gt; and &lt;p&gt; elements. This will show us why margin-bottom previously had no effect (because it is a property
defining the marign between child elements within a parent element, if there are less than two child elements, no such effect applies):</p>
<p><img src="/Assets/images/html_progression_3.png" width="100%" height="100%"></p>
<p>Lets add a border of size 0.1rem and a padding of size 1rem, to highlight these properties:</p>
<p><img src="/Assets/images/html_progression_4.png" width="100%" height="100%"></p>
<p>The difference between block elements and in-line elements has not yet been addressed. All elements discussed thus far have been block elements, which by default are inserted in the natural flow of the document (one after the other). This is different from inline 
elements which are inserted in the natural flow of text within the document. Examples of in-line elements include the &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;
and &lt;span&gt; elements, which embolden text, emphasize text, link text to other documents, and add custom CSS styles, respectively.</p>
<p>The design of our web-page is rather limited if all block elements are rendered in succession. To create more complex nested structures we can use flex-box,
a built-in CSS web-layout model. The foundational principle of flex-box is to align child elements in a parent element based on a main-axis and a cross-axis. Note that 
in the below visualisation, the main-axis is horizontal while the cross-axis is vertical, though this could be flipped depending on our desired flex orientation:
<img src="/Assets/images/flex1.png" width="100%" height="100%"></p>
<p>Flex-box allows us to have a large number of nested child elements aligned on both the cross-axis and main-axis in a variety of ways (towards the start of the axis,
the end of the axis, the entirety of the axis with variable spacing, etc). Here is a simple example of how flex-box could evolve our web-page structure:</p>
<p><img src="/Assets/images/html_progression_5.png" width="100%" height="100%"></p>
<p>Our HTML and CSS constructed so far can be parsed into a tree-like structure known as the Document-Object-Model. JavaScript can then use this model to make a web-page
dynamic, where state transitions occur within the one web-page. The tree-like structure of this model has already been visualised with colour-gradation, specifically from
the root node (the &lt;html&gt; element as a reddish-purple) through to the leaf nodes (the flex-child elements as a warm yellow). JavaScript is an Object-Oriented language,
meaning it can represent each node of this tree as an object with a set of attributes that can then be modified at will. JavaScript uses eventListeners which are attached
to individual objects in the Document-Object-Model, such that a JavaScript script is triggered to run anytime the user interacts with that object in a specific way. This
means the user can make an action in the web-page (such as scrolling, clicking a button, etc.) to trigger a script that will dynamically change the structure and the style
of the web-page automatically.</p>