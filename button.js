let mouseIsReleased;

function button(x,y,w,h, col, txt, result){
	this.x =x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.col = col;
	this.txt = txt;
	this.result = result;
}

button.prototype.buttonLogic = function(){

		noStroke();
		fill(100);

		if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY <this.y+this.h) {

			this.hover = true

			if (mouseIsPressed){
				if (this.result != null){
					this.result();
				}else{
					print("Button has no result function!");
				}
			}
		}
		else{
			this.hover = false;
		}
}
button.prototype.drawButton = function(){

    fill(this.col);

    if (this.hover === true){
        stroke(orng);
    }
	rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 10);


    fill(wht);
	noStroke();
    textSize(this.w / this.txt.length*1.8);
    text(this.txt, this.x + this.w/2, this.y + this.h/2);

}

function initializeButtons(){
	
	var originX = pad*3 + width/2;
	var originY = pad*2 + height/2;
	var buttonWidth =  width/4 - pad*4;
	var buttonHeight = height/4 - pad*3;

	menuButtonList[0] = new button(originX,originY , buttonWidth, buttonHeight, drkrGry, "Run Quick Simulation", 
	a=>{
		for(var i = 0; i <rocketList.length ; i ++){
			rocketList[i].accel = 0;
			rocketList[i].vel = 0;
			rocketList[i].pos = 0;
			rocketList[i].fuel = rocketList[i].tankStrength;
		}
		setTimeout( a => scene = a=> drawOffspringMenu(rocketList), 4000);
		scene = a=> simulateFly( rocketList); });

	menuButtonList[1] = new button(originX + buttonWidth +pad, originY,buttonWidth, buttonHeight, drkrGry, "Run Long Simulation", 
	a=>{scene = a=>drawOffspringMenu(rocketList)});

	menuButtonList[2] = new button(originX, originY +buttonHeight +pad, buttonWidth, buttonHeight, drkrGry, "Print Data");

  	menuButtonList[3] = new button(originX + buttonWidth + pad, originY +buttonHeight +pad, buttonWidth, buttonHeight, drkrGry, "Print Data");

	menuButtonList[4]= new button(width/8,height*0.75,width/3,height*0.2,drkrGry, "Trial the Rockets", 
	a=> {scene = a=> evolve(rocketList,0.1);});
	menuButtonList[5]= new button(width*2/3-width/8,height*0.75,width/3,height*0.2,drkrGry, "Return To Menu", 
	a=> {scene = a=> mainMenu();});

	
}