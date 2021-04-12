class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.body.collisionFilter = {
        'group': -1,
        'category': 2,
        'mask': 0,
      };
      this.width = width;
      this.height = height;
      this.image = loadImage("Sprites/tree.png");
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  };