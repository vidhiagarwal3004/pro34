class Hero
{
    constructor(x,y,width,height)
    {

        var options = {
           isStatic:false,
            restitution:0,
            density:1,
           frictionAir:1 
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("super2.png");
      
        World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;
   push();
  translate(this.body.position.x,this.body.position.y);
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height);
  pop();
 }
}