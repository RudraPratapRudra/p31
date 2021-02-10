const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var maxDrops=100;
var thunder1,thunder2,thunder3,thunder4,thunder;
var rand;
var drops=[];
var thunderCreatedFrame=0;

function preload(){    
thunder1 = loadImage("images/thunderbolt/1.png");
thunder2 = loadImage("images/thunderbolt/2.png");
thunder3 = loadImage("images/thunderbolt/3.png");
thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
  
engine = Engine.create();
world = engine.world;
createCanvas(500,700);
umbrella=new Umbrella(200,500);
if(frameCount%100===0){
for(var i=0; i<maxDrops; i++){
  drops.push(new Drop(random(0,400), random(0,400)));
}
}

}

function draw(){    
Engine.update(engine);
background("black") ;


umbrella.display();  
for (var i=0; i<maxDrops;i++ ){
        
    drops[i].display();
    drops[i].update()
} 
drawSprites()
}
