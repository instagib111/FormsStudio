
var spir = [];
var squ = [];

function setup() {
  createCanvas(windowWidth, windowHeight)

  colorMode(HSB, 255)
  //squ.push(new Square(0,0, 50, 0))
  squ.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
  //squ.push(new MultiDot(innerWidth / 1.5, innerHeight / 1.5, 0))
}

function mousePressed(){
  //spir.push(new Spirale(mouseX, mouseY))
  //squ.push(new MultiDot(mouseX, mouseY, 0))
}

function displayAllText(){
  var margin_top = 30
  noStroke()

  for(let i = 0; i < controls.displayText.length; i++){
    text(controls.displayText[i],  innerWidth - 100, i * 20 + margin_top)
    //console.log( controls.displayText[i])
  }
  controls.displayText = []
}

function draw() {
  background(200)

  // accepte tous les objets ayant les bool this.add et this.rm
  for(let i = 0; i < squ.length; i++){
    squ[i].update()
    if (squ[i].add){ 
        squ.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
    }
    if (squ[i].rm)// || squ.length > controls.global.max_inst)
      squ.splice(i,1)
  }

  for(let i = 0; i < spir.length; i++)
    spir[i].update()

  // param
  // if(controls.global.fullscreen){
  //   fullscreen(controls.global.fullscreen)
  //   controls.global.fullscreen = false
  // }
  
  displayAllText()

  text("nombre d'instances : " + squ.length, innerWidth - 400, 30)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}