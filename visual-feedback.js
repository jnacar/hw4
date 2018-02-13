var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;
var storedKey;

var playing = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  noStroke();
  if (playing) {
    if (storedKey == 'A') {
    	fill(0, 255, 255);
      rect(0,0,width/2,height/2);
  	} else if (storedKey == 'S') {
      fill(0, 0, 255);
      rect(width/2, 0, width/2, height/2);
    } else if (storedKey == 'D') {
      fill(255, 0, 0);
      rect(0, height/2, width/2, height/2);
    } else if (storedKey == 'F') {
      fill(0, 255, 0);
      rect(width/2, height/2, width/2, height/2);
    }
  } else {
    background(255, 0, 255);
  }
  fill(0, 0, 0);
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    storedKey = 'A';
  } else if (key == 'S') {
    osc = oscS;
    storedKey = 'S';
  } else if (key == 'D') {
    osc = oscD;
    storedKey = 'D';
  } else if (key == 'F') {
    osc = oscF;
    storedKey = 'F';
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
