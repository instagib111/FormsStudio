class Equation {
    constructor(){

        this.tm = 1;
        this.max = 1100;
        this.f = 1;
        this.mt = this.sinuscar(this.max, this.tm);
    }

    eq3(x, m){
        return Math.cos(x*x*m)/(x/100)+0.40;
    }
    sinuscar(x, s){
        return Math.sin(x*s)/x * 100
    }

    cir(x,y,d){
        let a = map(this.sinuscar(d, this.tm),this.f, this.mt, 255, 0);
        stroke(a, 155, 200, a*2);
        noFill();
        strokeWeight(4);
        smooth()
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