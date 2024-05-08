function preload(){
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  
  speech = loadImage('img/speech-14.png');
}
  function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(RGB);
    let g = color(173,188,55);
  let b = color(132,209,219);
  let r = color(162,41,91);
  let d = color(34,80,149);
   let y = color(234,180,19);
  let w = color(360,360,360);
    let p = color(244,210,210);

  
  

  interpolatedcolor = lerpColor(g,d,mouseY/height/.5);
  
  interpolatedcolor2 = lerpColor(y,r,mouseY/width/.5);
  

  background(interpolatedcolor);
  image(speech,0-width/64,0,width+width/32,height);
  mappedtextposition = map(mouseY-height/20,0, height,height,0);
  textFont(nyght);
  fill(interpolatedcolor2);
  textSize(width/15);
  textAlign(LEFT);
  text('Tell me about',width/9,mappedtextposition);
  text('despair, yours,',width/9,mappedtextposition+height/10);
   
  textAlign(RIGHT);
  text('and I will',width-width/8,mouseY);
  text('tell you mine',width-width/8,mouseY+height/10);
  
}