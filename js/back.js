function setup() {
  var myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent("back");
  frameRate(3);
}

function draw() {
  background(25);
  lol();
}

function lol() {

  stroke(color(79,3,226));
  strokeWeight(8);
  noFill();

  for(let i=0;i<random(10,30);i++){
    let rend = random(30, 120);
    ellipse(random(0,windowWidth),random(0,windowHeight), rend,rend);
  }
}