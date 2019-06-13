// ページがロードされたときに呼び出される関数を決める
window.addEventListener("load", onload, true) ;

var drawFlag = false;
var oldX = 0;
var oldY = 0;



function onload() {
	var cv = document.getElementById("myCanvas");
	var cvx = cv.getContext("2d");
    cv.addEventListener("mousemove", draw, true);
    cv.addEventListener("mousedown", function(e){
        drawFlag = true;
        oldX = e.clientX - cv.offsetLeft ;
        oldY = e.clientY - cv.offsetTop ;
    }, false);
    cv.addEventListener("mouseup", function(){
        drawFlag = false;
    }, false);
    cvx.fillStyle = "#f5f5f5";
    cvx.fillRect(0, 0, 700, 400);
}



// canvasに描画する関数
function draw(e){
	var cv = document.getElementById("myCanvas");
	var cvx = cv.getContext("2d");
    if (!drawFlag) return;
    var x = e.clientX - cv.offsetLeft ;
    var y = e.clientY - cv.offsetTop ;
    cvx.strokeStyle = "#000000";
    cvx.lineWidth = 10;
    cvx.lineCap = "round";
    cvx.beginPath();
    cvx.moveTo(oldX, oldY);
    cvx.lineTo(x, y);
    cvx.stroke();
    cvx.closePath();
    oldX = x;
    oldY = y;
}

//canvasを画像に変換
function chgImg(){
	var cv = document.getElementById("myCanvas");
	var cvx = cv.getContext("2d");
  	var png = cv.toDataURL();
  	document.getElementById("newImg").src = png;
}
