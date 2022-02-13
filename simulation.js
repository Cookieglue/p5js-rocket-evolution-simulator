var fuelConst = 0.5;
var frictionConst =0.001;
var gravity = -0.1;
var showResults;

function rocket (tipStrength, tankStrength, exhaustStrength)
{
	this.tipStrength = tipStrength;
	this.tankStrength = tankStrength;
	this.exhaustStrength = exhaustStrength;
	
	this.accel = 0;
	this.vel = 0;
	this.pos = 0;
	this.fuel = tankStrength;
	
	
}

function simulateFly(rockets){

	var top = getMaxPosition(rockets);

	drawFlyBackground(top);

	for (var i = 0 ; i < rockets.length; i++){
		var positions = rockets[i].pos;

		rockets[i].fuel-= 0.01*rockets[i].exhaustStrength;
		
		if(rockets[i].fuel > 0){
			rockets[i].accel += fuelConst*rockets[i].exhaustStrength / rockets[i].tankStrength;
		}
		rockets[i].accel-= rockets[i].tipStrength*rockets[i].vel*frictionConst;
		rockets[i].accel+=gravity;
		rockets[i].vel+=rockets[i].accel;
		
		if(-rockets[i].pos +400 > height-height/10){
			
		}
		else{
			rockets[i].pos+=rockets[i].accel;
		}
		drawRocket(10 + i *100, height/2 + top.pos-rockets[i].pos,rockets[i].tipStrength,rockets[i].tankStrength,rockets[i].exhaustStrength,1);
		
	}
	setTimeout( a => {showResults = true; }, 4000);
	print(showResults);
	if (showResults){
		scene = a=>drawOffspringMenu(rocketList);
		showResults = false;
	}
	
	return rockets;
}