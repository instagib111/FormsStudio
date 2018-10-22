function setup() {
  createCanvas(windowWidth, windowHeight)

  colorMode(HSB, 255)
  controls.multiDot.setup()
}

function resetAll(){
  controls.multiDot.setup();
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

  controls.multiDot.draw()
  
  displayAllText()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}