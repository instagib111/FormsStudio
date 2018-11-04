let controls = {
    settings: {
        msTime: 150,
        leftBack: -310
    },
    global: {
        max_inst: 1,
        fullscreen: false,
        bgcg : 200
    },
    drawable: {},
    man: {
        input: {
            speed: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 10,
                class: "input",
                oninput: "updateValue(this.value, 'speed')"
            },
            rotate: {
                type: "range",
                step: 1,
                value: 0.5,
                min: 0.01,
                max: 360,
                class: "input",
                oninput: "updateValue(this.value, 'rotate')"
            },
            size: {
                type: "range",
                step: 0.01,
                value: 1,
                min: 0,
                max: 10,
                class: "input",
                oninput: "updateValue(this.value, 'size')"
            }
        },
        arr: [],
        draw: function () {
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].update()
                // if (this.arr[i].add)
                //     this.arr.push(new Man(2, innerHeight / 2, 10, 20))

                // if (this.arr[i].rm) // || this.arr.length > controls.global.max_inst)
                //     this.arr.splice(i, 1)
            }
        },
        setup: function () {
            this.arr = [];
            colorMode(RGB, 255)
            this.arr.push(new SpriteRunner(innerWidth / 2, innerHeight / 2))
            //  this.arr.push(new SpriteRunner(innerWidth / 2, innerHeight / 2, 10))
            //  this.arr.push(new Man(innerWidth / 2, innerHeight / 2, 10))
        }
    },
    squareWave : {
        input: {
            colorMode : {
                type: "checkbox",
                id: "inp_colorMode",
                toggle: ["RGB", "HSB"],
                value: "RGB",
                class: "input",
                oninput: "updateCbx(this.toggle, 'colorMode')"
            },
            speed: {
                type: "range",
                step: 0.001,
                value: 3.213,
                min: 0.001,
                max: 10,
                class: "input",
                oninput: "updateValue(this.value, 'speed')"
            },
            space: {
                type: "range",
                step: 0.1,
                value: 14,
                min: 1,
                max: 50,
                class: "input",
                oninput: "updateValue(this.value, 'space')"
            },
            rad: {
                type: "range",
                step: 10,
                value: 184,
                min: 4,
                max: 300,
                class: "input",
                oninput: "updateValue(this.value, 'rad')"
            },
            saturation: {
                type: "range",
                step: 1,
                value: 158,
                min: 1,
                max: 255,
                class: "input",
                oninput: "updateValue(this.value, 'saturation')"
            },
            bright: {
                type: "range",
                step: 1,
                value: 170,
                min: 1,
                max: 255,
                class: "input",
                oninput: "updateValue(this.value, 'bright')"
            }
        },
        arr : [],
        draw: function () {
            if(controls.drawable.input.colorMode.toggle[0] == "RGB")
                colorMode(RGB, 255)
            else if (controls.drawable.input.colorMode.toggle[0] == "HSB")
                colorMode(HSB, 255)

            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].update()
                if (this.arr[i].add)
                    this.arr.push(new SquareWave())

                if (this.arr[i].rm) // || this.arr.length > controls.global.max_inst)
                    this.arr.splice(i, 1)
            }

            text("nombre d'instances : " + this.arr.length, innerWidth - 400, 30)
        },
        setup: function () {
            this.arr = []
            if(controls.drawable.input.colorMode.toggle[0] == "RBG")
                colorMode(RGB, 255)
            else 
                colorMode(HSB, 255)

            rectMode(CENTER)
            this.arr.push(new SquareWave())
        }
    },
    wave : {
        input: {
            colorMode : {
                type: "checkbox",
                id: "inp_colorMode",
                toggle: ["RGB", "HSB"],
                value: "RGB",
                class: "input",
                oninput: "updateCbx(this.toggle, 'colorMode')"
            },
            speed: {
                type: "range",
                step: 0.001,
                value: 3.213,
                min: 0.001,
                max: 10,
                class: "input",
                oninput: "updateValue(this.value, 'speed')"
            },
            space: {
                type: "range",
                step: 1,
                value: 14,
                min: 4,
                max: 1000,
                class: "input",
                oninput: "updateValue(this.value, 'space')"
            },
            rad: {
                type: "range",
                step: 10,
                value: 184,
                min: 4,
                max: 300,
                class: "input",
                oninput: "updateValue(this.value, 'rad')"
            },
            saturation: {
                type: "range",
                step: 1,
                value: 158,
                min: 1,
                max: 255,
                class: "input",
                oninput: "updateValue(this.value, 'saturation')"
            },
            bright: {
                type: "range",
                step: 1,
                value: 170,
                min: 1,
                max: 255,
                class: "input",
                oninput: "updateValue(this.value, 'bright')"
            }
        },
        arr : [],
        draw: function () {
            if(controls.drawable.input.colorMode.toggle[0] == "RGB")
                colorMode(RGB, 255)
            else if (controls.drawable.input.colorMode.toggle[0] == "HSB")
                colorMode(HSB, 255)
                
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].update()
                if (this.arr[i].add)
                    this.arr.push(new Wave())

                if (this.arr[i].rm) // || this.arr.length > controls.global.max_inst)
                    this.arr.splice(i, 1)
            }

            text("nombre d'instances : " + this.arr.length, innerWidth - 400, 30)
        },
        setup: function () {
            this.arr = []
            if(controls.drawable.input.colorMode.toggle[0] == "RBG")
                colorMode(RGB, 255)
            else 
                colorMode(HSB, 255)

            this.arr.push(new Wave())
        }
    },
    multiDot: {
        input: {
            value: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 1,
                class: "input",
                oninput: "updateValue(this.value, 'value')"
            },
            time: {
                type: "range",
                step: 0.001,
                value: 0.5,
                min: 0.01,
                max: 1,
                class: "input",
                oninput: "updateValue(this.value, 'time')"
            }
        },
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
                oninput: "updateValue(this.value, 'speed')"
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