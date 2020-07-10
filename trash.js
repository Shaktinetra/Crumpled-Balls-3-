class Trash {
    constructor() {
        var options ={
            isStatic: true
        }
        this.bodyb = Bodies.rectangle(700, 500, 180, 10, options);
        this.bodyr = Bodies.rectangle(790, 500, 10, 200, options);
        this.bodyl = Bodies.rectangle(610, 500, 10, 200, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.bodyb);
        World.add(world, this.bodyr);
        World.add(world, this.bodyl);
    }

    display() {
        imageMode(CENTER);
        image(this.image, 700, 520, 200, 200)
    }
}
