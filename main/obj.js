
let MultiDot = function (x, y, rad){
    this.x = x
    this.y = y
    this.rad = rad

    this.speed = 2.2

    this.add = false
    this.rm = false

    this.points = []
    let traine = []
    for(let i = 0; i < 8; i++){
        this.points.push({x:0, y:0})
        traine.push([])
    }

    
    let ran = dist(0, 0, innerWidth / 2, innerHeight / 2)
    let ranrm = ran 

    let tb = false

    this.update = function (value){
        this.speed += Math.cos(value) 
        this.rad += 0.05 * this.speed * value
        text("speed " + this.speed, innerWidth - 100, 30)
        text("rad " + this.rad, innerWidth - 100, 60)

        for (let i = 0; i < this.points.length; i++){
            this.points[i].x = this.x + Math.cos(this.speed + (i*(PI/4))) * this.rad
            this.points[i].y = this.y + Math.sin(this.speed + (i*(PI/4))) * this.rad
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

        strokeWeight(1)
        stroke(0,0,0)
        // 4 point
        for (let i = 0; i < this.points.length; i++){
            //point(this.points[i].x, this.points[i].y)
            
            traine[i].push(new DotFadeOut(createVector(this.points[i].x, this.points[i].y), 200))
        }
        for(let i = 0; i < traine.length; i++){
            beginShape(LINES)
            for (let y = 0; y < traine[i].length; y++){
                traine[i][y].update()
                if(traine[i][y].rm)
                    traine[i].splice(y, 1)
            }
            endShape(CLOSE)
        }
    }
}

let DotFadeOut = function (v, a){
    this.a = a
    this.rm = false
    let ran = random(-1, 1)
    this.update = function (){
        this.a -= 10
        ran = random(-1, 1)
        v.x += ran
        v.y += ran
        if(this.a < 1)
            this.rm = true
        this.draw()
    }
    this.draw = function (){
        strokeWeight(10)
        //stroke(0,0,0, this.a)
        stroke( map(v.x - v.y, 0, 1000, 0, 255),
            map(v.y - v.x, 0, 1000, 0, 255),
            map(this.a + v.y, 0, 1000, 0, 255),
            this.a)

        stroke(0,0,0, this.a)

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

    this.update = function () {
        //this.x += 

        this.x += 0.1
        this.r += 0.01

        if(!this.add && this.x > this.w * 2)
            this.add = true

        if(this.x > windowWidth)
            this.rm = true

        this.draw()
    }

    this.draw = function () {
        
        noStroke()
        fill(map(this.x, 0, innerWidth, 0, 255), map(this.y, 0, innerHeight, 0, 255), map(this.w, 0, maxW, 0, 255))
        translate(width / 2, height / 2);
        rotate(PI * this.r)
        rect(this.x, this.y, this.w, this.w)
    }

}