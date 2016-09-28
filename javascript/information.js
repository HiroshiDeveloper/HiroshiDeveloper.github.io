$(document).ready(function(){
    var options = {
		animateThreshold: 100,
		scrollPollInterval: 20
	}
	$('.aniview').AniView(options);
});

var timer = false;
var windowWidth = $(window).width();
$(window).resize(function(){
	var ww = $(window).width();
    if(windowWidth != ww) {
    	if (timer != false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			location.href = location.href;
		}, 200);  
        windowWidth = ww;
    }
});

function changeBgColor(id){
    document.getElementById(id).style.backgroundColor = "#cc9900";
    document.getElementById(id).style.border = "#cc9900";
}

function changeBgColorBlack(id){
    document.getElementById(id).style.backgroundColor = "#0B0A54";
    document.getElementById(id).style.border = "#0B0A54";
}

function showCaption(num){
	// document.getElementById("caption").style.visibility = "visible";
	$("#caption").show();
	switch(num){
		case 0:
			$("#caption label").text("Beezybee");
			$("#caption p").text("Beezy Bee is an arcade-style game inspired by \"Flappy Bird\", and is meant for iOS devices. Collect flowers and honeycombs to win, but don't forget to dodge the monsters!");
			break;
		case 1:
			$("#caption label").text("Comixgram");
			$("#caption p").text("Comic Books allows users to create your own comics. You can customize your books to your heart content. It's time to make your original story.");
			break;
		case 2:
			$("#caption label").text("TwitterMap");
			$("#caption p").text("Twitter Map marks the locations where users tweet on Google Maps. The users can also tweet and search other people's tweets using this app. Users can save their memories on the spot. It's like their very own journals!");
			break;
		case 3:
			$("#caption label").text("BattleGame");
			$("#caption p").text("Battle Game is based on \"Street Fighter\". Player A and Player B fight every five seconds. I designed the application carefully so that the user can select their character in both landscape and portrait mode. It's time to play!");
			break;
		case 4:
			$("#caption label").text("BattleShip");
			$("#caption p").text("There are five types of ships: 1 monster(five sizes), 2 big(three sizes), 2 medium(two sizes) and 5 small(one size) ships. The objective is to destroy all ships within 50 turns!");
			break;
	}
}

function hideCaption(){
	// document.getElementById("caption").style.visibility = "hidden";
	$("#caption").hide();
	$("#caption p").text("");
	$("#caption label").text("");
}





