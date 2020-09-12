class Paper {
    constructor(){
      var options = {
        isStatic: false,  
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
      this.body = Bodies.circle(70,670,10,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill("pink");
      ellipse(0, 0, 10, 10);
      pop();
    }
  }