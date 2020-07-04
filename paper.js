class Paper {
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}
