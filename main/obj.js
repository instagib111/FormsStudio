
let MultiDot = function (x, y, rad){
    this.x = x
    this.y = y
    this.rad = rad

    this.speed = 2.2

    this.add = false
    this.rm = false

    this.points = []
    let trainee = []
    for(let i = 0; i < 16; i++){
        this.points.push({x:0, y:0})
        trainee.push([])
    }

    
    let ran = dist(0, 0, innerWidth / 2, innerHeight / 2)
    let ranrm = ran + 200

    let tb = false
    let value = 0
    this.update = function (){
        value = controls.multiDot.value
        this.speed += Math.sin(value) * controls.multiDot.time
        this.rad += 0.05 * this.speed / value

        controls.displayText.push("speed " + this.speed)
        controls.displayText.push("rad " + this.rad)

        for (let i = 0; i < this.points.length; i++){
            this.points[i].x = this.x + Math.cos(this.speed + (i*(PI/8))) * this.rad
            this.points[i].y = this.y + Math.sin(this.speed + (i*(PI/8))) * this.rad
        }
        if(this.add){
            this.add = false
            tb = true
        }
        else if((!tb) && Math.abs(this.rad) > ran)
            this.add = true

        if(this.rad > ranrm || (this.x < 0 || this.x > innerWidth) || (this.y < 0 || this.y > innerHeight) )
            this.rm = true

        this.draw()
    }
    this.draw = function (){

        for(let i = 0; i < trainee.length; i++){
            beginShape(LINES)
            for (let y = 1; y < trainee[i].length; y++){
                trainee[i][y].update()
                if(trainee[i][y].rm)
                trainee[i].splice(y, 1)
            }
            endShape()
        }
        for (let i = 0; i < this.points.length; i++){
            trainee[i].push(new DotFadeOut(createVector(this.points[i].x, this.points[i].y), 200))
        }
    }
}

let DotFadeOut = function (v, a){
    this.a = a
    this.rm = false
    //let ran = random(-1, 1)
    this.update = function (){
        this.a -= 5
        // ran = random(-1, 1)
        // v.x += ran
        // v.y += ran
        if(this.a < 1)
            this.rm = true
        this.draw()
    }
    this.draw = function (){
        strokeWeight(10)
        //stroke(0,0,0, this.a)
        // stroke( map(v.x - v.y, 0, 2000, 0, 255),
        //     map(v.y - v.x, 0, 2000, 0, 255),
        //     map(this.a + v.y, 0, 2000, 0, 255),
        //     this.a)

        stroke(Math.sin(this.a), 200, 50 + this.a, this.a)

        // stroke(0,0,0, this.a)

        vertex(v.x, v.y)
    }
}

let Square = function (x, y, w, r) {
    this.x = x
    this.y = y
    this.w = w
    this.r = r
    this.add = false
    this.rm = false

    let maxW = 200

    let ctrl = controls.drawable.input

    this.update = function () {
        //this.x += 

        this.x += ctrl.speed.value
        controls.displayText.push("speed " + ctrl.speed.value)

        if(!this.add && this.x > x * 2)
            this.add = true

        if(this.x > windowWidth)
            this.rm = true

        this.draw()
    }

    this.draw = function () {
        
        noStroke()
        fill(map(this.x, 0, innerWidth, 0, 255), map(this.y, 0, innerHeight, 0, 255), map(this.w, 0, maxW, 0, 255))
        
        rect(this.x, this.y, this.w, this.w)
    }

}