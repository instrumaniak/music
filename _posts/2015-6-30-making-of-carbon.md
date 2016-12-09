---
layout: post
title: Making of the track - Carbon
tag: 
---

I made my first linux-music, used AVLinux 6.01 to be more specific. Here is the link of the work: [Carbon](https://raziurrahman.bandcamp.com/track/carbon). This post briefly documents the production process, so that I can come back later to see how I produced this work and why it sound this way, so that I can build upon this experience.
<!--more-->

<iframe seamless="" src="https://bandcamp.com/EmbeddedPlayer/track=2730672239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" style="border: 0; height: 692px; width: 600px;"><a href="http://raziurrahman.bandcamp.com/track/carbon">Carbon by Raziur Rahman</a></iframe>
<br>

## Session management

The first issue on producing this music on Linux platform seems to me is the 'Linux audio session management', which happens when you fail to use a single software for your entire music production. For this project it happened because this is a midi and synth based production. Unluckily, I just couldn't make ardour 3, qtractor to work with lv2 synths, they just kept crashing. So, I went for the traditional linux music production workflow.

When I started the project I used ardour 3.5 which had a bug which caused my midi files to get deleted. So, I went with seq24 for midi works but later found ardour 3.4 to be working so used it for rest of the sound processing.

I used bash script to manage my audio session because it was more easy and unsurprising than the other options: non session manager and lash.


Here is the shell script that was used to manage audio session:

~~~ bash
#!/bin/bash

# This scripts load the project
# Project code name: Carbon
# Raziur Rahman, 2015

export PROJECT_DIR=/home/razi/music-projects/projects/01-carbon
export LV2_PRESETS=/home/razi/music-projects/lv2-instruments/presets

#load a2jmidid
a2jmidid -e -u &
sleep 2

#Celesta (seq 4)
$PROJECT_DIR/scripts/ghostess-patch &
sleep 3

#Rhodes (seq 5)
$PROJECT_DIR/scripts/rhodes-patch &
sleep 3

#Piano (seq 1)
jalv.gtk -l $LV2_PRESETS/lxs_lv2/piano http://linuxsampler.org/plugins/linuxsampler &
sleep 3

#Organ (seq 3)
aeolus &
sleep 3

#Bass (seq 2)
jalv.gtk -l $LV2_PRESETS/amsynth/bass-01b http://code.google.com/p/amsynth/amsynth &
sleep 3

#Drums
hydrogen -s $PROJECT_DIR/hydrogen/hydro-carbon01.h2song &
sleep 3

#Midi Sequencer
seq24 --priority $PROJECT_DIR/seq24/carbon-seq24-06.midi &
sleep 3

#Remove all connections
aj-snapshot -x &
sleep 2

#DAW
#ardour2 $PROJECT_DIR/ardour2/carbon/carbon.ardour &
#sleep 20

#Restoring connections
aj-snapshot -r $PROJECT_DIR/aj-snap/carbon.snap.05

~~~

## Instruments/Synths

**Piano**:  linuxsampler "The Maestro Concert Grand" (lv2 plugin). Used qsampler to load the gig file.

![qsampler](/images/carbon/Qsampler.png)

**Bass**: amsynth (lv2 plugin)

![amsynth](/images/carbon/amsynth.png)

**Drums**: Hydrogen. Uses Black pearl kit from AVLinux. (standalone)

![hydrogen](/images/carbon/hydrogen.png)

**Organ**: aeolus (standalone). I used the pedal section, don't know much about real organ, so just went with it.

![aeolus](/images/carbon/aeolus.png)

**Rhodes**: fludsynth (dssi plugin)

![fluidsynth](/images/carbon/FluidSynth-DSSI.png)

**Celesta**: hexter (dssi plugin)

![hexter](/images/carbon/hexter.png)

**Lead synth**: sineshaper (dssi plugin)

![sineshaper](/images/carbon/Sineshaper.png)

I used mostly the default presets except for amsynth. I made that bass sound myself.


## Midi prgramming

used *seq24* for all midi sequencing.

![seq24](/images/carbon/seq24-patternlist.png)

![seq24](/images/carbon/seq24-pattern.png)

![seq24](/images/carbon/seq24-songeditor.png)


## Multitrack recording and sound processing

Used *ardour 2* for live mixing during the time of midi programming sessions. Used mhwavedit for recording raw mixes so that I can hear the progress without loading the complete session. Later I recorded all the tracks in ardour 2.  Then imported the project in ardour 3.4 and did rest of the final sound processing there.

![ardour](/images/carbon/A3-carbon-timeline.png)

![ardour](/images/carbon/A3-carbon-Mixer.png)

The final sound processing process was basically mixing the tracks and apply some enhancement effects on the master bus. Mostly used ladspa effects for this project.


## Cover art

The cover art was made entirely in *GIMP*. Put some GIMP generated flame fractal stuff then applied some texture and labels. That's all.

![gimp](/images/carbon/coverart-gimp.jpg)


## Final words

Using Free linux software to produce music could be a difficult experience because of the learning curve. So it took me long time to finish the work. Turning your idea into music is a lengthy way to go and might cause you to learn programming rather than making music! But it's improving and becoming more user friendly day by day.