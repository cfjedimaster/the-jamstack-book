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

<h2>Our Authors</h2>

<ul>
{% for author in site.data.authors %}
<li>
	<a href="{{site.website}}">{{ author.name }}</a> - 
	<a href="https://twitter.com/{{author.twitter}}">@{{author.twitter}}</a>
</li>
{% endfor %}
</ul>
