var KEY = {
  UP:38,
  DOWN:40,
  W:87,
  S:83
}
var pingpong = {}
pingpong.pressedKeys = [];

$(function() {
  //set an interval to call gameloop every 30 milliseconds
  pingpong.timer=setInterval(gameloop, 30);
  //mark which key is down and up and store into array
  "pressedKeys"
  $(document).keydown(function(e) {
    pingpong.pressedKeys[e.which]=true;
  });
  $(document).keyup(function(e) {
    pingpong.pressedKeys[e.which]=false;
  });

});

function gameloop() {
  movePaddles();
  moveBall();
}

function movePaddles() {
  //use the timer to keep chekcing if a key is pressedKeys
  if (pingpong.pressedKeys[KEY.UP]) {
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top - 5);
  }
  // code the other paddle commands here
  

}

function moveBall() {
  //write code to ove the ball 5 pixels to the right
  // every time the timer ticks
}
