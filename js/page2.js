function preload(){
  
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}
function draw() {
   let g = color(173,188,55);
  let t = color(3,167,90);
  let b = color(132,209,219);
  let r = color(162,41,91);
  let d = color(34,80,149);
   let y = color(234,180,19);
  let w = color(360,360,360);
    let p = color(244,210,210);

  
  

  interpolatedcolor = lerpColor(b,g,mouseX/width/.5);
  
  interpolatedcolor2 = lerpColor(b,y,mouseX/width/.5);
  
   interpolatedcolor3 = lerpColor(b,w,mouseX/width/.5);
   
  interpolatedcolor4 = lerpColor(b,b,mouseX/width/.5);
  
  b.setAlpha(178);
  background(interpolatedcolor);
  colorMode(RGB);
  noStroke();
  textAlign(LEFT);
 fill(interpolatedcolor3);
  textSize(width/20);
  textFont(nyght);
  text("for a hundred miles through the desert",mouseX, height/2, width/3, width/4);   
  fill(interpolatedcolor2);

  text("You do not have to walk on your knees", mouseX/1.5, height/5, width/3, width/3);   
  fill(interpolatedcolor4);
  textFont(nyght)
  textSize(width/8);
  text("repenting", mouseX*1.15, height-height/10, width/2, width/2); 

}