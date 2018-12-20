class Equation {
    constructor(){

        this.tm = 1;
        this.max = 1100;
        this.f = 1;
        this.curEq = this[controls.drawable.select.équations.value]
        this.mt = this.curEq(this.max, this.tm);
    }

    // équations
    eq3(x, m){
        return Math.cos(x*x*m)/(x/100)+0.40;
    }
    sinuscar(x, s){
        return Math.sin(x*s)/x * 100
    }
    
    switchEq(val){
        this.curEq = this[val]
    }
    cir(x,y,d){
        let a = map(this.curEq(d, this.tm),this.f, this.mt, 255, 0);
        stroke(a, 155, 200, a*2);
        noFill();
        strokeWeight(4);
        //smooth()
        //console.log(a)
        ellipse(x,y,d);
        if(d < this.max)
            this.cir(x,y,d+=2);
    }

    update() {
        if(this.tm<100000)
            this.tm += controls.drawable.input.speed.value/1000;
        this.draw()
    }

    draw(){
        this.cir(width / 2, height / 2, this.tm)
    }
}