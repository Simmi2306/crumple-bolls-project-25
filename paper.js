class Paper{
	constructor(x,y,radius){
	
	var options={
		iStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
		
		this.radius=radius;
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(x,y, radius, options)
		World.add(world, this.body);

	}
	display(){

		ellipseMode(RADIUS);
		translate(this.body.position.x, this.body.position.y);
		fill(255);
		//ellipse(this.body.position.x,this.body.position.y,this.radius);
		imageMode(CENTER);
		image(this.image,0,0,this.radius,this.radius);

		
		


			
			

			
	}

};