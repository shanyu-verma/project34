class Rope{
    constructor(bodyA,pointB){
        var options1 = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.5,
            length : 350
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options1);
        World.add(world, this.rope);

    }



    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("green");
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}