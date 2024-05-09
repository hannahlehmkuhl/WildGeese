let phrase = "Meanwhile the world goes on"
let phraseWidth;
let scrollSpeed = 2;
let x;


function preload() {
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  geese = loadImage('img/flyingeese!-11.png');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(height/5);
  textAlign(LEFT, CENTER);
  fill(255);
  phraseWidth = textWidth(phrase);
  x = width/4; 
}

function draw() {
  
  let g = color(173, 188, 55);
  let b = color(132, 209, 219);
  let c = color(132, 209, 219);
  let r = color(162, 41, 91);
  let d = color(34, 80, 149);
  let y = color(234, 180, 19);
  let w = color(360, 360, 360);
  let p = color(244, 210, 210);
  
  
  
  c.setAlpha(178);
  
  
  interpolatedcolor = lerpColor(d, g, mouseX / width / .5);
  interpolatedcolor2 = lerpColor(b, w, mouseX / width / .5);
  interpolatedcolor3 = lerpColor(r, y, mouseX / width / .5);
  
  mappedcircleposition = map(mouseX,0, width,1.25*height,height/10);
  
  background(interpolatedcolor);
  
  fill(y);
  noStroke();
  circle(width-width/8,mappedcircleposition,width/6);
  fill(c);
  rect(0,height-height/4, width, height/4);
  fill(interpolatedcolor2);
 textFont(nyght);
  text(phrase, x, height/3);
  
  
  x -= scrollSpeed;
  
  
  if (x < -phraseWidth) {
    x = width;
  }
  image(geese,width/2,height/2,width/4,width/5);
}

