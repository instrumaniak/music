---
layout: post
title: CSS Button
category: coding
tags: css projects
---

Want to brush up your CSS basics? Making some buttons of varying styles using just vanilla CSS could be a quite effective way to do just that! I was experimenting with some button styles [previously](https://codepen.io/instrumaniak/pen/RgmGVE), in this post I will share one button style specifically that I liked the most out my CSS button style experiments.

<!--more-->

So first let's make a `div` element and give it an id (or class) and put some text in it:

```html
<div id="button">Hello world!</div>

```

Let make a simple 3D looking push button. The CSS for the button:

```css
#button {

  background-color: rgba(255,255,255,0.5);
  display: inline-block;
  padding: 5px 20px;
  margin: 50px;


  text-align: center;
  border: 1px solid rgba(200,200,200,0.2);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(20,20,20,0.2),
  inset 2px 2px 1px rgba(255,255,255,0.9);
}

#button:hover {
  background-color: rgba(255,255,255,0.2);
  box-shadow: 2px 2px 2px rgba(20,20,20,0.2),
  inset 2px 2px 1px rgba(255,255,255,0.2);
  cursor: pointer;
}

#button:active {
  /* box-shadow: inset 1px 1px 1px rgba(100,100,100,0.1),
  inset -2px -2px 4px rgba(255,255,255,0.5); */
  border: 2px solid rgba(200,200,200,0.2);
  background-color: rgba(200,200,200,0.1);
  box-shadow: unset;

}

```

And you get this output, go ahead click it!

<iframe src ="/demo/cssbuttons" style="border:0; width: 100%; height: 200px"></iframe>
