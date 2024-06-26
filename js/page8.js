let mama; 
var squareState = false;
var squareState2 = false;
var squareState3 = false;
var words = ['Whoever you are', 'no matter how lonely','the world offers itself', 'to your imagination.'];
var wordIndex = 0;

function preload() {
  belle = loadFont('font/Bellefair-Regular.ttf');
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  
  mama = loadImage('img/mama-13.png');
  baby = loadImage('img/bambino-12.png');
  baby2 = loadImage('img/bambino2-12.png');
  cattail =loadImage('img/cattail-18.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(LEFT);
}

function draw() {
  let g = color(173, 188, 55);
  let b = color(132, 209, 219);
  let r = color(162, 41, 91);
  let d = color(34, 80, 149);
  let y = color(234, 180, 19);
  let w = color(360, 360, 360);
  let p = color(244, 210, 210);

  interpolatedcolor = lerpColor(y, p, mouseX / width / .5);

  b.setAlpha(178);

  colorMode(RGB);
  noStroke();  

  
  background(p);
  
  
  image(baby,width/2,height/4,width/4,width/5); 
  fill(b);
  rect(0,height/1.9,width,height/2);
  textAlign(CENTER);
  textFont(nyght);
  fill(r);
  textSize(width/20);
  
  
  text(words[wordIndex], width/2, height/8);
  
  if (squareState == true) {
    image(cattail,width - width / 3.5, height - height / 3, width / 4.5, height/4);
  }

  if (squareState2 == true) {
    image(cattail, width/20, height - height / 2.5, width / 4.5, height/4);
  }
  
  if (squareState3 == true) {
    image(cattail,width / 3, height / 2.8, width / 4.5, height/4);
  }
  
}

function mousePressed() {if (squareState == false && mouseX > width / 2 && mouseY > height / 2) {
  squareState = true;
  wordIndex += 1;
  if (wordIndex > 3) {
    wordIndex = 0;
  }
}

if (squareState2 == false && mouseX < width / 2 && mouseY > height / 2) {
  squareState2 = true;
  wordIndex += 1;
  if (wordIndex > 3) {
    wordIndex = 0;
  }
}

if (squareState3 == false && mouseY < height / 2) {
  squareState3 = true;
  wordIndex += 1;
  if (wordIndex > 3) {
    wordIndex = 0;
  }
  }
}

