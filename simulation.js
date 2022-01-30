var fuelConst = 0.5;
var frictionConst =0.001;
var gravity = -0.1;

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

function simulateFly(rocket){
	
	rocket.fuel-= 0.01*rocket.exhaustStrength;
	
	if(rocket.fuel > 0){
		rocket.accel += fuelConst*rocket.exhaustStrength / rocket.tankStrength;
	}
	rocket.accel-= rocket.tipStrength*rocket.vel*frictionConst;
	rocket.accel+=gravity;
	rocket.vel+=rocket.accel;
	
	if(-rocket.pos +400 > height-height/10){
		
	}
	else{
		rocket.pos+=rocket.accel;
	}

	drawFlyBackground(rocket);
	drawRocket(width,height,rocket.tipStrength,rocket.tankStrength,rocket.exhaustStrength,0.50);
	
}