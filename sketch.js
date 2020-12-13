const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon;

function preload(){

}

function setup(){
createCanvas(1200,800);
engine = Engine.create();
world = engine.world;

polygonBody=Bodies.polygon(80,400,5,30);
World.add(world,polygonBody);

Engine.run(engine);
}

function draw (){
background("white");
polygonShape(polygonBody.position.x,polygonBody.position.y,5,30);
}

function polygonShape(x, y, npoints, radius) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }