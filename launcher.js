class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 25
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly() {
        this.body.bodyA = null;
    }

    display(){
        if (this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
