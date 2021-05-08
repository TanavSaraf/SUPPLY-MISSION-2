class Rect 
{
    constructor(x,y,width,height,options)
    {
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
      this.width=width;
      this.height=height;

    }
   display()
    {
        push()
        fill("red");
     var pos=this.body.position;
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
     pop();
    }
}