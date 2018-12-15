class Equation {
    constructor(){

        this.tm = 1;
        this.max = 1600;
        this.f = 1;
        this.mt = this.eq3(this.max, this.tm);
    }
    eq3(x, m){
        return Math.cos(x*x*m)/(x/100)+0.40;
    }

    cir(x,y,d){
        let a = map(this.eq3(d, this.tm),this.f, this.mt, 255, 0);
        stroke(a);
        
      noFill();
      strokeWeight(5);
        
        ellipse(x,y,d);
        if(d < this.max)
            this.cir(x,y,d+=2);
    }

    update() {
        if(this.tm<100000)
            this.tm*=1.0000002;
        
        this.draw()
    }

    draw(){
        

        this.cir(width / 2, height / 2, this.tm)
    }

    
}