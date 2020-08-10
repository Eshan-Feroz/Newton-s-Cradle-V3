class Ground{
    constructor(x, y, width, height){

        // Properties for roof
        var options = {
            isStatic: true
        }

        //make the body
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body); 
    }
    display(){

        var pos = this.body.position;

        // Add color and draw the rect.
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
};