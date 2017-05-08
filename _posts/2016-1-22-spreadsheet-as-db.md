---
layout: post
title:  Using spreadsheet as a simple database
category: tech-talk
---
Sometimes when you have a set of text data and you want to keep adding, refining and querying on that set, you face the need to use a database. For a smaller set of data of less than or about a hundred items- using a spreadsheet seems to be more intuitive and fast.

## The basic process

Use the first row as the titles of each column and freeze the first row so when you scroll down these column label shows. It makes data entry and query easier. For each column use a single type of data. Finally use Auto filter to query your data.
<!--more-->

## Example: An audio plugin data set

There are many free VST plugins available online. They are of varying quality and I wanted to test them before directly using them on music production. Over the period of a year, I have downloaded about a hundred of these plugins and they are of different types: some are synthesizers, some are effect processors, some works on midi, some are for audio visualization, etc.

As I install and test any one of them I put that info on the spreadsheet. Each plugin has entry fields for- name, type, installed, tested, rating and comment. Later it becomes quite easy to filter out these data by just using auto filter. Here is a screenshot of my VST plugin data set on LibreOffice Calc.

![Using spreadsheet for small data set](/images/001-spreadsheet-or8.png)

## Where to go from here

Sooner or later you might need more flexibility and scalability- in that case you might consider using a relational database. Exporting spreadsheet data to CSV and importing that into a database seems like a good idea.

For my data set management, I am thinking about using Python programming language and sqlite database.