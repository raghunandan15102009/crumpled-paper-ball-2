class Ground{
    constructor(x,y){
       var options={
        isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,1200,20,options);
        World.add(world,this.body); 
        this.width=width;
        this.height=height;
    }
    display(){
      var pos=this.body.position;
      pos.x=this.body.position.x;
      pos.y=this.body.position.y;
      rectMode(CENTER);
      fill(255);
      rect(pos.x,pos.y,1200,20);    
    }
}