var blk;
var wht;
var gry;
var drkGry;
var orng;
var dat = [];
var dat2 = [];
var dat3 = [];
var a =[];
var buttonList =[];
var scene;

function setup() {
	createCanvas(windowWidth, windowHeight);
	scene = a => mainMenu();

	wht = color('#fffcf2');
	gry = color('#ccc5b9');
	drkGry = color('#403d39')
	drkrGry = color('#302e2b');
	blk = color('#252422');
	orng = color('#eb5e28');
	textAlign(CENTER);
	
	for (var i = 0 ; i <= 10 ; i ++){
	
		a[i] = new rocket (random(0,1),random(0,1),random(0,1));
		
	}
	for (var i = 0 ; i <= 30 ; i++){
		dat[i] = i*2 + random(0,5);
		dat2[i] = i+ random(0,5);;
		dat3[i] = i/2+ random(0,5);;
	}
	initializeButtons();
	
}

function draw() {
	//drawFlyBackground(a[0]);
	//simulateFly(a[0]);
	scene();
	for (var i = 0 ; i < buttonList.length ; i ++){
		buttonList[i].buttonLogic();
		buttonList[i].drawButton();
	}
}