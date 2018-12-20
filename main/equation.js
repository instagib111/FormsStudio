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
        return Math.cos(x*x*(m/100000))/(x/100)+0.40;
    }
    sinuscar(x, s){
        return Math.sin(x*(s/1000))/x * 100
    }
    
    ondeGravite(x,m){
        var c = Math.sqrt(((10*x)/(2*Math.PI)) * Math.tanh((2*Math.PI*50) / x ))
        return c
    }

    switchEq(val){
        this.tm = 1;
        this.curEq = this[val]
        this.mt = this.curEq(this.max, this.tm);
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
            this.tm += controls.drawable.input.speed.value;
        this.draw()
    }

    draw(){
        this.cir(width / 2, height / 2, this.f)
    }
}