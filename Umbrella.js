class Umbrella{
constructor(x,y){
var options={
isStatic:true    
}
this.image = loadImage("images/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world, this.umbrella);    
}    
display(){
    var pos= this.umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+60,300,300);
}
} 