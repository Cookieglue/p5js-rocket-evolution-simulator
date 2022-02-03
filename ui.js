var pad = 10;
function mainMenu(){
	
	//setup
	background(blk);
	fill(drkGry);
	noStroke();
	
	//overall analytics panel
	rect(pad,pad,width/2 -pad*2 ,height/2 -pad*2,10);
	//control panel
	rect(pad ,pad +height/2 ,width/2 -pad*2 ,height/2 -pad*3,10);
	//recent stats
	rect(pad + width/2 ,pad, width/2 -pad*2 ,height -pad*3,10);
	
	//graphs
	performanceGraph(dat, dat2, dat3);

	//buttons
	for (var i = 0 ; i < menuButtonList.length ; i ++){
		menuButtonList[i].buttonLogic();
		menuButtonList[i].drawButton();
	}
}

function blankPage(words){
	background(255);
	fill(0);
	text(words + millis(), 200,200);
}

function performanceGraph (top, med, bot){
	
	var length = (width/2 - pad * 4 -pad*5)/top.length
	var graphHeight = (height/2 - pad * 8) / top[top.length-1];
	
	stroke(255);
	strokeWeight(2);
	
	//x axis
	line(pad*4,height/2 -pad*4,width/2 -pad*4 ,height/2 -pad*4);
	//y axis
	line(pad*4,pad*4,pad*4 ,height/2 -pad*4);
	
	//top
	stroke(0,255,0);
	for (var i = 0; i < top.length ; i++){
		strokeWeight(6);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i]);
		strokeWeight(2);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i-1]);
	}
	//med
	stroke(255);
	for (var i = 0; i < med.length ; i++){
		strokeWeight(6);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i]);
		strokeWeight(2);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i-1]);
	}
	//bot
	stroke(255,0,0);
	for (var i = 0; i < bot.length ; i++){
		strokeWeight(6);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i]);
		strokeWeight(2);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i-1]);
	}
	noStroke();
}

function drawOffspringMenu(rockets){
	//setup
	background(blk);
	noStroke();
	fill(drkGry);
	rect(width/2 - width/4, pad, width/2, height/8,10);
	textSize(width/48);
	textAlign(CENTER);
	fill(wht);
	text("Rocket Results!", width/2, pad + height/16);

	quickSort(rockets,0,rockets.length-1);

	for (var i = 0 ; i < rockets.length; i++){
		var spacing = width/(rockets.length+1);

		drawRocket(spacing + i *spacing, 200,rockets[i].tipStrength,rockets[i].tankStrength,rockets[i].exhaustStrength,1);
		fill(wht);
		textSize(20);
		text(round(rockets[i].pos),150 + i *spacing, 800);
	}

}