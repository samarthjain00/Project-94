var canvas = new fabric.Canvas('myCanvas');
ball_y = 0;
ball_x = 0;
holl_y = 400;
holl_x = 800;
block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHieght(50);
		hole_obj.set({
			top: holl_y,
			left: holl_x,
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHieght(50);
		ball_obj.set({
			top: ball_y,
			left: ball_x,
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==holl_x)&&(ball_y==holl_y))
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
		function down()
		{
			if(ball_y<=450)
			{
				ball_y = ball_y + block_image_height;
				console.log("block image height =" + block_image_height);
				console.log("When Down arrow key is pressed, X = "+ ", Y ="+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
		}	
	
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		// Write a code to move ball upward.
	}

	function down() {
		// Write a code to move ball downward.
	}

	function left() {
		if (ball_x > 5) {
			// Write a code to move ball left side.
		}
	}

	function right() {
		if (ball_x <= 1050) {
			// Write a code to move ball right side.
		}
	}

}

