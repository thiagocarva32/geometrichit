/* Thiago Carvalho Duarte - Turma 2B (Líder)
   Munir Oliveira Aby Faraj - Turma 2B
   Etapa 03*/
let value = 0;
let cor = 0
var x=400 
var y=300;
function setup() {
  createCanvas(x,y);
  background(150,200,300)
fill('yellow')
  rect(160, -50, 55, 55)
  ellipse(188, -40, 90, 90)
  ellipse(188, -40, 100, 50)
  ellipse(188, -60, 100, 140)
 rect(160, 0, 55, 65)
  ellipse(188, 70, 60, 50)  
  rect(250, 20, 120, 40)
  rect(48,10,55,55)
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
}
  
function draw() {
  fill(value);
 rect(135,275, 120, 10)
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 210;
  } else if (keyCode === RIGHT_ARROW) {
    value = 70;
  } else if (keyCode === UP_ARROW){
    value = 150
} else if (keyCode === DOWN_ARROW){
  value = 400
}}
