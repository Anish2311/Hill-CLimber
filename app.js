var points = []
var start = 0;
var xoff = 0;
var inc = 0.002;
var x = 0
var sp = 5
var csp = 0
var y = 0
var j = -5
var fx = 0
var wheel;
var keyC;
var pc;
var jmp = false
var slp = 0;

class Wheel{
    constructor(x,y){
        this.pos = createVector(x,y)
        this.v = createVector(0,0)
        this.r = 24
        this.m = 1
        this.g = createVector(0,0.1*this.m)
        this.c = 'ff9600'
    }

    move(){
        this.g = createVector(0,0.1*this.m)
        this.v.add(this.g)
        this.pos.add(this.v)
        fill(this.c)
        noStroke()
        circle(this.pos.x,this.pos.y,this.r)
    }

    check(){
        points.forEach((dot,i) => {
            if(dot.x <= this.pos.x + this.r/2 - 2 && dot.x >= this.pos.x - this.r/2  + 2 && dot.y <= this.pos.y + this.r/2 - 2 && dot.y >= this.pos.y - this.r/2 + 2){
                this.pos.y = constrain(this.pos.y,0,dot.y-(this.r/2) + 2)
                this.v = createVector(0,0)
                stroke(255,0,0)
                strokeWeight(4)
                fx = map(points[i+1].y-dot.y,-this.r/2,this.r/2,-inc*this.g.y*100,inc*this.g.y*100)
                if(fx > csp){
                    this.pos.y = dot.y - this.r/2 + 2
                }
                csp = fx

            }
            
        });
    }

}

function setup(){
    createCanvas(900,640)
    wheel = new Wheel(width/2,height/2)
    keyC = RIGHT_ARROW
}

function draw(){
    background(PARAMS.Background)
    // sp = pane.f.speed.value
    xoff = start
    wheel.move()
    wheel.check()
    sp = PARAMS.speed
    wheel.m = PARAMS.mass
    wheel.c = PARAMS.Ball
    let pinc = inc
    inc = map(PARAMS.bumpiness,1,10,0.002,0.01)
    if(inc != pinc){
        wheel.pos.y = height/2
    }
    pinc = inc
    beginShape()
    points = []
    vertex(width,height)
    vertex(0,height)
    for(let i = 0; i < width+1; i++){
        x = i
        xoff += inc
        y = map(noise(xoff),0,1,height/2,height)
        noStroke()
        fill(PARAMS.Ground)
        vertex(x,y)
        points.push(createVector(x,y))
    }
    endShape()
    start += csp
    start += slp
    start += inc*sp
}

