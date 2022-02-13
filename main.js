var blk;
var wht;
var gry;
var drkGry;
var orng;
var dat = [];
var dat2 = [];
var dat3 = [];

var menuButtonList =[];
var scene;
var rocketList =[];

function setup() {

	//initialize rockets
	for (var i = 0 ; i < 10 ; i ++){
	
		rocketList[i] = new rocket (random(0,1),random(0,1),random(0,1));
		
	}

	createCanvas(windowWidth, windowHeight);
	scene = a => mainMenu();

	wht = color('#fffcf2');
	gry = color('#ccc5b9');
	drkGry = color('#403d39')
	drkrGry = color('#302e2b');
	blk = color('#252422');
	orng = color('#eb5e28');
	textAlign(CENTER);
	
	for (var i = 0 ; i <= 30 ; i++){
		dat[i] = i*2 + random(0,5);
		dat2[i] = i+ random(0,5);;
		dat3[i] = i/2+ random(0,5);;
	}
	initializeButtons();

	
}

function draw() {

	scene();
	
}