class SpriteRunner {
    constructor(x, y){
        this.runner = loadAnimation(
            'img/runner0.png',
            'img/runner1.png', 
            'img/runner2.png', 
            'img/runner3.png', 
            'img/runner4.png', 
            'img/runner5.png')
        this.x = x
        this.y = y
        this.rotate
        console.log(runner)
    }
    update(){
        this.runner.play()
        this.draw()
    }
    draw() {
        
        angleMode(DEGREES)
        this.rotate = controls.drawable.input.rotate.value

        translate(this.x, this.y);
        rotate(this.rotate)
        animation(this.runner, -100, 0);
    }
}


class Man {
    
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.rotate = 0
        this.head = new Head(this.x, this.y, this.size)
    }

    update (){
        this.rotate = controls.drawable.input.rotate.value
        this.size = controls.drawable.input.size.value
        this.draw()
    }
    draw (){
        stroke(0)
        fill(0)
        angleMode(DEGREES)
        rectMode(CENTER)
        
        //body
        translate(this.x, this.y);
        rotate(this.rotate)
        rect(0, 0, this.size, this.size * this.size)
        //head
        this.head.update(this.x - (this.size / 2), this.y - 100, this.size)
    }
}

class Head {
    construct (x, y, size){
        this.x = x
        this.y = y
        this.size = size
    }

    update (x, y, s) {
        // this.x = x
        // this.y = y
        this.size = s

        controls.displayText.push(x,y)
        this.draw()
    }

    draw (){
        fill(0)
        noStroke()
        //strokeWeight(this.size * this.size * this.size)
        var s = this.size * (this.size / 2)
        ellipse(0, -1 * s, s);

    }
}