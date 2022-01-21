
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
	for (var i = 0 ; i <=50 ; i++) {
	
		fill(158, 185, 247,i*10);
		noStroke();
		rect(0,-i*100+800,windowWidth,i*100);
		
	}
	for (var i = 0 ; i <=100 ; i++) {
	
		stroke(20);
		line(0,-i*100+windowHeight, windowWidth, -i*100+windowHeight);
		text(i, 20, -i*100 +windowHeight -10);
		
	}
	fill(92, 247, 125);
	rect(0, windowHeight-100,windowWidth,windowHeight);
	pop();
}