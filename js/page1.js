function preload(){
  belle = loadFont('font/Bellefair-Regular.ttf');
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  
  gooseUP = loadImage('img/sleekgeeseUP-10.png');
  gooseDOWN = loadImage('img/sleekgeese-10.png');
  
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

  
  

  interpolatedcolor = lerpColor(d,g,mouseX/width/.5);
  
  interpolatedcolor2 = lerpColor(r,y,mouseX/width/.5);
  
   interpolatedcolor3 = lerpColor(r,w,mouseX/width/.5);
  
  b.setAlpha(178);
  background(interpolatedcolor);
  colorMode(RGB);
  noStroke();
 
   if (mouseX > 150 && mouseIsPressed) {
  image(gooseDOWN,width/2,height-height/1.85,width/4,height/2.3);
  textFont(belle);
  textSize(width/50);
  fill(w);
  textAlign(CENTER);
  text("Dedicated to my Mama, Happy Mother's Day <3",width/2,height/2)
    } else {
   
     image(gooseUP,width/2,height-height/1.65,width/4,height/2);
    
    }
    
  fill(b);
  rect(0,height-height/4, width, height/4);
  fill(interpolatedcolor2);
  circle(width-width/8,height/6,width/6);
  textSize(width/50);
  textFont(belle);
  fill(interpolatedcolor3);
  textAlign(CENTER);
  text("DESIGNED BY HANNAH LEHMKUHL",width/2,height-height/10);
  textAlign(LEFT);
  textSize(width/30);
  text("WRITTEN BY MARY OLIVER",width/12,height/2.5);
  textSize(width/6);
  textFont(nyght);
  fill(interpolatedcolor2);
  text("wild geese",width/12,height/4);



    }

