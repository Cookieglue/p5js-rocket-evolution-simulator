var pad = 10;
function mainMenu(){
	
	background(blk);
	fill(drkGry);
	noStroke();
	
	//overall analytics
	rect(pad,pad,width/2 -pad*2 ,height/2 -pad*2,10);
	//control panel
	rect(pad ,pad +height/2 ,width/2 -pad*2 ,height/2 -pad*3,10);
	//recent stats
	rect(pad + width/2 ,pad, width/2 -pad*2 ,height -pad*3,10);
	
	performanceGraph(dat, dat2, dat3);
}

function performanceGraph (top, med, bot){
	
	var length = (width/2 - pad * 4 )/top.length
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
		strokeWeight(8);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i]);
		strokeWeight(1);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*top[i-1]);
	}
	//med
	stroke(255);
	for (var i = 0; i < med.length ; i++){
		strokeWeight(8);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i]);
		strokeWeight(1);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*med[i-1]);
	}
	//bot
	stroke(255,0,0);
	for (var i = 0; i < bot.length ; i++){
		strokeWeight(8);
		point(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i]);
		strokeWeight(1);
		line(length*i + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i],
				length*(i-1) + pad*5, (height/2 - pad * 4 ) - graphHeight*bot[i-1]);
	}
	noStroke();
}