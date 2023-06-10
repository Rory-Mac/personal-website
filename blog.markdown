---
layout: default
mode: light
title: Blog
---

{% for post in site.posts %}
  <h4>{{ post.date | date: "%B %-d, %Y" }}</h4>
  <p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}