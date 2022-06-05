const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var angulo

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angulos = 270


  var opcao ={
    isStatic : true
  }

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(100, windowHeight-300, 600, 180, opcao)
  World.add(world, playerBase)

  //criar corpo do jogador
  player = Bodies.rectangle(playerBase.position.x + 220, playerBase.position.y - 540, 180, 600, opcao)
  World.add(world, playerBase)

  playerArcher = new mao(windowWidth/3 - 40 , windowHeight/2-140, 160, 240, angulos)
  angulos = 0

}

function draw() {
  background(backgroundImg);
  keyPressed()

  playerArcher.mostrar()
  image(baseimage, playerBase.position.x, playerBase.position.y, 600, 180)
  image(playerimage, player.position.x, player.position.y, 180, 600)
  
  


  //exibir a imagem do jogador usando a função image()


  //exibir a imagem da base do jogador usando a função image()
  
  

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}





function keyPressed() {
    if (keyCode === UP_ARROW) {
      angulos = angulos -30
      } else if (keyCode === DOWN_ARROW) {
        angulos = angulos +30
      }
  }