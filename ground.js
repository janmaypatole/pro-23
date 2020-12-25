class Ground{
    costructor(x,y,width,height){
    var options={
     isStatic:true
    }
    this.body= bodies.rectangle(x,y,height,width,option)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    } 
   display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
   translate(pos.x,pos.y)
   stokeWeight(6)
   stroke("white")
   rectMode(CENTER)
   rect(0,0,this.width,this.height)
    pop();
}
}