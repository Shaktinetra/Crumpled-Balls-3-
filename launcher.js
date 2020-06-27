class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 20
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly() {
        this.body.bodyA = null;
    }

    display(){
        if (this.body.bodyA != null) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
