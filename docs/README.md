# Spectrum



## Products

* Raspberry PI
* 4x Buttons
* 3 mm hout box
* Externe Speakers
* Audio Interface
* Plastic bak met gekleurd water

### Software

* Visual Studio Code
* NODE RED

# VIDEO
![This is a alt text.](/docs/img/tumb.png "This is a sample image.")
https://www.youtube.com/watch?v=zm5esy56SPM&ab_channel=prodbysaino

# Short Description
Spectrum is een interactieve muziekvisualisator met wetenschap erin verwerkt 
is een fascinerende manier om muziek te ervaren en tegelijkertijd meer te leren 
over de wetenschap achter geluidsgolven en frequentiespectrum

![This is a alt text.](/docs/img/kobe2.jpg "This is a sample image.")


# Story
Waarom? Waarom heb ik spectrum gemaakt? Ik ben zelf een hip-hop muziek producer en beatmaker. Muziek is mijn passie afleiding en therapie allemaal tegelijk. Muziek geeft mij extreem veel vrijheid en creativiteit! Dus was het logisch dat mijn project volledig gebaseerd is op iets muziekzaal. Mijn idee: een full color muziek ervaring te maken, een eigen muziek wereld!

Kortom, Spectrum is een natuurlijke uitbreiding van jouw passie voor muziek en biedt je de mogelijkheid om jouw creativiteit en artistieke visie op een unieke manier te uiten. Het stelt je in staat om een volledige muziekervaring te creëren waarin muziek, kleur en visuele elementen samenkomen om een onvergetelijke ervaring te bieden aan je publiek.

![This is a alt text.](/docs/img/image.png "This is a sample image.")

# Code Explained

Alles is gemaakt binnen HTML CSS en JAVASCRIPT. De visuals zijn gemaakt met canvas binnen Javascript.

Startende met een canvas in HTML
```
<div class="glowing">
      <div id="container">
        <canvas id="canvas1"></canvas>
      </div>
  </div>
```


## Animation
Deze functie zorgt ervoor dat onze video gaat starten zodra er een sound speelt.

```
function startVisuals() {
  audioContext = getAudioContext();
  audioSource = getAudioSource();
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 2048;
  bufferLenght = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLenght);
  
}
```

Deze functie zorgt ervoor dat onze video geanimeerd wordt.
```
function animate(){
  if (analyser) {
  console.log('animate')
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(dataArray);
  currentVisualizer(bufferLenght, x, barWidth, barHeight, dataArray);
}
requestAnimationFrame(animate);
}
```


## De Visuals
Deze code zorgt ervoor dat de vortex op de achtergrond word gemaakt. De CTX elementen vormen de shape van de vortex.

```
/* VORTEX */

for (let i = 0; i < bufferLenght; i++) {
  barHeight = dataArray[i] * 2.5;
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(i * 4.135);
  const hue = 300 + i * 1  ;
  ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
  ctx.beginPath();
  ctx.arc(10, barHeight*1, barHeight*2.5, 0, Math.PI/ 4);
  ctx.fill();
  ctx.stroke();
  x += barWidth;
  ctx.restore();
}
```
![This is a alt text.](/docs/img/image2.png "This is a sample image.")

Deze code zorgt ervoor dat het middelpunt van de vortex in beeld komen.

```
/* BIT STAAF MIDDLE CIRCLE OFZO */

for (let i = 0; i < bufferLenght; i++) {
  barHeight = dataArray[i] * 2;
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(i * 4.135);
  const hue = i * 5  ;
  ctx.fillStyle = 'hsl(' + hue + ',100%, 60%)';
  ctx.fillRect(0, 0, barWidth, barHeight);
  x += barWidth;
  ctx.restore();
} 
```
![This is a alt text.](/docs/img/image3.png "This is a sample image.")


# De Muziek

Om de muziek in onze visualiser te krijgen maken we eerst een nieuw js file.

Conect je nieuwe js file met die van de visualiser.

```
import {getAudioContext, getAudioSource, getStart, buttonPressed} from "./midi.js";

```

## Button Asign

Alle beats hangen vast aan een bepaalde knoppen. Elke keer dat er een button word gedrukt stop de ene sample en speelt de andere.

```
function wsConnect() {
    console.log("connect", url);
    const ws = new WebSocket(url);

    ws.onmessage = function (msg) {
        console.log(msg.data);

        butternPress()
        

        var bufferIndex;
        if (msg.data === "rood") {
          bufferIndex = 0;
        }
      
        if (msg.data === "wit") {
          bufferIndex = 1;
        }
      
        if (msg.data === "groen") {
          bufferIndex = 2;  
        }
      
        if (msg.data === "blauw") {
          bufferIndex = 3;
        }
      
        console.log("KNOP");
      // Stop the previously playing sample
      if (audiSource) {
        audiSource.stop();
      }
      
      // Play the new sample
      audiSource = audioContext.createBufferSource();
      audiSource.buffer = buffers[bufferIndex];
      audiSource.connect(audioContext.destination);
      audiSource.start(0);
      startVisuals();
        
    }

    ws.onopen = function () {
        console.log("Connected");
    }

    ws.onclose = function () {
        setTimeout(wsConnect, 3000);
    }

    ws.disconnect = function () {
        console.log("Disconnected");
    }
}
```


## Sample Play
```
  // Play the new sample
    audiSource = audioContext.createBufferSource();
    audiSource.buffer = buffers[bufferIndex];
    audiSource.connect(audioContext.destination);
    audiSource.start(0);
    startVisuals();
    
    // Increment the button press counter
    buttonPressCount++;

    // Check if the button has been pressed three times
    if (buttonPressCount === 4 ) {
      // Refresh the page
      location.reload();
    }
```
# NODE RED
![This is a alt text.](/docs/img/node.png "This is a sample image.")
Nu moeten we nog de button verbinden met onze code. Dit doen we via javascript binnen in Node red. De groene button krijgt een bepaalde pin op de raspberry. Deze runt naar de javascript code van de de keyboard knoppen die de sample afspeelt. Daarna loopt deze door een websocket die verbonden is via onze HTML en Javascript. De websocket zorgt ervoor dat onze buttons van node red werkt in onze browser.





# Makercase
![This is a alt text.](/docs/img/makercase.png "This is a sample image.")

De doos is gemaakt via makercase. Na dat je alle afmetingen hebt ingegeven download de file. Deze kan je nu bewerken in illustrator.

![This is a alt text.](/docs/img/dxf.png "This is a sample image.")

In illustrator heb ik nog de gaten toegevoed waar later de buttons in zouden komen en bovenaan een gat voor de kabels.


# Tip

Een goede tip is: bekijk eerst de basics van Canvas binnen Javascript. Dit gaat ervoor zorgen dat alles wat er voor de visualiser is geschreven duidelijker word!

# Valkuil

De enigste kleine valkuil is dat Google het moeilijk heeft met muziek files online te zetten. Ik heb heel lang gezocht naar een goede manier om dit te doen.
```
const sampleUrls = ["Rocket.mp3", "Glowing.wav", "Filthy.wav", "Who.wav"];
const buffers = [];

sampleUrls.forEach((url) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    audioContext.decodeAudioData(request.response, function (decodedData) {
      buffers.push(decodedData);
    });
  };

  request.send();
});
```


 Let ook op, alle samples zijn nog eens geboost (luider) door de Google browser.