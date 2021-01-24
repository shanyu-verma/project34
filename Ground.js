class Ground{
    constructor(x,y,w,h){

        var stat = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,stat);
        this.w = w;
        this.h = h;

        World.add(world,this.body);

    }


    display(){
        var pos = this.body.position;
        fill("pink");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}