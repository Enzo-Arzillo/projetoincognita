var impdimp
var impdimpimagem
var plantinha
function preload(){
impdimpimagem = loadImage("o protagonista(1).png")
plantinha = loadImage("moita.png")
}


function setup() {
  createCanvas(1000,700);
  impdimp.mousePressed(destruirimpdimp)
}

function draw() 
{
  background(30);
  criarimpdimp()

image(plantinha, 10, 10, 200, 200)
image(plantinha, 10, 210, 200, 200)
image(plantinha, 10, 410, 200, 200)
image(plantinha, 210, 10, 200, 200)
image(plantinha, 210, 210, 200, 200)
image(plantinha, 210, 410, 200, 200)
image(plantinha, 410, 10, 200, 200)
image(plantinha, 410, 210, 200, 200)
image(plantinha, 410, 410, 200, 200)
drawSprites()
}
function criarimpdimp(){
  if (frameCount % 30 ===0) {
  var x = [100, 300, 500]
  var y = [82, 282, 482]
  var poX = random(x)
  var poY = random(y)
impdimp = createSprite(poX, poY)
impdimp.addImage(impdimpimagem)
impdimp.lifetime = 30
}
}
function destruirimpdimp(){
  impdimp.destroy()
}


