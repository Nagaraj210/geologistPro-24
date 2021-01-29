class sand{
    constructor(x,y,radius){
        var options={
            'restitution':0,
            'friction' :0.2,
            'density' :1

        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){

        
        ellipseMode(RADIUS);

        ellipse(this.body.position.x,this.body.position.y,this.radius);

        fill("blue");
    }
    
}
