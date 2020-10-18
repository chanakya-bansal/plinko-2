const Engine = Matter.Engine;
const World= Matter.World;

const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 

var plinkos = [];
var divisions=[];
var particle=[];

var divisionHeight=300;
var score =0;
var particles
var turn=0
var gameState=1
var hit
var chance=0

function preload(){
 hit=loadSound("hit.mp3")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,795,width,20);


  for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
 Engine.run(engine)
    
}
 


function draw() {
  background("black");
 
 ground.display()
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

 stroke (255)
 text ("500       400         300        200         100        100         200        300         400        500",25,550)
 textSize(35)
 text (" "+score,10,30)
 text ("turns:"+chance,670,30)

 if(mouseDown()){
  if(gameState!==0){
   
    particles=new Particle(mouseX,10,10)
   
  }
 }
 if(particles!=null){
  particles.display()

  if(particles.body.position.y>650){
    turn++
   if(particles!==null){
    if(particles.body.position.x>10 && particles.body.position.x<80 ||particles.body.position.x>720 && particles.body.position.x<800 ){
      score=score+500
      particles=null
      hit.play()
    }
  }
  if(particles!==null){
    if(particles.body.position.x>80 && particles.body.position.x<160 ||particles.body.position.x>640 && particles.body.position.x<720 ){
      score=score+400
      particles=null
      hit.play()
    }
  }
  if(particles!==null){
    if(particles.body.position.x>160 && particles.body.position.x<240 ||particles.body.position.x>560 && particles.body.position.x<640 ){
      score=score+300
      particles=null
      hit.play()
    }
  }
  if(particles!==null){
    if(particles.body.position.x>240 && particles.body.position.x<320 ||particles.body.position.x>480 && particles.body.position.x<560 ){
      score=score+200
      particles=null
      hit.play()
    }
  }
  if(particles!==null){
    if(particles.body.position.x>320 && particles.body.position.x<400 ||particles.body.position.x>400 && particles.body.position.x<480 ){
      score=score+100
      particles=null
      hit.play()
    }
  }

  }
  
 }
 if(turn==5){
   gameState=0
   textSize(35)
   stroke(255)
   text ("game over",300,250)
   text ("your score:"+score,270,350)
   textSize(25)
   text ("press enter to play again",250,450)
  // end.play()
   //end.loop(false)
 }
 if(gameState===0 && keyDown("enter")){
   gameState=1
   turn=0
   score=0
 }

 if(turn===0){
   chance=5
 }
 if(turn===1){
   chance=4
 }
 if(turn===2){
  chance=3
}
if(turn===3){
  chance=2
}
if(turn===4){
  chance=1
}
if(turn===5){
  chance=0
}

 
console.log(turn)





}
