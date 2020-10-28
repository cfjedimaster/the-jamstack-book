---
layout: post
title:  "Hello World"
date:   2020-08-22 9:00:29 -0500
categories: general
---

Hello World. This is my first *awesome* post!

{% assign name = "ray" %}

<p>
Hello, {{ name }}!
</p>

{% assign cool = true %}

{% if cool %}
<p>
Yes, you are cool.
</p>
{% endif %}

{% assign cats = "Fluffy,Muffy,Duffy" | split: ',' %}
<ul>
{% for cat in cats %}
	<li>{{ cat }}</li>
{% endfor %}
</ul>
