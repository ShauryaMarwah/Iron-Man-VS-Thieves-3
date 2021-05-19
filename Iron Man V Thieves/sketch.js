
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "Start"

	function preload()
	{
	intimg = loadImage ("IntoImage.jpg")
	imimg = loadImage ("FlyingImage.jpg")
	bankimg = loadImage ("Bank.png")
	thiefimg = loadImage("Thief.jpg")
	}
	
	function setup() {
		createCanvas(800, 700);
		edges = createEdgeSprites();
		rectMode(CENTER);
		intro = createSprite(400, 350, 200, 200);
		intro.addImage(intimg);
		intro.scale = 0.5
		ironman = createSprite(20,25, 20,20)
	    ironman.shapeColor = "red"
	    ironman.addImage(imimg)
	    ironman.scale = 0.15
		cover = createSprite(20,25,60,60);
		cover.shapeColor = "black"
		//ironman.visible = false
		//Engine.run(engine);
		theif1 = createSprite(260,300,10,10);
		theif1.addImage(thiefimg)
		theif1.scale = 0.1
		theif1.velocityX = random(-3,3)
		theif1.velocityY = random(-3,3)

		theif2 = createSprite(280,300,10,10);
		theif2.addImage(thiefimg)
		theif2.scale = 0.1
		theif2.velocityX = random(-3,3)
		theif2.velocityY = random(-3,3)

		theif3 = createSprite(300,300,10,10);
		theif3.addImage(thiefimg)
		theif3.scale = 0.1
		theif3.velocityX = random(-3,3)
		theif3.velocityY = random(-3,3)

		theif4 = createSprite(320,300,10,10);
		theif4.addImage(thiefimg)
		theif4.scale = 0.1
		theif4.velocityX = random(-3,3)
		theif4.velocityY = random(-3,3)

		if(gameState === "Start") {
            theif1.visible = false
            theif2.visible = false
            theif3.visible = false
            theif4.visible = false
        }
		thiefGroup = createGroup();
		thiefGroup.add(theif1)
		thiefGroup.add(theif2)
		thiefGroup.add(theif3)
		thiefGroup.add(theif4)
		if(thiefGroup.isTouching(ironman)) {
			ironman.x = 20
			ironman.y = 25
		}
		wallGroup = new Group();
	}


	function draw() {
	rectMode(CENTER);
	background(0);
	if(gameState==="Play") {
	//background(255);
	cover.destroy();
	theif1.visible = true
	theif2.visible = true
	theif3.visible = true
	theif4.visible = true
	var c1 = createSprite(150,0,4,200);
	c1.shapeColor = "grey"
	var c2 = createSprite(0,150,300,4);
	c2.shapeColor = "grey"
	var c3 = createSprite(200,100,100,4);
	c3.shapeColor = "grey"
	var c4 = createSprite(300,50,100,4);
	c4.shapeColor = "grey"
	var c5 = createSprite(350,150,4,200);
	c5.shapeColor = "grey"
	var c6 = createSprite(700,175,200,4);
	c6.shapeColor = "grey"
	var c7 = createSprite(400,175,100,4);
	c7.shapeColor = "grey"
	var c8 = createSprite(500,100,300,4);
	c8.shapeColor = "grey"
	var c9 = createSprite(500,250,300,4);
	c9.shapeColor = "grey"
	var c10 = createSprite(400,350,100,4);
	c10.shapeColor = "grey"
	var c11 = createSprite(350,300,4,100);
	c11.shapeColor = "grey"
	var c12 = createSprite(200,350,300,4);
	c12.shapeColor = "grey"
	var c13 = createSprite(50,350,4,200);
	c13.shapeColor = "grey"
	var c14 = createSprite(50,600,4,400);
	c14.shapeColor = "grey"
	var c15 = createSprite(100,300,100,4);
	c15.shapeColor = "grey"
	var c16 = createSprite(150,250,4,200);
	c16.shapeColor = "grey"
	var c17 = createSprite(200,250,4,200);
	c17.shapeColor = "grey"
	var c18 = createSprite(200,200,100,4);
	c18.shapeColor = "grey"
	var c19 = createSprite(150,450,4,200);
	c19.shapeColor = "grey"
	var c20 = createSprite(450, 450, 4, 200);
	c20.shapeColor = "grey"
	var c21 = createSprite(300,650,4,200);
	c21.shapeColor = "grey"
	var c22 = createSprite(700,350,200,4);
    c22.shapeColor = "grey"
	var c23 = createSprite(600,650,4,200);
	c23.shapeColor = "grey"
	var bank = createSprite (95, 480,10,18)
	bank.addImage(bankimg);
	bank.scale = 0.15
	ironman.visble = true
	ironman.bounceOff(edges);
	ironman.bounceOff(c1);
	ironman.bounceOff(c2);
	ironman.bounceOff(c3);
	ironman.bounceOff(c4);
	ironman.bounceOff(c5);
	ironman.bounceOff(c6);
	ironman.bounceOff(c7);
	ironman.bounceOff(c8);
	ironman.bounceOff(c9);
	ironman.bounceOff(c10);
	ironman.bounceOff(c11);
	ironman.bounceOff(c12);
	ironman.bounceOff(c13);
	ironman.bounceOff(c14);
	ironman.bounceOff(c15);
	ironman.bounceOff(c16);
	ironman.bounceOff(c17);
	ironman.bounceOff(c18);
	ironman.bounceOff(c19);
	ironman.bounceOff(c20);
	ironman.bounceOff(c21);
	ironman.bounceOff(c22);
	ironman.bounceOff(c23);

	theif1.bounceOff(edges);
	theif1.bounceOff(c1);
	theif1.bounceOff(c2);
	theif1.bounceOff(c3);
	theif1.bounceOff(c4);
	theif1.bounceOff(c5);
	theif1.bounceOff(c6);
	theif1.bounceOff(c7);
	theif1.bounceOff(c8);
	theif1.bounceOff(c9);
	theif1.bounceOff(c10);
	theif1.bounceOff(c11);
	theif1.bounceOff(c12);
	theif1.bounceOff(c13);
	theif1.bounceOff(c14);
	theif1.bounceOff(c15);
	theif1.bounceOff(c16);
	theif1.bounceOff(c17);
	theif1.bounceOff(c18);
	theif1.bounceOff(c19);
	theif1.bounceOff(c20);
	theif1.bounceOff(c21);
	theif1.bounceOff(c22);
	theif1.bounceOff(c23);
	theif1.bounce(theif2)
	theif1.bounce(theif3)
	theif1.bounce(theif4)

	theif2.bounceOff(edges);
	theif2.bounceOff(c1);
	theif2.bounceOff(c2);
	theif2.bounceOff(c3);
	theif2.bounceOff(c4);
	theif2.bounceOff(c5);
	theif2.bounceOff(c6);
	theif2.bounceOff(c7);
	theif2.bounceOff(c8);
	theif2.bounceOff(c9);
	theif2.bounceOff(c10);
	theif2.bounceOff(c11);
	theif2.bounceOff(c12);
	theif2.bounceOff(c13);
	theif2.bounceOff(c14);
	theif2.bounceOff(c15);
	theif2.bounceOff(c16);
	theif2.bounceOff(c17);
	theif2.bounceOff(c18);
	theif2.bounceOff(c19);
	theif2.bounceOff(c20);
	theif2.bounceOff(c21);
	theif2.bounceOff(c22);
	theif2.bounceOff(c23);
	theif2.bounce(theif1)
	theif2.bounce(theif3)
	theif2.bounce(theif4)

	theif3.bounceOff(edges);
	theif3.bounceOff(c1);
	theif3.bounceOff(c2);
	theif3.bounceOff(c3);
	theif3.bounceOff(c4);
	theif3.bounceOff(c5);
	theif3.bounceOff(c6);
	theif3.bounceOff(c7);
	theif3.bounceOff(c8);
	theif3.bounceOff(c9);
	theif3.bounceOff(c10);
	theif3.bounceOff(c11);
	theif3.bounceOff(c12);
	theif3.bounceOff(c13);
	theif3.bounceOff(c14);
	theif3.bounceOff(c15);
	theif3.bounceOff(c16);
	theif3.bounceOff(c17);
	theif3.bounceOff(c18);
	theif3.bounceOff(c19);
	theif3.bounceOff(c20);
	theif3.bounceOff(c21);
	theif3.bounceOff(c22);
	theif3.bounceOff(c23);
	theif3.bounce(theif4)

	theif4.bounceOff(edges);
	theif4.bounceOff(c1);
	theif4.bounceOff(c2);
	theif4.bounceOff(c3);
	theif4.bounceOff(c4);
	theif4.bounceOff(c5);
	theif4.bounceOff(c6);
	theif4.bounceOff(c7);
	theif4.bounceOff(c8);
	theif4.bounceOff(c9);
	theif4.bounceOff(c10);
	theif4.bounceOff(c11);
	theif4.bounceOff(c12);
	theif4.bounceOff(c13);
	theif4.bounceOff(c14);
	theif4.bounceOff(c15);
	theif4.bounceOff(c16);
	theif4.bounceOff(c17);
	theif4.bounceOff(c18);
	theif4.bounceOff(c19);
	theif4.bounceOff(c20);
	theif4.bounceOff(c21);
	theif4.bounceOff(c22);
	theif4.bounceOff(c23);

	if (keyDown(UP_ARROW)) {
	ironman.y = ironman.y - 15;
  }
  if (keyDown(DOWN_ARROW)) {
	ironman.y = ironman.y + 15;
  }
  if (keyDown(RIGHT_ARROW)) {
	ironman.x = ironman.x + 15;
  }
  if (keyDown(LEFT_ARROW)) {
	ironman.x = ironman.x - 15;
	//ironmanimg.loadImage("FlyingImage2.jpeg")
	//ironman.addImage(ironmanimg)
  }
  if(ironman.isTouching(theif1)) {
    ironman.x = 20
    ironman.y = 25
      }
  if(ironman.isTouching(theif2)) {
	ironman.x = 20
	ironman.y = 25
	  }
  if(ironman.isTouching(theif3)) {
	ironman.x = 20
	ironman.y = 25
	  }
	if(ironman.isTouching(theif4)) {
	ironman.x = 20
	ironman.y = 25
	  }
	  if(ironman.isTouching(bank) && gameState==="Play") {
		textSize (20)
		fill("white")
		text ("You Won",40,50)
		gameState = "Fight"
		c1.visible = false
		c2.visible = false
		c3.visible = false
		c4.visible = false
		c5.visible = false
		c6.visible = false
		c7.visible = false
		c8.visible = false
		c9.visible = false
		c10.visible = false
		c11.visible = false
		c12.visible = false
		c13.visible = false
		c14.visible = false
		c15.visible = false
		c16.visible = false
		c17.visible = false
		c18.visible = false
		c19.visible = false
		c20.visible = false
		c21.visible = false
		c22.visible = false
		c23.visible = false
	  }
	  if(gameState==="Fight") {
		theif1.velocityX = 0
		theif1.velocityY = 0
		theif1.x = 95
		theif1.y = 480
		theif2.velocityX = 0
		theif2.velocityY = 0
		theif2.x = 95
		theif2.y = 480
		theif3.velocityX = 0
		theif3.velocityY = 0
		theif3.x = 95
		theif3.y = 480
		theif4.velocityX = 0
		theif4.velocityY = 0
		theif4.x = 95
		theif4.y = 480
		wallGroup.add(c1)
		wallGroup.add(c2)
		wallGroup.add(c3)
		wallGroup.add(c4)
		wallGroup.add(c5)
		wallGroup.add(c6)
		wallGroup.add(c7)
		wallGroup.add(c8)
		wallGroup.add(c9)
		wallGroup.add(c10)
		wallGroup.add(c11)
		wallGroup.add(c12)
		wallGroup.add(c13)
		wallGroup.add(c14)
		wallGroup.add(c15)
		wallGroup.add(c16)
		wallGroup.add(c17)
		wallGroup.add(c18)
		wallGroup.add(c19)
		wallGroup.add(c20)
		wallGroup.add(c21)
		wallGroup.add(c22)
		wallGroup.add(c23)
		bank.destroy();

	  }
	}
	drawSprites();
	if(gameState==="Start") {
	fill(212)
	textSize(20)
	text("Iron Man VS Thieves", 310, 400)
	text("Press Space to Start", 310, 450)
	}
	if (keyCode===32 && gameState==="Start") {
		intro.destroy();
		background(0)
		gameState = "Play"
	}
	}



