---
layout: default
mode: wide
title: Blog
---
<div style="padding: 0 2rem">
{% for post in site.posts %}
  <h4>{{ post.date | date: "%B %-d, %Y" }}</h4>
  <p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}
</div>
<br><br><br><br><br><br><br><br>