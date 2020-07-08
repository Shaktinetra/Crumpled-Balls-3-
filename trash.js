class Trash {
    constructor() {
        var options ={
            isStatic: true
        }
        this.bodyb = Bodies.rectangle(600, 570, 180, 10, options);
        this.bodyr = Bodies.rectangle(635, 565, 10, 200, options);
        this.bodyl = Bodies.rectangle(565, 565, 10, 200, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.bodyb);
        World.add(world, this.bodyr);
        World.add(world, this.bodyl);
    }

    display() {
        imageMode(CENTER);
        image(this.image, 600, 560, 200, 200)
    }
}
