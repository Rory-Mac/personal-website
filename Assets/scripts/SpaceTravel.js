window.requestAnimationFrame = window.requestAnimationFrame || (function(callback, element) {setTimeout(callback, 1000 / 60);} );

function timeStamp(){
	if (window.performance.now) {
		return window.performance.now();
	}
	return Date.now();
}

class Star {
	constructor() {
		this.x = (Math.random() - 0.5) * 1000;
		this.y = (Math.random() - 0.5) * 1000;
		this.z = Math.random() * 1000;
		this.size = 2.0;
	}
}

class SpaceTravel {
	constructor() {
		this.SPEED = 0.8;
		this.STAR_COUNT = 10000;
		this.STAR_SIZE = 2;
		this.stars = [];
		for (var i = 0; i < this.STAR_COUNT; i++) {
			this.stars.push(new Star());
		}
		this.previousTimeStamp = timeStamp();
		this.draw();
	}

	draw() {
		this.move();
		var canvas = document.getElementById('spaceCanvas');
		canvas.width = (canvas.clientWidth);
		canvas.height = (canvas.clientHeight);
		this.size = Math.min(canvas.clientHeight, canvas.clientWidth) * (this.STAR_SIZE / 10);
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "black"
		ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
		ctx.fillStyle = "white";
		for (var i = 0; i < this.stars.length; i++) {
			var s = this.stars[i];
			var size = s.size * this.size / s.z;
			ctx.globalAlpha = (1000 - s.z) / 1000;;
			ctx.strokeStyle = ctx.fillStyle;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(canvas.clientWidth * (s.x / s.z + 0.5) - size / 2, canvas.clientHeight * (s.y / s.z + 0.5) - size / 2, size / 2, 0, 2 * Math.PI);
			ctx.fill();
		}
		this.drawRequest = requestAnimationFrame(this.draw.bind(this));
	}

	move() {
		var currentTimeStamp = timeStamp();
		var speed = this.SPEED * (currentTimeStamp - this.previousTimeStamp) * (60 / 1000);;
		for (var i = 0; i < this.stars.length; i++) {
			var s = this.stars[i];
			s.z -= speed;
			if (s.z < 1) {
				this.stars[i] = new Star();
			}
		}
		this.previousTimeStamp = currentTimeStamp;
	}
}