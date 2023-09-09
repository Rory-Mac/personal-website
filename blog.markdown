---
layout: narrow
title: Blog - RoryMac Blog
---
<div style="padding-left: 4rem;">
{% for post in site.posts %}
  <h4>{{ post.date | date: "%B %-d, %Y" }}</h4>
  <p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}
</div>