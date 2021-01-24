class Box{
    constructor(x,y,w,h){

        var stat = {
            isStatic : false,
            density : 0.6,
            friction : 2
        }

        this.body = Bodies.rectangle(x,y,w,h,stat);
        this.w = w;
        this.h = h;

        World.add(world, this.body);


    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(4);
        stroke("red");
        rect(0,0,this.w,this.h);
        pop();



    }
}