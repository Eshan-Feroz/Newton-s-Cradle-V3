class Bob{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
						}
		this.x=x;
		this.y=y;
		this.radius=radius;
		
		this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
		World.add(world, this.body);

	}
    
    display(){

        // Generate the position of the bob
        var bobPos = this.body.position;
        
        push()
        //translate(this.x, this.y);
        translate(bobPos.x, bobPos.y);

        rectMode(CENTER);
        strokeWeight(3);
        // Add color and finalize with the ellipse        
        fill("blue");
        ellipse(0,0,this.radius, this.radius);
		pop()
        
    }
          
}