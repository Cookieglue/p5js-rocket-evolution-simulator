
function drawTip(y,strength){
	fill(255, 175, 204);
	fill(orng);
	quad(-strength*40, y-40, strength*40, y-40, 
		40, y, - 40, y);
}
function drawTank(strength){
	fill(255, 200, 221);
	fill(gry)
	rectMode(CENTER);
	rect(0,0,80, 200 *strength);
	fill(wht);
	rect(0,0,40, constrain(100*strength, 0, 80),5);
}

function drawExhaust(y, strength){
	fill(255, 175, 204);
	fill(drkGry);
	quad(-40, y, 40, y , 
			 strength*60, y+40, - strength*60, y+40);

}

function drawRocket(x,y,nossleTip, tankStrength, exhaustStrength, size){
	
	push();
	scale(size);
	translate(x*1/size,y*1/size);
	stroke(drkGry);
	strokeWeight(1);
	drawTip(-100*tankStrength,nossleTip);
	drawTank(tankStrength);
	drawExhaust(100*tankStrength, exhaustStrength);
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
	for (var i = 1 ; i <=256 ; i++) {
	
		stroke(60);
		line(0,height - i*height/10, width, height - i*height/10);
		text(i-1, 50, height - i*height/10);
		
	}
	//ground
	fill(92, 247, 125);
	rect(0, height/2,width,height);
	pop();
}