function preload(){
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  gooseUP = loadImage('img/sleekgeeseUP-10.png');
  baby = loadImage('img/bambino2-12.png');
  river = loadImage('img/river-15.png');
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

  
  

  interpolatedcolor = lerpColor(g,d,mouseX/height/.5);
  
  interpolatedcolor2 = lerpColor(y,r,mouseX/width/.5);
  

  background(interpolatedcolor);

  image(river,0-width/3,height/8,2*width,1.25*height);

  image(gooseUP,width-width/4,height/4,width/5,width/4);

  image(baby,width-width/1.5,height/1.5,width/5,width/6);

  mappedtextposition = map(mouseX-height/20,0, height,height,0);
  textFont(nyght);
  fill(interpolatedcolor2);
  textSize(width/15);
  textAlign(LEFT);
  text('Tell me about',width/9,mappedtextposition);
  text('despair, yours,',width/9,mappedtextposition+height/10);
   
  textAlign(RIGHT);
  text('and I will',width-width/8,mouseX);
  text('tell you mine',width-width/8,mouseX+height/10);
  
}