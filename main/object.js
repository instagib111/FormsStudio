let Escar = function(x, y){
  this.x = x
  this.y = y

  let d = new Dot(this.x, this.y)

  this.update = function(){

  }
}

/**
 * spirale infernale
 * 
 */
let Spirale = function(x, y){
  this.x = x
  this.y = y

  let d1 = new Dot(this.x, this.y)
  d1.dead = random(60, 100)
  let l = new Line(0,0,0,0)

  let temp = {x : 0, y : 0}
  let nP = {x : 0, y : 0}
  this.update = function (){
    if(!d1.isDead) {
      d1.rad += 0.6
      d1.speedX++
      d1.speedY++
      d1.update()
      nP = {x : d1.x, y : d1.y}
      l.x1 = temp.x
      l.y1 = temp.y
      l.x2 = nP.x 
      l.y2 = nP.y
      if(temp.x != 0 && temp.y != 0)
        l.update()
      temp = {x : d1.x, y : d1.y}
      this.draw();
    }
  }
  this.draw = function(){
    //rotate(PI / frameCount)
  }
}

/**
 * classic dot
 * @param {number} x 
 * @param {number} y 
 */
let Dot = function(x, y){
  this.x = x
  this.y = y
  this.speedX = 0
  this.speedY = 0
  this.isDead = false
  this.rad = 0
  this.dead = 1000

  let isUp = false;
  let isDown = false;

  this.update = function (){
    //rad += 0.7 extériorisé
    let tx = Math.cos(this.speedY) * this.rad
    let ty = Math.sin(this.speedX) * this.rad

    // if(this.speedX < -4){
    //   isUp = true
    //   isDown = false
    // }
    // else if (this.speedX > 4){
    //   isDown = true
    //   isUp = false
    // }

    // if(isUp)
    //   this.speedX+=random(0, -7)
    // else if(isDown)
    //   this.speedX-=random(-7, 0)

    //this.isDead = random(-1,1) > 0.996
    this.isDead = (this.x < -this.dead || this.x > windowWidth + this.dead)
                  || (this.y < -this.dead || this.y > windowHeight + this.dead)
    this.x += tx
    this.y += ty
    this.draw()
  }
  this.draw = function(){
    strokeWeight(3)
    stroke(0,0,0)
//    stroke(random(0, 255),random(0, 255),random(0, 255))
    point(this.x, this.y)
  }
}
/**
 * Line
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
let Line = function(x1, y1, x2, y2){
  this.x1 = x1
  this.y1 = y1
  this.x2 = x2
  this.y2 = y2

  this.update = function(){
    this.draw()
  }
  this.draw = function(){
    strokeWeight(1)
    stroke( map(this.x1 - this.y1, 0, 1000, 0, 255),
            map(this.x2 - this.y2, 0, 1000, 0, 255),
            map(this.y1 - this.x2, 0, 1000, 0, 255)) // trouver un autre algo pour les couleurs
    //stroke(random(0, 255),random(0, 255),random(0, 255))
    line(this.x1, this.y1, this.x2, this.y2)
  }
}

/**
 * Circle
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {number} angle 
 */
let Circle = function (x, y, radius, angle){
    this.x = x
    this.y = y
    this.radius = radius
    this.angle = angle

    this.speedX = 1
    this.speedY = 1
    
    this.isDead = false

    this.update = () => {
      

      this.x += this.speedX
      this.y += this.speedY
      this.radius = radius
      this.angle = angle

      if(random(-1,1) > 0.996)
        this.isDead = true
        
      this.draw()
    } 
    this.draw = () => {
      ellipse(this.x, this.y, this.radius,this.radius, this.angle, 0, 360)
    }
  }
/**
 * Rectangle
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 */
  let Rect = function (x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.speedX = 1
    this.speedY = 1

    this.isDead = false

    this.update = () => {
      this.x += this.speedX
      this.y += this.speedY
      this.w = w // en attendant 
      this.h = h
      if(random(-1,1) > 0.996)
        this.isDead = true
      this.draw()
    }

    this.draw = () => {
      rect(this.x, this.y, this.w, this.h)
    }
  }