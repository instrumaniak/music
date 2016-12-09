---
layout: post
title: Exploring AVLinux
tag:
---

In the last decade, Linux audio and music production scene has gone through many changes and improved a lot. Now, most of the common hardwares are supported out of the box and softwares have became more extensive, sophisticated and polished, although they might be buggy sometimes.  But still, jumping down right to music production is quite challenging, specially for those who are not familiar with Linux and their distributions. Even though there are some distributions which are tailored specifically for musicians, you need to be prepared for tweaking and tailoring it for your need and expect some unexpected crashes and burns.
<!--more-->

## How I got into Linux

I first tried Linux back in 2003, it was a Redhat distribution called PCQ Linux which came along with a Magazine called PC Quest. I tried to install that distro on my PC and in the process unwillingly wiped out all my hard-disk data and thus began my journey with Linux with a dumbstruck face! Over the years, I learned how to dual boot Ubuntu along side with Windows.


## Music production

I have been playing guitar since 2002. I used to use Audacity for my quick multi-track guitar recordings. But eventually I became aware that my recordings do not have any professional touch. In 2009, I began using FL studio and Reason and started learning about music production . I tried out Ubuntu Studio 9.04 that time, to see if I can use it as my music production environment. But at some point I ended up compiling Ardour and some other applications to make them run when for some reason they kept crashing or when I needed a recent version that was not included in the distribution repository!


After some months of exhaustive experiments of trying to figuring out how to get a proper music production work flow that works for me, I understood that I need more time to get used to with various music production ideas and concepts. So I went back to Windows based softwares and VST plugins. In the meanwhile I kept an eye open for Linux music production softwares and distributions.


## Linux and Internet connectivity

Now these days, I use an Android 3G phone to get connected with the Internet, which works nicely. Previously I had huge problem when I used a Wi-max usb Internet modem which didn't have Linux driver or hardware support, which kind of forced me to stop using Linux for some time! Without network connectivity, using Linux just does not make any sense as a newbie . As I need to search every now and then "how to do that"! and had to download all those dependent software libraries when I need to install some software!


## An AV Linux session

Today, around 10 hours of software trials with AV Linux softwares made my head almost blow up! My main objective is to get a faster production work flow. But to be honest, setting up a working environment in a Linux audio setup is still a lot of work. I have to check each and every application and plugins if they works or not before using in my work in order to prevent unexpected crash or something like that.


Currently, I just want to use AV Linux 6.01 although some new versions are available. Ardour 3 with vst support just didn't work for me, it crashed too many times. I also didn't like the idea of demo softwares and plugins. I am using Linux for the free stuffs!

## Ardour

*Tape style production* :  Ardour 2 with amsynth which I was playing using my usb midi keyboard (Oxygen 49). Here the work flow would be: tape style recording which I don't like but it seems like the most stable solution. In this production style, every thing is connected via jack and you would just perform and/or record sounds live.

*Host and plugin style production* :  I want to use Ardour 3 as my main production environment. I have downloaded version 3.5 from AV Linux site and it looks awesome and after hours of opening, closing and crashing with various plugins which was assigned on various channels, I understood that windows VST plugins are quite unstable on a Linux environment, they just kept crashing ardourvst3. So, I just used ardour 3.5 and finally could render wav files directly, with some lv2, lxvst and ladspa plugins and some midi on tracks. Yes! Years of waiting for a somewhat stable Ardour 3 with midi support might finally pay off. I have to make complete music works to say how I could get along with it and how it works for me.

![ardour2](/images/explore-avl/ardour2-showoff.png)

## PD

Along side, host and plugins style production. I am also considering using puredata for learning more about sound designing and basics. There are obviously CSound and Supercollider in my list but I think I would just use PD for a while.

![pd](/images/explore-avl/pd-showoff.png)


Now, lets see how things goes.

<small>
*(Last edited: 9 December, 2016.)*
</small>