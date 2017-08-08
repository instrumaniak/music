---
layout: post
title: Filter/Search a table
category: coding
tags: [javascript, projects]
---

This is a little project, I did to brush up my JavaScript and CSS coding skills. In this project you can interactively filter/search the data of a html table. See it in action from [here](/demo/filter-table).
<!--more-->

The idea came from a w3school tutorial but I coded it from scratch and implemented some features that I think would make the user experience more fluid but that made the code a bit complex for me.

I thought I would be able to code it within an hour as I saw the basic code but it took me few days to implement the functionality and style that I was looking for.

So I realized that a project becomes quickly difficult and complex when you try to be creative or solve real world problems. You can read tutorial after tutorial, watch many videos and do lots of coding exercises but it's the projects- where you really learn the material by actually doing things and building stuffs!

## Problem statement
Search text interactively inside of a html table, that is, Filter out unmatched data from a html table that does not match the given input. Using only vanilla HTML/CSS/JS.

## User stories
The features we are going to implement:

1. I can filter the data by writing in the text box
  - I can choose a column to filter.
  - I can choose filtering to be *case sensitive*.
  - The filtering process is *interactive*, it happens as I type.
2. I can clear text input.
  - By a clear *button*.
  - By pressing Esc *key*.

## HTML

The user input section:

```html
<div class="toolbox">
  
  <input type="text" id="inpValue" placeholder="Type here to filter the table below by name or country.." />

  <div class="control-panel">

    <label><input id="rbName" type="radio" name="radios" checked/>
    Name</label>

    <label><input id="rbCountry" type="radio" name="radios" />
    Country</label>

    <label><input id="cbCaseSns" type="checkbox" />
    Case sensitive</label>

    <button id="btnClear">Clear</button>

    <div class="info-panel">
      <p>Tip: use ESC key to quickly clear text box.</p>
    </div>

  </div>
</div>

```

The data table:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sunway TaihuLight</td>
      <td>China</td>
    </tr>
    <tr>
      <td>Tianhe-2 (MilkyWay-2)</td>
      <td>China</td>
    </tr>
    .
    .
    .
  </tbody>
</table>
```

## CSS

```css
body {
  font-size: 16px;
  max-width: 600px;
  position: relative;
  margin: 0 auto;
  font-family: 'Segoe UI';
}

.wrap {
  padding: 10px;
}

.toolbox {
  text-align: center;
  padding: 5px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-bottom: 20px;
}

.info-panel p {
  font-size: 12px;
}

a {
  text-decoration: none;
  font-size: 12px;
}

#inpValue {
  width: 90%;
  margin: 10px 2px 2px 10px;
  padding: 5px;
  border: 1px solid #eee;
}

.control-panel {
  padding: 5px;
}

label {
  display: inline-block;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f9f9f9;
  padding: 5px;
}

tr {
  border-bottom: 1px solid #ddd;
}

tr th:first-child {
  width: 70%;
}

td {
  padding: 5px;
}

```

## JavaScript

```js
// Get the interactive-input  elements
var btnClear = document.getElementById("btnClear");
var inpValue = document.getElementById("inpValue");
var rbName = document.getElementById("rbName");
var rbCountry = document.getElementById("rbCountry");
var cbCaseSns = document.getElementById("cbCaseSns");

// Table rows
var tblRows = document.getElementsByTagName("tr");

// Button-onclick: Clear
btnClear.addEventListener("click", function(){
  inpValue.value = "";
  filterTable();
})

// Checkbox-onclick: Case sensitive
cbCaseSns.addEventListener("click",function (){
  filterTable();
});

// radio-name-onclick
rbName.addEventListener("click",function (){
  filterTable();
});

// radio-country-onclick
rbCountry.addEventListener("click",function (){
  filterTable();
});

// Inputbox-onkeyup
inpValue.addEventListener("keyup", function(e){

  if (e.key === "Escape"){
    inpValue.value = "";
  }

  filterTable();
});


function filterTable(){
  
  // Handle case sensitive
  var caseSn = cbCaseSns.checked ? "" : "i";
  var pattern = new RegExp(inpValue.value, caseSn);

  // Handle column (td number)
  var tdNum = rbName.checked ? 0 : 1;

  // Iterate over rows and filter
  for(var i =0,l=tblRows.length;i<l;i++){
    
    var td = tblRows[i].getElementsByTagName('td')[tdNum];
    if(td){
      if(td.innerHTML.search(pattern) > -1 ){
        tblRows[i].style.display = "";
      }
      else {
        tblRows[i].style.display = "none";
      }
    }
  }
}

```

## Result

<p data-height="681" data-theme-id="light" data-slug-hash="QMLJyd" data-default-tab="result" data-user="instrumaniak" data-embed-version="2" data-pen-title="Filter table data" class="codepen">See the Pen <a href="https://codepen.io/instrumaniak/pen/QMLJyd/">Filter table data</a> by Raziur Rahman (<a href="https://codepen.io/instrumaniak">@instrumaniak</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

You can also see it in action from [here](/demo/filter-table) or checkout the links below.


## Links

- View this project on [codepen](https://codepen.io/instrumaniak/full/QMLJyd/)

- View full source code on [github](https://github.com/instrumaniak/little-projects/tree/master/filter-html-table).

- The Original [w3school tutorial](https://www.w3schools.com/howto/howto_js_filter_table.asp)
