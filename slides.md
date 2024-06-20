---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: MapLibre - The Inside Scoop
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
# transition: fade
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
fonts:
  sans: Open Sans
layout: full
clicks: 2
---

<MapFirstSlide />

<div class="flex flex-col justify-center items-center h-full w-full absolute top-0" v-click.hide="1">
  <div class="flex flex-col justify-center items-center bg-white bg-opacity-80 py-10 w-full">
  <img src="/maplibre-logo.svg" class="w-60 mb-5" />

  <h2 class="mb-3">The Inside Scoop 🍨</h2>

  <p>Bart Louwers</p>
  </div>

  <div class="absolute bottom-0 left-0 p-5" v-click.hide="1">
    <img src="/osgeo-logo-cmyk.svg" class="h-10" />
    <span>Open Zomerpodium, 19th of July 2024</span>
  </div>

  
</div>
---
layout: full
clicks: 0
---

<JawgMap />

---
layout: two-cols
---

<h2>MapLibre GL JS</h2>

<img src="/screenshot-web.png" class="pr-6 pt-3" />

::right::

<h2>MapLibre Native</h2>

<div class="flex flex-row pt-3">

  <img src="/android.png" class="w-40" />

  <img src="/ios.png" class="w-40" />
</div>

---
layout: two-cols
---

<h2 class="pb-3">MapLibre GL JS</h2>

- Written in JavaScript / TypeScript
- Also called MapLibre Web
- Uses WebGL
- Lots of organic contributors

<img src="/download-stats-maplibre-gl.png" v-click class="pr-4" />

::right::

<h2 class="pb-3">MapLibre Native</h2>

- Written in C++ (and Objective-C, Java/Kotlin)
- iOS, Android, Node.js, Qt, Windows, Linux
- OpenGL ES, Metal

---

# MapLibre Style Spec Documentation

<img src="/style-spec-screenshot.png" class="h-90" />

<a class="font-mono">https://maplibre.org/maplibre-style-spec</a>

---
layout: two-cols
---

# Developments

<v-clicks >

- MapLibre Native: Metal backend (**Released this year!**)
- MapLibre Native: Vulkan backend
- Expansion of the style specification
- Parity between MapLibre GL JS and MapLibre Native
- MapLibre GL JS: Globe View
- MapLibre Tiles (MLT)

</v-clicks>

::right::

<div class="flex h-full justify-center items-center">
  <img src="/metal.svg" class="absolute w-40" v-click="[1]" />
  <img src="/Vulkan_API_logo.svg" class="absolute w-50" v-click="[2]" />
  <img src="/globe-view.png" class="absolute w-100" v-click="[5]" />

</div>

---
---
# Sponsors

<p></p>
<p class="text-center text-black	">🥇 Gold</p>

<div class="flex flex-row h-30 gap-10 justify-center">
  <a href="https://aws.amazon.com/location" style="border: none"><img src="https://maplibre.org/img/aws-logo.svg" alt="Logo AWS" class="h-full"/></a>

  <a href="https://meta.com"><img src="https://maplibre.org/img/meta-logo.svg" alt="Logo Meta" class="h-15" /></a>
</div>

<p class="text-center text-black	">🥈 Silver</p>

<div class="flex flex-row h-10 gap-10 justify-center items-center">

<a href="https://www.mierune.co.jp/?lang=en"><img src="https://maplibre.org/img/mierune-logo.svg" alt="Logo MIERUNE" class="block h-15"/></a>

<a href="https://komoot.com/"><img src="https://maplibre.org/img/komoot-logo.svg" alt="Logo komoot" class="h-13"/></a>

<a href="https://www.jawg.io/"><img src="https://maplibre.org/img/jawgmaps-logo.svg" alt="Logo JawgMaps" class="h-10"/></a>



</div>

<div class="flex flex-row h-10 gap-10 justify-center items-center mt-10">
<a href="https://www.radar.com/" style="border: none"><img src="https://maplibre.org/img/radar-logo.svg" alt="Logo Radar" class="h-10" /></a>

<a href="https://www.microsoft.com/"><img src="https://maplibre.org/img/msft-logo.svg" alt="Logo Microsoft" class="h-10"/></a>

<a href="https://www.mappedin.com/"><img src="https://maplibre.org/img/mappedin-logo.svg" alt="Logo mappedin" class="h-11"/></a>
</div>

---
---

<h1>Questions?</h1>

<v-clicks depth="2">

- Why does a company like Amazon want to use MapLibre?
- Can I work for MapLibre?
  - **Yes** <a class="font-mono" href="https://maplibre.org/jobs">https://maplibre.org/jobs</a>
- How can I get involved?
  - Slack, GitHub, Monthly Newsletter (LinkedIn, Mastodon) <a class="font-mono" href="https://maplibre.org/community">https://maplibre.org/community</a>

</v-clicks>

---
---

# See you at FOSS4G Europe 2024?

- Workshop: [Generate, serve, and visualize your own base map or overlay tiles with MapLibre stack and Planetiler](https://talks.osgeo.org/foss4g-europe-2024-workshops/talk/GFKMYG/) with Yuri Astrakhan
- Talk: [Building a New Rendering Backend for MapLibre Native: Industry Collaboration in FOSS](https://talks.osgeo.org/foss4g-europe-2024/talk/SBRTLT/)

<div class="flex flex-row justify-end pt-20">

<img src="/FOSS4GE_light_logo_with_triangle.svg" class="w-50" />

</div>