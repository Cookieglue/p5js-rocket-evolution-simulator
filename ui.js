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
	performanceGraph(goodRocketDemographics, meanRocketDemographics, poorRocketDemographics);

	//buttons
	for (var i = 0 ; i <= 3 ; i ++){
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
	rectMode(CENTER);
	noStroke();
	fill(drkGry);
	//title box
	rect(width/2, pad +height/16, width/2, height/8,10);
	//rocket box
	fill(77, 72, 69);
	rect(width/2,height*0.45, width*0.95, height/2,10);
	textSize(width/48);
	textAlign(CENTER);
	fill(wht);
	text("Rocket Results!", width/2, pad + height/16);

	//draw rockets
	for (var i = 0 ; i < rockets.length; i++){
		var spacing = width/(rockets.length+1);

		drawRocket(width/2 +  ((i+0.5)-rockets.length/2)*spacing, height*0.4,rockets[i].tipStrength,rockets[i].tankStrength,rockets[i].exhaustStrength, width/(rockets.length*80 +spacing) / 2);
		fill(wht);
		textSize(20);
		text(round(rockets[i].pos),width/2 + ((i+0.5)-rockets.length/2) *spacing, height*0.6);
	}
	//buttons
	for (var i = 4 ; i <= 5 ; i ++){
		menuButtonList[i].buttonLogic();
		menuButtonList[i].drawButton();
	}

}