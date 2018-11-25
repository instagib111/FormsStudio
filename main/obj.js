let LineWave = function () {

    let len = innerWidth
    let arrLine = []

    this.speed = 1

    for (let i = 0; i < len; i++){
        arrLine.push({
            x : i,
            y : 0, 
            x2 : i, 
            y2 : i+innerHeight,
            c : map(i, 0, innerWidth, 0, 255)
        })
    }

    let ctrl = controls.drawable.input
    this.update = function () {
        this.speed += ctrl.speed.value
        for (let i = 1; i < len; i++) {
            arrLine[i].c = Math.abs( Math.cos(this.speed + (i * PI/(ctrl.space.value + i / ctrl.space.value ))) * (ctrl.rad.value) )
        }
        this.draw()
    }
    this.draw = function () {
        strokeWeight(1)
        noFill()
        for (let i = 0; i < len; i++) {
            //stroke(arrLine[i].c, ctrl.saturation.value, ctrl.bright.value, ctrl.alpha.value)
            stroke(arrLine[i].c)
            line(arrLine[i].x, arrLine[i].y, arrLine[i].x2, arrLine[i].y2)
            // ellipse(innerWidth / 2, innerHeight / 2, arrEli[i].r)
            // ellipse(
            //     random(innerWidth / 2 - 1, innerWidth / 2 + 1), 
            //     random(innerHeight / 2 - 1, innerHeight / 2 + 1), 
            //     arrEli[i].r)
        }
    }
}

let SquareWave = function () {
    let arrEli = []
    this.add = false
    this.rm = false

    this.direction = 1
    this.speed = 1
    let max = innerWidth * 2
    for (let i = 0; i < max; i++) {
        let color = map(i, 0, max, 0, 255)
        arrEli.push({
            x: innerWidth / 2,
            y: innerHeight / 2,
            r: i,
            c: color
        })
    }

    let ctrl = controls.drawable.input
    this.update = function () {
        this.speed += ctrl.speed.value
        for (let i = 0; i < max; i++) {
            arrEli[i].c = Math.abs( Math.cos(this.speed + (i * PI/(ctrl.space.value + i / ctrl.space.value ))) * (ctrl.rad.value) )
        }
        
        this.draw()
    }
    this.draw = function () {
        strokeWeight(1)
        noFill()
        for (let i = 0; i < max; i++) {
            stroke(arrEli[i].c, ctrl.saturation.value, ctrl.bright.value)
            // ellipse(arrEli[i].x, arrEli[i].y, arrEli[i].r)
            rect(innerWidth / 2, innerHeight / 2, arrEli[i].r, arrEli[i].r)
        }
    }
}


let Wave = function () {
    let arrEli = []
    this.add = false
    this.rm = false

    this.direction = 1
    this.speed = 1
    let max = dist(0, 0, innerWidth, innerHeight) 
    for (let i = 0; i < max; i++) {
        let color = map(i, 0, max, 0, 255)
        arrEli.push({
            x: innerWidth / 2,
            y: innerHeight / 2,
            r: i,
            c: color
        })
    }

    let ctrl = controls.drawable.input
    this.update = function () {
        this.speed += ctrl.speed.value

        for (let i = 1; i < max; i++) {
            arrEli[i].c = Math.abs( Math.cos(this.speed + (i * PI/(ctrl.space.value + i / ctrl.space.value ))) * (ctrl.rad.value) )
            arrEli[i].x = arrEli[i - 1].x + Math.cos(map(this.speed, 0, 10, 0, 1) + i * (PI / ctrl.tribe.value)) * ctrl.tribe.value
            arrEli[i].y = arrEli[i - 1].y + Math.sin(map(this.speed, 0, 10, 0, 1) + i * (PI / ctrl.tribe.value)) * ctrl.tribe.value
        }
        
        this.draw()
    }
    this.draw = function () {
        
        strokeWeight(1)
        noFill()
        for (let i = 0; i < max; i++) {
            stroke(arrEli[i].c, ctrl.saturation.value, ctrl.bright.value, ctrl.alpha.value)
            ellipse(arrEli[i].x, arrEli[i].y, arrEli[i].r)
            // ellipse(innerWidth / 2, innerHeight / 2, arrEli[i].r)
            // ellipse(
            //     random(innerWidth / 2 - 1, innerWidth / 2 + 1), 
            //     random(innerHeight / 2 - 1, innerHeight / 2 + 1), 
            //     arrEli[i].r)
        }

    }
}


let MultiDot = function (x, y, rad) {
    this.x = x
    this.y = y
    this.rad = rad

    this.speed = 2.2

    this.add = false
    this.rm = false

    this.points = []
    let trainee = []
    for (let i = 0; i < 16; i++) {
        this.points.push({
            x: 0,
            y: 0
        })
        trainee.push([])
    }


    let ran = dist(0, 0, innerWidth / 2, innerHeight / 2)
    let ranrm = ran + 200

    let tb = false
    let value = 0
    let ctrl = controls.drawable.input
    this.update = function () {
        value = ctrl.value.value
        this.speed += Math.sin(value) * ctrl.time.value
        this.rad += 0.05 * this.speed / value

        controls.displayText.push("speed " + this.speed)
        controls.displayText.push("rad " + this.rad)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x = this.x + Math.cos(this.speed + (i * (PI / 8))) * this.rad
            this.points[i].y = this.y + Math.sin(this.speed + (i * (PI / 8))) * this.rad
        }
        if (this.add) {
            this.add = false
            tb = true
        } else if ((!tb) && Math.abs(this.rad) > ran)
            this.add = true

        if (this.rad > ranrm || (this.x < 0 || this.x > innerWidth) || (this.y < 0 || this.y > innerHeight))
            this.rm = true

        this.draw()
    }
    this.draw = function () {

        for (let i = 0; i < trainee.length; i++) {
            beginShape(LINES)
            for (let y = 1; y < trainee[i].length; y++) {
                trainee[i][y].update()
                if (trainee[i][y].rm)
                    trainee[i].splice(y, 1)
            }
            endShape()
        }
        for (let i = 0; i < this.points.length; i++) {
            trainee[i].push(new DotFadeOut(createVector(this.points[i].x, this.points[i].y), 200))
        }
    }
}

let DotFadeOut = function (v, a) {
    this.a = a
    this.v = v
    this.rm = false
    //let ran = random(-1, 1)
    this.update = function () {
        this.a -= 5
        // ran = random(-1, 1)
        // v.x += ran
        // v.y += ran
        if (this.a < 1)
            this.rm = true
        this.draw()
    }
    this.draw = function () {
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

        if (!this.add && this.x > innerWidth)
            this.add = true

        if (this.x > innerWidth + 10)
            this.rm = true

        this.draw()
    }

    this.draw = function () {

        noStroke()
        fill(0)

        rect(this.x, this.y, this.w, this.w)
    }

}