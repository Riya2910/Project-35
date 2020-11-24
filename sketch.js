//Create variables here
var dog, happydog, database, foodS, foodStock
var dog1,dog2

function preload(){
dog1 = loadImage("images/Dog.png")
dog2 = loadImage("images/happy dog.png")
}

function setup() {
  database = firebase.database()
    createCanvas(500, 500);

  dog=createSprite(200,200,20,20)
  dog.addImage("dog1",dog1)
  dog.scale=0.15

foodsStock=database.ref('Food')
foodStock.on("value",readStock)
textSize(20)
}


function draw() {
  background(46,139,87)  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dog2)
  }


  drawSprites();
  fill(255,255,254)
  stroke("black")
  text("Food remaining :"+foodS,170,200)
  textSize(13)
  text("note: Press  UP_ARROW Key To Feed Drago Milk!",130,10,300,20)

  

}
function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/'.update({
    Food:x
  }))
}



