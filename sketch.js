const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle;
var pistola;
var tower;
var bala
var matris=[22,44,66]
console.log(matris[2])
var municion=[];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
angle=-PI/4          //45°
  tower=new Tower(150,350,160,310);
pistola=new Disparador(180,110,100,50,angle);
bala=new Bala(pistola.x,pistola.y);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
Engine.update(engine);
tower.display();
pistola.display();
bala.display();  // quitar de aqui para que no se vea --- abajo en la 62 ya le decimos que se vea :) 
//muestra la torre(desafío 4)
 for(var i=0; i<bala.length;i++){ // aqui va MUNICIÓN 
   showBala(municion[i],i); // ESTE ES EL NOMBRE DE LA FUNCIÓN DE ABAJO, LA 61- esta ok 


 }
}


function keyPressed() {
   if (keyCode === DOWN_ARROW) {
      var cannonBall = new Bala(pistola.x, pistola.y); 
       municion.push(cannonBall); 
       }
       }
        //función para mostrar la bala
        
function showBala(bala, index) { 
   bala.display();
    if (bala.body.position.x >= width || bala.body.position.y >= height - 50) {
       Matter.World.remove(world, bala.body);
        municion.splice(index, 1);
       } 
      }
       function keyReleased(){
          if (keyCode === DOWN_ARROW) {
             municion[municion.length - 1].shoot();
             }
 } 
