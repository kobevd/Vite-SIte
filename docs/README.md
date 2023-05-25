# Spectrum

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## 

### Products

* Raspberry PI
* 4x Buttons
* 3 mm hout box
* Externe Speakers
* Audio Interface
* Plastic bak met gekleurd water

### Software

* Visual Studio Code
* NODE RED


## Images

### Short Description
Spectrum is een interactieve muziekvisualisator met wetenschap erin verwerkt 
is een fascinerende manier om muziek te ervaren en tegelijkertijd meer te leren 
over de wetenschap achter geluidsgolven en frequentiespectrum

![This is a alt text.](/image/sample.png "This is a sample image.")

## Code Explained

Alles is gemaakt binnen HTML CSS en JAVASCRIPT. De visuals zijn gemaakt met canvas binnen Javascript.

Startende met een canvas in HTML
```
<div class="glowing">
      <div id="container">
        <canvas id="canvas1"></canvas>
      </div>
  </div>
```

Haal dit element op in Java
```
const canvas = document.getElementById('canvas1');
```

### Variabelen

```
let analyser;
let bufferLenght;
let dataArray;
let audioContext;
let audioSource;
```
### Animation
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



## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.