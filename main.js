

import {getAudioContext, getAudioSource, getStart, buttonPressed} from "./midi.js";



const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const file = document.getElementById('fileupload');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

/* 
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = 'black';
*/

let analyser;
/*
container.addEventListener('click', function(){
  const audio1 = document.getElementById('audio1');
  
 
 const audioContext = new AudioContext();

  audio1.play();
  audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);

  analyser.fftSize = 1024;
  const bufferLenght = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLenght);


  const barWidth = 10;
  let barHeight;
  let x;

  function animate(){
    x = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);
    drawVisualiser(bufferLenght, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();

});
*/
let bufferLenght
let dataArray
let audioContext
let audioSource
function startVisuals() {
   audioContext = getAudioContext();
   audioSource = getAudioSource();
  analyser = audioContext.createAnalyser(); /* vanaf deze line alles laten staan */
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 2048;
  bufferLenght = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLenght);


  

  
}
const barWidth = 10;
  let barHeight;
  let x;

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
animate();

getStart(startVisuals)

let currentVisualizer = null
const visualisers = [drawVisualiser1, drawVisualiser2, drawVisualiser3, drawVisualiser4]
function pickVisualizer () {
  currentVisualizer = visualisers[Math.floor(Math.random() * visualisers.length)]
}
pickVisualizer()

buttonPressed(pickVisualizer)


function drawVisualiser1(bufferLenght, x, barWidth, barHeight, dataArray){

 


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



/* BUBBLES */
/*
for (let i = 0; i < bufferLenght; i++) {
  barHeight = dataArray[i] * 1.4;
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(i * bufferLenght * -3.991);
  const hue = i * 2  ;
  ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
  ctx.beginPath();
  ctx.arc(0, barHeight, barHeight/10, 0, Math.PI * 2);
  ctx.arc(0, barHeight/1.5, barHeight/20, 0, Math.PI * 2);
  ctx.arc(0, barHeight/2, barHeight/30, 0, Math.PI * 2);
  ctx.arc(0, barHeight/3, barHeight/40, 0, Math.PI * 2);
  ctx.fill();
  x += barWidth;
  ctx.restore();
} 
*/



} 


  /* console.log(bufferLenght, barHeight, dataArray) */




  function drawVisualiser2(bufferLenght, x, barWidth, barHeight, dataArray){

 


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
    
    
    
    /* BUBBLES */
    
    for (let i = 0; i < bufferLenght; i++) {
      barHeight = dataArray[i] * 1.4;
      ctx.save();
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(i * bufferLenght * -3.991);
      const hue = i * 2  ;
      ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
      ctx.beginPath();
      ctx.arc(0, barHeight, barHeight/10, 0, Math.PI * 2);
      ctx.arc(0, barHeight/1.5, barHeight/20, 0, Math.PI * 2);
      ctx.arc(0, barHeight/2, barHeight/30, 0, Math.PI * 2);
      ctx.arc(0, barHeight/3, barHeight/40, 0, Math.PI * 2);
      ctx.fill();
      x += barWidth;
      ctx.restore();
    } 
    
    
    
    
    } 



    function drawVisualiser3(bufferLenght, x, barWidth, barHeight, dataArray){

 


      /* VORTEX */
      
      for (let i = 0; i < bufferLenght; i++) {
        barHeight = dataArray[i] * 2.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 4.135);
        const hue = 300 + i * 1  ;
        ctx.fillStyle = 'hsl(' + hue + ',100%,' + barHeight/3 +  '%)';
        ctx.beginPath();
        ctx.arc(10, barHeight*1, barHeight*2.5, 0, Math.PI/ 4);
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();
      }
      

      for (let i = 0; i < bufferLenght; i++) {
        barHeight = dataArray[i] * 2;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * Math.PI * 4 / bufferLenght);
        const hue = 300 + i * 1  ;
        ctx.fillStyle = 'hsl(' + hue + ',100%,' + barHeight/3 +  '%)';
        ctx.lineWidth = barHeight/10;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, barHeight);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, barHeight + barHeight/5, barHeight/20, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, barHeight + barHeight/5, barHeight/10, 0, Math.PI * 2);
        ctx.fill();
        x += barWidth;
        ctx.restore();
      } 
      
      
      
      } 
    



      function drawVisualiser4(bufferLenght, x, barWidth, barHeight, dataArray){

       /* VORTEX */
      
       for (let i = 0; i < bufferLenght; i++) {
        barHeight = dataArray[i] * 2.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 4.135);
        const hue = 300 + i * 1  ;
        ctx.fillStyle = 'hsl(' + hue + ',100%,' + barHeight/3 +  '%)';
        ctx.beginPath();
        ctx.arc(10, barHeight*1, barHeight*2.5, 0, Math.PI/ 4);
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();
      }





for (let i = 0; i < bufferLenght; i++) {
  barHeight = dataArray[i] * 1.2;
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(i * bufferLenght / 1.2);
  ctx.lineWidth = barHeight/7;
  const hue = i * 2  ;
  ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
  ctx.beginPath();
  ctx.moveTo(0, barHeight/1.1);
  ctx.lineTo(barHeight/1.1, barHeight);
  ctx.stroke();
  x += barWidth;
  ctx.restore();
} 




    
        
        
        } 
    

    

