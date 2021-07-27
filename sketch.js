const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var jointPoint1, jointPoint2, jointPoint;
var jointLink;
//var stone;
var stones = [];

function setup() {
  createCanvas(1700, 775); //use 1700 for window width :>
  engine = Engine.create();
  world = engine.world;

  jointPoint = new newBase(1480, 430, 10, 10);

  bridge = new createBridge(32, {x:175, y:415}); //x:180 and y:400
  jointPoint2 = new newBase(1625, 675, 300, 500); //right side
  jointPoint1 = new newBase(80, 675, 300, 500); //left side

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new newLink(bridge, jointPoint);

  frameRate(80);

  for (var i = 0; i <= 8; i++)
  {
    var x = random( 1700 / 2 - 200, 1700 / 2 + 300);
    var y = random( -10, 100);
    var stone = new createStone(x, y, 100);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();

  jointPoint1.display();
  jointPoint2.display();
  jointPoint.display();

  for (var i = 0; i <=8; i++)
  {
    stones[i].display();
  }
}
