"use strict";

document.addEventListener("DOMContentLoaded", init);

let x = 125;
let y = 125;
let size = 10;
let LEFT, RIGHT, UP, DOWN;

function init(){
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");	
	document.addEventListener("keydown", keyDownBall);
	document.addEventListener("keyup", keyUpBall);

	class Ball {
		constructor(x, y, r){
			this.x = x;
			this.y = y;
			this.r = r;
		}
	
		drawBalls(strokeColor, fillColor){
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.strokeStyle = strokeColor;
			ctx.stroke();
			ctx.fillStyle = fillColor;
			ctx.fill();
		}
	
	}
	
	let Ball1 = new Ball(x, y, size);
	mainLoop(ctx, Ball1, canvas);
}

function mainLoop(ctx, Ball1, canvas){
	canvas.style.backgroundColor = `rgb(${Math.floor(Ball1.x)}, ${Math.floor(Ball1.y)}, ${Math.floor(Ball1.x)}`;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	Ball1.drawBalls("black", "red");
	moveBall(Ball1, canvas);
	setInterval(() => mainLoop(ctx, Ball1, canvas), 100);
}

