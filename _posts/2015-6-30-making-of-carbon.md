---
layout: post
title: Making of the track Carbon
tag: 
---

I made my first music on Linux, used AVLinux 6.01 to be more specific. Here is the link of the work: [Carbon](https://raziurrahman.bandcamp.com/track/carbon)

This post briefly documents the production process, so that I can come back later to see how I produced this work and why it sound this way, so that I can build upon this experience.
<!--more-->

<iframe seamless="" src="https://bandcamp.com/EmbeddedPlayer/track=2730672239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" style="border: 0; height: 692px; width: 600px;"><a href="http://raziurrahman.bandcamp.com/track/carbon">Carbon by Raziur Rahman</a></iframe>
<br>

## Session management

The first issue on producing this music on Linux platform seems to me is the 'Linux audio session management', which happens when you fail to use a single software for your entire music production. For this project it happened because this is a midi and synth based production. Unluckily, I just couldn't make ardour 3, qtractor to work with lv2 synths, they just kept crashing. So, I went for the traditional linux music production workflow.

When I started the project I used ardour 3.5 which had a bug which caused my midi files to get deleted. So, I went with seq24 for midi works but later found ardour 3.4 to be working so used it for rest of the sound processing.

I used bash script to manage my audio session because it was more easy and unsurprising than the other options: non session manager and lash.


Using shell script to manage audio session


## Instruments/Synths

**Piano**:  linuxsampler "The Maestro Concert Grand" (lv2 plugin). Used qsampler to load the gig file.


**Bass**: amsynth (lv2 plugin)


**Drums**: Hydrogen. Uses Black pearl kit from AVLinux. (standalone)


**Organ**: aeolus (standalone). I used the pedal section, don't know much about real organ, so just went with it.


**Rhodes**: fludsynth (dssi plugin)


**Celesta**: hexter (dssi plugin)


**Lead synth**: sineshaper (dssi plugin)



I used mostly the default presets except for amsynth. I made that bass sound myself.


## Midi prgramming

used *seq24* for all midi sequencing.



## Multitrack recording and sound processing

Used *ardour 2* for live mixing during the time of midi programming sessions. Used mhwavedit for recording raw mixes so that I can hear the progress without loading the complete session. Later I recorded all the tracks in ardour 2.  Then imported the project in ardour 3.4 and did rest of the final sound processing there.





The final sound processing process was basically mixing the tracks and apply some enhancement effects on the master bus. Mostly used ladspa effects for this project.


## Cover art

The cover art was made entirely in *GIMP*. Put some GIMP generated flame fractal stuff then applied some texture and labels. That's all.




## Final words

Using Free linux software to produce music could be a difficult experience because of the learning curve. So it took me long time to finish the work. Turning your idea into music is a lengthy way to go and might cause you to learn programming rather than making music! But it's improving and becoming more user friendly day by day.