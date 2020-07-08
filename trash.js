class Trash {
    constructor() {
        var options ={
            isStatic: true
        }
        this.bodyb = Bodies.rectangle(600, 500, 180, 10, options);
        this.bodyr = Bodies.rectangle(690, 500, 10, 200, options);
        this.bodyl = Bodies.rectangle(510, 500, 10, 200, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.bodyb);
        World.add(world, this.bodyr);
        World.add(world, this.bodyl);
    }

    display() {
        rectMode(CENTER);
       //image(this.image, 600, 500, 200, 200)
        rect(600, 500, 180, 10);
        rect(690, 500, 10, 200);
        rect(510, 500, 10, 200);
    }
}
