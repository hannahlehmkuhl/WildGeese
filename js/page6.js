
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
  let r = color(162,41,91);
  let d = color(34,80,149);
   let y = color(234,180,19);
  let w = color(360,360,360);
  let p = color(244,210,210);
  
  interpolatedcolor = lerpColor(g,d,mouseY/height/.5);
  
  interpolatedcolor2 = lerpColor(y,r,mouseY/width/.5);
  
  background(y);  

  fill(r);
  mappedcircleposition = map(mouseX,0, width,height/2,0);
  circle(width-width/4,mappedcircleposition,width/5,height/5);
  
  
  image(river,0-width/4,0-height/3,width,height);
  image(mountain,width/8,height-height/1.5,width,height);
  image(baby,width/2.5,height/20,width/15,height/12);
  image(baby2,width/5,height/10,width/15,height/12);
  image(baby,width/3,height/25,width/15,height/12);
  image(gooseUP,width/4,height/50,width/10,height/5.5);
  noStroke();
  
  textFont(nyght);
  fill(w);
  textSize(width/18);
  textAlign(LEFT);
  text('Meanwhile the sun and the',width/22,height/3);
  text ('clear pebbles of the rain are',width/22,height/2.3);
  text('moving across the landscapes,',mouseX,height/1.6);
  textAlign(RIGHT);
  text('over the prairies and the deep trees,',width-width/22,height-height/6);
  text ('the mountains and the rivers.',width-width/22,height-height/20);

  
}