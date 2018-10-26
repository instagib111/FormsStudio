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

  for(let i = 0; i < controls.displayText.length; i++){
    text(controls.displayText[i],  innerWidth - 100, i * 20 + margin_top)
  }
  controls.displayText = []
}

function draw() {
  background(200)

  controls.drawable.draw()
  
  displayAllText()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}