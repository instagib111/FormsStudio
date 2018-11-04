let runner

function preload(){
  // runner = loadAnimation('img/run0.png','img/run1.png', 'img/run2.png', 'img/run3.png');
  // console.log(runner)
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  controls.drawable = controls.multiDot
  controls.drawable.setup()
}

function resetAll(){
  controls.drawable.setup();
}

function displayAllText(){
  var margin_top = 30
  noStroke()
  fill(150)
  for(let i = 0; i < controls.displayText.length; i++){
    text(controls.displayText[i],  innerWidth - 200, i * 20 + margin_top)
  }
  controls.displayText = []
}

function draw() {
  
  background(controls.global.bgcg)
  
  controls.drawable.draw()
  displayAllText()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}