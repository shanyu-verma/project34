class Mons{
    constructor(x,y,w,h){

        var stat1 = {
            isStatic : false,
            density : 1,
            frictionAir : 0.005
        }
        this.image = loadImage("Monster-02.png");
        this.body = Bodies.rectangle(x,y,w,h,stat1);
        this.w = w;
        this.h = h;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        /*rectMode(CENTER);
        rect(0,0,this.w,this.h);*/
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();



    }



}