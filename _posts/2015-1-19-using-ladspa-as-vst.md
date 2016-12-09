---
layout: post
title: Using LADSPA plugins as VST plugins
---

This post will discuss how to use the LADSPA plugins,  to another VST host as VST plugins, on a Windows platform. To summarize this post:  It can be done using a VST plugin called ladspashell which loads these LADSPA plugins and makes them available to be used as VST plugins. I will be discussing from the perspective of Reaper but technically you can use any other VST host like FL Studio. Scroll down and skip the text to get right to the links.

LADSPA plugins are Linux audio plugins that are usually found in Linux audio environment but a set of plugins that are compiled for Windows are also supplied for Audacity to be used on Windows platform.  But even if you don't use Audacity, you can still use these LADSPA plugins on your DAW (Digital Audio Workstation) if it supports VST plugins.
<!--more-->

## Why use LADSPA as VST?

There are so many free VST plugins out there and Reaper itself comes with a lots of JS plugins. So you might wonder why you would like to use LADSPA plugins as VST. Well, your reason for using it might vary. If you use Audacity as your sound editor on windows and have the LADSPA plugins pack (which contains more than 90 plugins) and for some reason you want to use the same LADSPA plugin in your DAW that supports VST, then you can use these. So you can change effects parameters whenever you want and render only when you are done, as in Audacity you can preview little segments of sound and then you have to render it immediately. So, if you decide to use LADSPA as VST plugins, then you get the added benefit of parameter automation using curves, something that you can't do with Audacity at the moment.


## LADSPASHELL VST

In order to use [LADSPA plugins](http://audacity.sourceforge.net/download/plugins?lang=en), that are compiled for Windows platform, on a VST host, you need a VST plugin called [ladspashell](http://www.xlutop.com/buzz/zip/ladspashell_v1.0.1b.zip) (100KB). ladspashell is part of 'Polac VST Loaders for Jeskola Buzz' (http://www.xlutop.com/buzz/) and you can browse for this here: http://www.xlutop.com/buzz/zip/  But you will  just need ladspashell for the purpose we are talking here.


After installing ladspashell to your default VST plugin folder by unpacking the ladspashell.dll file there and then loading the plugin for the first time, you will be asked for the location of the path of directory where those LADSPA plugins are installed. After choosing the right path, the LADSPA plugins will be available to your host. How it be available will depend on the host.


LADSPA plugins on Reaper


## Workaround for GVerb on Reaper

Many of these LADSPA plugins are Mono channel effect processors and the host automatically assigns two instances of these plugins for stereo channels. Some plugins like GVerb which has 1 input and 2 output, you need to do extra work to get proper stereo 2 in 2 out type sound.


Lets see how it's done. One quick way would be to just load two instances of the same plugin and use the plugin pin connection to assign left and right channels. You can use presets to share the same settings between these instances.


Pin connection for getting proper stereo channel processing for GVerb


GVerb LADSPA plugin on Audacity


GVerb LADSPA plugin on Reaper. As you can see "1 in 2 out", so use proper channel routing.


## Reference

- [LADSPA plugin loader](http://psycle.pastnotecut.org/thread.php?threadid=2891&amp;boardid=5) - A forum post at PSYCLE.

- [Discussions](http://www.kvraudio.com/forum/viewtopic.php?t=177538&amp;start=150) that contains LADSPA wrapper at KVR Audio.

- Polac VST Loaders for Jeskola Buzz. ladspashell originated from this place. http://www.xlutop.com/buzz/ , http://www.xlutop.com/buzz/zip/


(Last edited: 18 June, 2015, mostly for readability.)

