"use strict";

function keyUpBall(e){
	if (e.keyCode === 37){
		LEFT = false;
	}

	if (e.keyCode === 38){
		UP = false;
	}

	if (e.keyCode === 39){
		RIGHT = false;
	}

	if (e.keyCode === 40){
		DOWN = false;
	}
}

function keyDownBall(e){
	if (e.keyCode === 37){
		LEFT = true;
	}

	if (e.keyCode === 38){
		UP = true;
	}

	if (e.keyCode === 39){
		RIGHT = true;
	}

	if (e.keyCode === 40){
		DOWN = true;
	}
} 

function moveBall(Ball1, canvas){
	checkPosBall(Ball1, canvas);
	displayCoordinates(Ball1);
	if (LEFT){
		Ball1.x -= 0.03;
	}

	if (UP){
		Ball1.y -= 0.03;
	}

	if (RIGHT){
		Ball1.x += 0.03;
	}

	if (DOWN){
		Ball1.y += 0.03;
	}
} 

function checkPosBall(Ball1, canvas){
	if (Ball1.x + Ball1.r > canvas.width) RIGHT = false;
	if (Ball1.y + Ball1.r > canvas.height) DOWN = false;
	if (Ball1.y - Ball1.r <= 0) UP = false;
	if (Ball1.x - Ball1.r <= 0) LEFT = false;
}

function displayCoordinates(Ball1){
	const p = document.querySelector("p");
	p.innerHTML = "";
	const xPos = Math.floor(Ball1.x);
	const yPos = Math.ceil(Ball1.y);
	const html = `X: ${xPos} Y: ${yPos}`;
	p.insertAdjacentHTML("beforeend", html);
}