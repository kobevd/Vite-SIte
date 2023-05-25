let audioContext = new AudioContext();
let audiSource = null;

export function getAudioContext() {
  return audioContext;
}

export function getAudioSource() {
  return audiSource;
}

let startVisuals = null;

export function getStart(func) {
  startVisuals = func;
}

let butternPress = null

export function buttonPressed(func) {
  console.log('buttonPressed', func)
  butternPress = func;
}

// Load the samples
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



/*

// Handle MIDI messages
function onMIDIMessage(event) { 
  // Handle only note on messages (event.data[0] = 144)
  if (event.data[0] == 144) {
    console.log(event.data[1]);
    // Determine which sample to play based on MIDI note number
    const noteNumber = event.data[1];
    let bufferIndex = 0;
    
    if (noteNumber == 72) {
      bufferIndex = 1;
    }

    if (noteNumber == 71) {
      bufferIndex = 2;
    }

    if (noteNumber == 69) {
      bufferIndex = 3;
    }

    if (noteNumber == 67) {
      bufferIndex = 4;
    }

    
    
    
    // const bufferIndex = noteNumber % buffers.length;

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
}

*/

// WEBSOCKET

const url = "ws://192.168.100.1:1880/visualiser";
  
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

function update() {
    if (ws) { ws.send(output); }
}

wsConnect();

let buttonPressCount = 0;

document.addEventListener('keydown', function(event) {
  // Get the key code
  const keyCode = event.keyCode;
  console.log(event);

  // Determine which sample to play based on the key code
  let bufferIndex = 5;

  if (keyCode === 65) {
    bufferIndex = 0;
  }

  if (keyCode === 90) {
    bufferIndex = 1;
  }

  if (keyCode === 69) {
    bufferIndex = 2;  
  }

  if (keyCode === 82) {
    bufferIndex = 3;
  }

  if (keyCode === 84) {
    bufferIndex = 4;
  }

  if (bufferIndex != 5) {
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
    
    // Increment the button press counter
    buttonPressCount++;

    // Check if the button has been pressed three times
    if (buttonPressCount === 4 ) {
      // Refresh the page
      location.reload();
    }
  }
});

 

//console.log(onMIDIMessage);
