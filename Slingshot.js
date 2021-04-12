class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            length: 15, 
            stiffness : 0.04, 
            damping: 0.3, 
            bodyA : bodyA, 
            pointB : pointB,
        }
        //{ x : pointB.x, y : pointB.y + 100}
        // this.pointC = pointC;
        this.pointB = pointB;
        this.constraint = Constraint.create(options);
        this.isReleased = false;
        World.add(world, this.constraint);
        this.image = loadImage("sprites/slingshot.png");
    }

    release() {
        this.constraint.bodyA = null;
        this.isReleased = true

    }

    display() {
        imageMode(CENTER);
        image(this.image, 200,180, 70, 200);
        if (!this.isReleased) {
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
           // var pointC = this.pointC;
            strokeWeight(6)
            line(pointA.x-10, pointA.y, pointB.x, pointB.y);
            line(pointA.x+20, pointA.y+10, pointB.x + 50, pointB.y-10)
        }
    }
}