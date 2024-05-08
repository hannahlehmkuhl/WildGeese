let mama; 
var squareState = false;
var squareState2 = false;
var squareState3 = false;
var words = ['You only have to', 'let the soft animal','of your body', 'love what it loves'];
var wordIndex = 0;

function preload() {
  belle = loadFont('font/Bellefair-Regular.ttf');
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  
  mama = loadImage('img/mama-13.png');
  baby = loadImage('img/bambino-12.png');
  baby2 = loadImage('img/bambino2-12.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
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


  background(b);
  colorMode(RGB);
  noStroke();
  image(mama,0,0,width,height);
  textAlign(CENTER);
  textFont(nyght);
  fill(p);
  textSize(width/20);
  
  text(words[wordIndex], width/2, height/2);
  
  if (squareState == true) {
    image(baby,width - width / 3.5, height - height / 3, width / 3.5, height/3.5);
  }

  if (squareState2 == true) {
    image(baby2, width / 4, height - height / 4, width / 3.5, height/3.5);
  }
  
  if (squareState3 == true) {
    image(baby2,width / 10, height / 4, width / 3.5, height/3.5);
  }
}

function mousePressed() {
  if (squareState == false && mouseX > width / 2 && mouseY > height / 2) {
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
  
  if (squareState3 == false && mouseX < width / 2 && mouseY < height / 2) {
    squareState3 = true;
    wordIndex += 1;
    if (wordIndex > 3) {
      wordIndex = 0;
    }
  }
}

