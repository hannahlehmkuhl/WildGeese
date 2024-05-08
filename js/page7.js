function preload(){
  nyght = loadFont('font/NyghtSerif-RegularItalic.ttf');
  goose = loadImage('img/flyingeese!-11.png');
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
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
  

  background(b);
  mappedtextposition = map(mouseX+width/2,0,width,width,0);
  mappedtextposition2 = map(mouseX,height/2,0,height/3,1.25*height);
  textSize(width/20);
  fill(w);
  textAlign(CENTER);
  textFont(nyght);
  text('Meanwhile the wild geese, high in the',width/2,mappedtextposition2);
  text('clean blue air, are heading home again.',width/2,mappedtextposition2+width/20);
  image(goose,mappedtextposition,height/2,width/2,height/2);
}



