class Paper{

  constructor(x,y,radius){

var options = {
  'isStatic' : false, 
  'restitution' : 0.1,
  'friction' : 0.05  
  
}

    this.body = Matter.Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);

  }
display(){

var pos = this.body.position;

ellipse(pos.x,pos.y,this.radius,this.radius);

}

}