
function drawTip(x,y, strength){
	fill(255, 175, 204);
	noStroke();
	quad(x-40 + strength*40, y, x + 40 - strength*40, y , 
			 x+40, y+40, x - 40, y+40);
}
function drawTank(x,y, strength){
	fill(255, 200, 221);
	noStroke();
	rect(x,y,80, 200 *strength);
}

function drawExhaust(x,y, strength){
	fill(255, 175, 204);
	noStroke();
	quad(x-40, y, x + 40, y , 
			 x + strength*60, y+40, x - strength*60, y+40);

}

function drawRocket(x,y,nossleTip, tankStrength, exhaustStrength, size){
	
	push();
	scale(size);
	drawTip(x,y,nossleTip);
	drawTank(x-40,y+40,tankStrength);
	drawExhaust(x,y+40 + 200*tankStrength, exhaustStrength);
	pop();

}

function drawFlyBackground(rocket){

	background(20);
	stroke(255);
	strokeWeight(3);
	push();
	translate(0,rocket.pos);
	background(0,0,0);
	//gradient sky
	for (var i = 0 ; i <=50 ; i++) {
	
		fill(77, 187, 255, 255/i);
		noStroke();
		rect(0,height - i*height/10,width, i*height/10);
		
	}
	//counter lines
	for (var i = 1 ; i <=100 ; i++) {
	
		stroke(60);
		line(0,height - i*height/10, width, height - i*height/10);
		text(i-1, 20, height - i*height/10);
		
	}
	fill(92, 247, 125);
	rect(0, height-height/10,width,height);
	pop();
}