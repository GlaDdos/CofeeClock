var time;
var setIntervalVal;

function Timer (hour, minutes, seconds, clockwise){
  this.h = hour || 0;
  this.m = minutes || 0;
  this.s = seconds || 0;
  this.clockwise = clockwise;
}

var sessionLength = new Timer(0,0,10);
var breakLength = new Timer(0, 5, 0);

var time = sessionLength;

$(document).ready(function(){
    $(".timer").html("<h1>" + zeroPad(time.h, 2) + ":" + zeroPad(time.m, 2) + ":" + zeroPad(time.s, 2) + "</h1>");

    $("#start").on("click", function(){
      setIntervalVal = setInterval(updateView, 1000);
    });

    $("#stop").on("click", function(){
      clearInterval(setIntervalVal);
    });

});

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function updateView(){
  var sessionBreak = false;

  time.s--;

  if(time.s <= 0 && time.m <= 0 && time.h <= 0){
    sessionBreak = !sessionBreak;
    if(sessionBreak === true){
      time = breakLength;
    }
    else {
      time = sessionLengpth;
    }
    //clearInterval(setInterval);
  }
  else if(time.s < 0 && time.m > 0){
    time.m--;
    time.s = 59;
  }else if (time.s < 0 && time.m <= 0) {
    time.s = 0;
    time.m = 59;
    time.h--;
  }

  $(".timer").html("<h1>" + zeroPad(time.h, 2) + ":" + zeroPad(time.m, 2) + ":" + zeroPad(time.s, 2) + "</h1>");


  console.log(zeroPad(time.h, 2) + ":" + zeroPad(time.m, 2) + ":" + zeroPad(time.s, 2));
}
