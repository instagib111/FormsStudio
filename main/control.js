let controls = {
    settings : {
        msTime : 150,
        leftBack : -310
    },
    global : {
        max_inst : 1,
        fullscreen : false
    },
    multiDot : {
        value : 2,
        time : 1,
        arr : [],
        draw : 
            function (){
                for(let i = 0; i < this.arr.length; i++){
                    this.arr[i].update()
                    if (this.arr[i].add)
                        this.arr.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
                    
                    if (this.arr[i].rm)// || this.arr.length > controls.global.max_inst)
                        this.arr.splice(i,1)
                }

                text("nombre d'instances : " + this.arr.length, innerWidth - 400, 30)
            },
        setup : 
            function (){
                this.arr = []

                this.arr.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
            }
    },
    displayText : []
    
}