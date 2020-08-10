class Rope{
    constructor(body1, body2, offsetX, offsetY){

        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        // Properties of the rope
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        
        // Create constraint with the properties
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display(){
        // Create Points for the rope
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        // Add the color
        strokeWeight(2);
        fill("blue");

        // Move the rope with the ball
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;
        
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        console.log(Anchor1X);
    }
}