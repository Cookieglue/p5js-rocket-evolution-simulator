var fuelConst = 0.2;
var frictionConst =0.0001;
var gravity = 0.1;
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
		
		//propulsion
		if(rockets[i].fuel > 0){
			rockets[i].accel += fuelConst*rockets[i].exhaustStrength;
		}
		//friction = 1/2 * const * cross sectional area (tipStrength) * v^2
		rockets[i].accel-= 1/2* rockets[i].tipStrength*frictionConst *Math.pow(rockets[i].vel,2);
		rockets[i].accel-=gravity;
		rockets[i].vel+=rockets[i].accel/ rockets[i].tankStrength/10;
		
		if(rockets[i].pos >= 0){
			rockets[i].pos+=rockets[i].vel;
		}
		
		var spacing = width/(rockets.length+1);
		drawRocket(width/2 +  ((i+0.5)-rockets.length/2)*spacing, height/2 + top.pos-rockets[i].pos,rockets[i].tipStrength,rockets[i].tankStrength,rockets[i].exhaustStrength, width/(rockets.length*80 +spacing) / 2);
	}
	
	return rockets;
}