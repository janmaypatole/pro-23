class Dustbin{
  constructor(x,y,width,height){
      var  options={
         restitution:0.3,
     friction:0.5,
     density:0.5   
    }
    this.body = Bodies.rectangle(x,y,height,width,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
} 
  display(){
    var position = this.body.position
    angle = this.body.angle
    Push();
   translate(position.x,position.y)
   rotate(angle)
   stokeWeight(6)
   stroke("blue")
   rectMode(CENTER)
   rect(0,0,this.width,this.height)
    Pop();
}
}

