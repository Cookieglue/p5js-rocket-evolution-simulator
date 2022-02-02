
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
					scene = this.result;
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

	var rocketList =[];
	for (var i = 0 ; i <= 10 ; i ++){
	
		rocketList[i] = new rocket (random(0,1),random(0,1),random(0,1));
		
	}

	menuButtonList[0] = new button(originX,originY , buttonWidth, buttonHeight, drkrGry, "Run Quick Simulation", a=> simulateFly( rocketList));

	menuButtonList[1] = new button(originX + buttonWidth +pad, originY,buttonWidth, buttonHeight, drkrGry, "Run Long Simulation");
	menuButtonList[2] = new button(originX, originY +buttonHeight +pad, buttonWidth, buttonHeight, drkrGry, "Print Data");
  	menuButtonList[3] = new button(originX + buttonWidth + pad, originY +buttonHeight +pad, buttonWidth, buttonHeight, drkrGry, "Print Data");

	
}