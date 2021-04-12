class Projectile {
    constructor(x,y,radius) {
      var options = {
            density: 0.01
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("hexagon.png")

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius * 3, this.radius * 3);
        pop();
    }
  };