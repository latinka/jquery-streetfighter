$(document).ready(function() {
	doIntro();
	$('.ryu')
	.mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	// When the mouse is pressed,
	// Ryu gets in throwing position
	// Play hadouken sound
	// animate hadouken to the right of screen
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-hadouken').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			700,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-hadouken').hide();
		$('.ryu-ready').show();
	});
$(document).keydown(function(e) {
		if (e.keyCode == 88) {
		playCool();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
    	}
  	})
	.keyup(function(e) {
		if (e.keyCode ==88) {
		$('#cool')[0].pause();
		$('#cool')[0].load();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		}
	});
	
	
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function playCool () {
	if (cool) {
		$('#theme')[0].pause();
	$('#cool')[0].volume = 0.5;
	$('#cool')[0].play();
	}
}
function doIntro() {
	$('#theme')[0].volume = 0.3;
	$('#theme')[0].play();
	$('.logo').fadeIn(2500, function() {
		$(this).fadeOut(1000, function() {
			$('.courtesy').fadeIn(1500, function() {
				$(this).fadeOut(1500, function() {
					$('.jquery-logo').fadeIn(1500, function() {
						$(this).fadeOut(1500, function() {
							$('.gameplay').fadeIn(1500);
						});
					});
				});
			});
		});
	});
}