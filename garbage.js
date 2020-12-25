class Garbage{
    costructor(x,y,width,height){
    var options={
     restitution:0.3,
     friction:0.5,
     density:0.5   
    }
    this.body = bodies.rectangle(x,y,height,width,option)
    this.width = width;
    this.height = height;
    World.add(this,body.rectangle)
} 
  display(){
    var pos = this.body.pos
    var angle = this.body.angle
    Push();
   Translate(pos.x,pos.y)
   rotate(angle)
   stokeWeight(6)
   stroke("blue")
   rectMode(CENTER)
   rect(0,0,this.width,this.height)
    Pop();
}
}