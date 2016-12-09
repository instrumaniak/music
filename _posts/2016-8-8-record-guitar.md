---
layout: post
title:  Recording guitar using single coil pickup
tag: spreadsheet
---

Recently I was test recording my steel string acoustic guitar using Seymour duncan woody single coil pickup through Focusrite scarlett 2i2 audio interface on REAPER. And I noticed that the pickup picked up quite noticeable power hum (50/60Hz) and some high frequency buzz around 5kHz. This usually happens with single coil pickup. So, I used the amazing ReaFIR plugin of REAPER to remove the noise up to a satisfactory level.
<!--more-->

![ReaFIR](/images/001-reafir.jpg)

Noise removal is a tricky subject because when you remove noise you also usually remove some other part of the main audio and thus a gentle careful approach should be taken for noise removal. Here are some pointers on this topic:

- Try to get clean signal in the first place as possible. You can do this by positioning the guitar/pickup in a way that it pickup lower RF interference. So move around the room and point at different direction so that Electromagnetic interference is lower.

- If you use laptop and usb audio interface then record on battery and also detach the power chord from the Laptop. This can hugely the improve the recording quality.

- Apply gentle amount of noise removal FX and accept some noise with better audio quality. In the mix the noise usually will be inaudible for clean guitar tone. But if you apply Amp simulation/overdrive/distortion then you should be more aggressive on the noise removal part because in this case these FX amplify the signal and noise in the source audio could come out ugly.

Here in this video you can listen to the final sound after noise removal:

<div class="video-container">
<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/Q7cVYUUoDGU?&amp;showinfo=0" width="560"></iframe></div>
<br/>

The guitar rhythm uses a clean tone but the lead guitar was processed through Amp emulation (SimulAnalog - Fender Twin) and FerrcTDS compressor. Drums sampler was shortcircuit using the library: Free Jazz/funk drum kit. ReaEQ was applied on the tracks for minimal mixing. No master fx. I guess, a little bit of delay and reverb could make the sound even more better but in this video I just wanted to demonstrate the sound with the most minimal setup. 