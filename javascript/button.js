function button(x,y,w,h, col, txt){
	this.x =x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.col = col;
	this.txt = txt;
	
}

button.prototype.buttonLogic = function(){
		noStroke();
		fill(100);

		if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY <this.y+this.h) {

			this.hover = true

			if (mouseIsPressed){
				this.result = true;
			}
		}
		else{
			this.result = false;
			this.hover = false;
		}
}
button.prototype.drawButton = function(){

    fill(this.col);

    if (this.hover === true){
        stroke(orng);
    }

    rect(this.x, this.y, this.w, this.h, 10);


    fill(255);
    text(this.txt, this.x, this.y);

}

function initializeButtons(){
	
	button[0] = new button(pad*2 + windowWidth/2, pad*2 + windowHeight/2 , windowWidth/4 - pad, (windowHeight -pad*3)/4, drkrGry, "uwu");
	button[1] = new button();
	button[2] = new button();

	
}