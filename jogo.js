/* Thiago Carvalho Duarte - Turma 2B (Líder) (Professor, não  consegui fazer uma versão final e funcional do game, desculpa, mas por falta de procura mesmo, porque o senhor sempre se dispôs, abraço!)
Munir Aby Faraj - Turma 2B*/ 

x=135
var figura
var vida
var img;
var colisao
var tiro
let map [ 
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
 ];
function preload() {
  img = loadImage('https://raw.githubusercontent.com/ect-info/lop/master/Sprites/Personagens/Naves/200%20sprites%20de%20naves/ship_117.png');
}
function setup() {
  createCanvas(400,300);
   background(150,200,300) 

fill('yellow')
 

  rect(0,0,25,25)
  rect(0,25,25,25)
  rect(0,50,25,25)
  rect(0,75,25,25)
  rect(0,100,25,25)
  rect(0,125,25,25)
  rect(0,150,25,25)
  rect(0,175,25,25)
  rect(0,200,25,25)
  rect(0,225,25,25)
  rect(0,250,25,25)
  rect(0,275,25,25)
  rect(375,0,25,25)
  rect(375,25,25,25)
  rect(375,50,25,25)
  rect(375,75,25,25)
  rect(375,100,25,25)
  rect(375,125,25,25)
  rect(375,150,25,25)
  rect(375,175,25,25)
  rect(375,200,25,25)
  rect(375,225,25,25)
  rect(375,250,25,25)
  rect(375,275,25,25)
  fill('black') 
  text("Figura: " + figura, 270, 30);
  text("Vidas: " + vida, 55, 30);
}
  
function draw() {
 fill ('yellow')
  rect(x,275, 120, 10)
  if ( keyIsDown(LEFT_ARROW)) {
    x= x -3
  }else if( keyIsDown(RIGHT_ARROW)){
     x= x + 3
}
 image(img,90,-60)
}		
