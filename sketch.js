var canvas;
var music;
var surface1
var surface2
var surface3
var surface4

var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,550,150,20);
    surface1.shapeColor("red");
    surface2 = createSprite(300,550,150,20);
    surface2.shapeColor("green");
    surface3 = createSprite(500,550,150,20);
    surface3.shapeColor("yellow");
    surface4 = createSprite(700,550,150,20);
    surface4.shapeColor("blue");

    //create box sprite and give velocity
    box = createSprite(random(20,750))
    box.shapeColor
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    drawSprites();


    //add condition to check if box touching surface and make it box

}
