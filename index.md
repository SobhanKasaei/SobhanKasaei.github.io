---
title: Sobhan Kasaei
heading: About Me
permalink: /
---

My background is in Industrial Engineering at [Sharif University of Technology](https://en.sharif.edu/) (B.Sc., 2021–2026), with a minor in Economics.

I work at the intersection of operations research, stochastic modeling, and machine learning. What draws me most is **sequential decision-making under uncertainty**: problems where choices are made step by step, outcomes are random, and every decision shapes the next one. They mirror, quite closely, the way we make decisions in everyday life. I am especially interested in their applications in economics and in the incentives behind those decisions.

## Research Interests

- Sequential decision-making under uncertainty
- Multi-armed bandits
- Stochastic processes and stochastic modeling
- Mathematical optimization and operations research
- Machine learning

## Working Papers

{% include publications.html %}

## Education

<div class="entries">
{%- for e in site.data.education %}
  <div class="entry">
    <div class="entry-head">
      <p class="entry-title">{{ e.degree }}</p>
      <p class="entry-dates">{{ e.dates }}</p>
    </div>
    <p class="entry-sub">{% if e.url %}<a href="{{ e.url }}">{{ e.institution }}</a>{% else %}{{ e.institution }}{% endif %}, {{ e.location }}</p>
    {%- if e.details %}<p class="entry-body">{{ e.details | join: " &middot; " }}</p>{% endif %}
  </div>
{%- endfor %}
</div>
