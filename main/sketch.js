
var spir = [];
var squ = [];

let inp_var = 2;
let inp_count_max = 1;

function setup() {
  createCanvas(windowWidth, windowHeight)
  // for(var i = 0; i<2; i++){
  //   spir.push(new Spirale(random(0, windowWidth), random(0, windowHeight)))
  // }

  //squ.push(new Square(0,0, 50, 0))
  squ.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
  //squ.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
}

function mousePressed(){
  //spir.push(new Spirale(mouseX, mouseY))
  //squ.push(new MultiDot(mouseX, mouseY, 0))
}

function draw() {
  background(200)

  // accepte tous les objets ayant les bool this.add et this.rm
  for(let i = 0; i < squ.length; i++){
    squ[i].update(inp_var+i)
    if (squ[i].add){ 
        squ.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
    }
    if (squ[i].rm)
      squ.splice(i,1)
      

  }

  for(let i = 0; i < spir.length; i++)
    spir[i].update()

  text("nombre d'instances : " + squ.length, innerWidth - 400, 30)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}