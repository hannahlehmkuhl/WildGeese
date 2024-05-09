
function preload(){
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  gooseUP = loadImage('img/sleekgeeseUP-10.png');
  baby = loadImage('img/bambino-12.png');
  baby2 = loadImage('img/bambino2-12.png');
  river = loadImage('img/river-15.png');
  mountain = loadImage('img/mountain-16.png');
}

  function setup() {
  createCanvas(windowWidth, windowHeight); 


 
}

function draw() {
      let g = color(173,188,55);
  let b = color(132,209,219);
  let c = color(132,209,219);
  let r = color(162,41,91);
  let d = color(34,80,149);
   let y = color(234,180,19);
  let w = color(360,360,360);
  let p = color(244,210,210);
  c.setAlpha(178);
  interpolatedcolor = lerpColor(g,b,mouseX/height/.5);

  noStroke();
  interpolatedcolor2 = lerpColor(y,r,mouseY/width/.5);
  background(interpolatedcolor2);  
  textFont(nyght);
  fill(w);
  textSize(width/8);
  textAlign(LEFT);
  if (mouseIsPressed) {
    text('Over and over',mouseX,mouseY);
      } 
        
  image(gooseUP,0,height/6,width/2.5,width/2);
  fill(c);
  rect(0,height-height/6,width,height/6);
    

  fill(interpolatedcolor);
  textSize(width/20);
  mappedtextposition = map(mouseX,0, width,height-height/6,height/3);
  text('announcing your place',width/2,mappedtextposition-height/8);
  text('in the family of things.',width/2,mappedtextposition);
 



  
}