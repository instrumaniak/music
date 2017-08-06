---
layout: post
title:  Scraping web data right from the browser console
category: coding
tags: javascript
---
I have enrolled in some free online courses (MOOC) from various sites and I wanted to keep track of these courses in a spreadsheet. So I needed to copy the titles of the courses and paste into a spreadsheet. Simply copying and pasting is not so appealing as I have to clean up unwanted text thus it would be a boring manual work. So I thought why not *automate the boring stuff with javascript*? So lets see how to quickly extract data from the web page right from the browser console and make the copy-paste process a bit smarter!
<!--more-->

## The process

**Find the pattern**  Use the web browser inspector tool to pick a page element that you want to extract and/or look into the source code to find patterns. Pickup the tag/class/id name that gets repeated. 

**Extract the data**  In the console select all the matching element using DOM API and iterate over the items.

## Example
Let's go extract just the titles of the [top rated](https://www.coursera.org/featured/top_rated_courses) courses at Coursera. First by right clicking on the title and inspecting the element in the DOM inspector (I'm using firefox here), we can find that (as of this writing) all the titles of the courses in this page are tagged ```<h2>``` like below:

~~~ html
.
<h2 class="color-primary-text headline-1-text flex-1" data-reactid="104">Algorithms, Part I</h2>
.
.
<h2 class="color-primary-text headline-1-text flex-1" data-reactid="116">Single Page Web Applications with AngularJS</h2>
.
~~~

So in the console we can write:

~~~ javascript
var data = document.getElementsByTagName('h2');
Array.from(data).forEach(x=>console.log(x.innerText));
~~~

Now we get plain text output in the console somewhat like below that we can just drag over to copy and paste into a spreadsheet:

~~~
Algorithms, Part I
Single Page Web Applications with AngularJS
Programming Languages, Part A
Machine Learning
Medical Neuroscience
...
~~~

## Moving on!

Using vanilla javascript and the DOM API to extract data from web pages right from the browser console is really a convenient, quick and dirty approach that works very well for personal small scale data collection. 

But things can get little more complex- we can use Comma Seperated data Values and import it into spreadsheet and split it there to get into multiple rows and columns. Again, we might also need to scrap multiple times, in that case Firefox Greasemonkey user scripts can be a straight forward solution, while still remaining in the client side and using the same code that also works from the browser console. There is also another option of using client side JS scrapping library (a quick google search shows: artoo.js) OR you can just go back to your favorite back-end solution if that's what you like!
