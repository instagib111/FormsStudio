let controls = {
    settings: {
        msTime: 150,
        leftBack: -310
    },
    global: {
        max_inst: 1,
        fullscreen: false
    },
    drawable: {

    },
    multiDot: {
        input: {
            value: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 1,
                class: "input"
            },
            time: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 1,
                class: "input"
            }
        },
        value: 2, // en attendant
        time: 1, // en attentdant
        arr: [],
        draw: function () {
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].update()
                if (this.arr[i].add)
                    this.arr.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))

                if (this.arr[i].rm) // || this.arr.length > controls.global.max_inst)
                    this.arr.splice(i, 1)
            }

            text("nombre d'instances : " + this.arr.length, innerWidth - 400, 30)
        },
        setup: function () {
            this.arr = []
            colorMode(HSB, 255)
            this.arr.push(new MultiDot(innerWidth / 2, innerHeight / 2, 0))
        }
    },
    square: {
        input: {
            speed: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 1,
                class: "input",
                onchange: "updateValue(this.value, 'speed')"
            }
        },
        arr: [],
        draw: function () {
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].update()
                if (this.arr[i].add)
                    this.arr.push(new Square(2, innerHeight / 2, 10, 20))

                if (this.arr[i].rm) // || this.arr.length > controls.global.max_inst)
                    this.arr.splice(i, 1)
            }
        },
        setup: function () {
            this.arr = [];
            colorMode(RGB, 255)
            this.arr.push(new Square(innerWidth / 2, innerHeight / 2, 10, 20))
        }
    },
    displayText: []

}