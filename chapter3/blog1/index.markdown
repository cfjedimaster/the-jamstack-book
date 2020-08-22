---
layout: default
title: My Blog
---

<h1>Posts</h1>

<ul>
{% for post in site.posts %}
<li><a href="{{ post.url }}">{{ post.title }}</a>, written 
{{ post.date}}</li>
{% endfor %}
</ul>