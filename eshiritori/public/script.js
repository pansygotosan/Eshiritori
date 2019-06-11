// ページがロードされたときに呼び出される関数を決める
window.addEventListener("load", onload, true) ;

var drawFlag = false;
var oldX = 0;
var oldY = 0;
var r = 0;
var g = 0;
var b = 0;
var w = 10;
function onload() {
    var cv = document.getElementById("myCanvas");
    var cvx = cv.getContext("2d");
    function fitCanvasSize() {
      // Canvas のサイズをクライアントサイズに合わせる
      cv.width = document.documentElement.clientWidth*0.3;
      cv.height = document.documentElement.clientHeight*0.52;
      cvx.fillStyle = "rgb(255,255,245)";
      cvx.fillRect(0, 0,cv.width, cv.height);
    }
    fitCanvasSize();
    window.onresize = fitCanvasSize;
    cv.addEventListener("mousemove", draw, true);
    cv.addEventListener("mousedown", function(e){
        drawFlag = true;
        var rect = e.target.getBoundingClientRect();
        oldX = e.clientX - rect.left;
        oldY = e.clientY - rect.top;
    }, false);
    cv.addEventListener("mouseup", function(){
        drawFlag = false;
    }, false);
    cvx.fillStyle = "rgb(255,255,245)";
    cvx.fillRect(0, 0,600, 600);
}





// canvasに描画する関数
function draw(e){
	var cv = document.getElementById("myCanvas");
	var cvx = cv.getContext("2d");
    if (!drawFlag) return;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    cvx.lineCap = "round";
    cvx.strokeStyle = 'rgb('+ r + ',' + g + ',' + b + ')';
    cvx.lineWidth = w;
    cvx.beginPath();
    cvx.moveTo(oldX, oldY);
    cvx.lineTo(x, y);
    cvx.stroke();
    cvx.closePath();
    oldX = x;
    oldY = y;
}



function set_black(){
    r=23; g=23; b=23;
}
function set_gray(){
    r=128; g=128; b=128;
}
function set_brown(){
    r=165; g=62; b=62;
}
function set_red(){
    r=255; g=51; b=51;
}
function set_orange(){
    r=255; g=160; b=0;
}
function set_yellow(){
    r=255; g=255; b=61;
}
function set_green(){
    r=0; g=153; b=51;
}
function set_blue(){
    r=51; g=51; b=255;
}
function set_puple(){
    r=140; g=14; b=140;
}
function set_white(){
    r=255; g=255; b=255;
}
function set_lightgray(){
    r=211; g=211; b=211;
}
function set_ocher(){
    r=184; g=134; b=11;
}
function set_pink(){
    r=255; g=153; b=204;
}
function set_gold(){
    r=255; g=215; b=0;
}
function set_lightgreen(){
    r=171; g=230; b=55;
}
function set_lightskyblue(){
    r=135; g=206; b=250;
}
function set_lightblue(){
    r=65; g=105; b=225;
}
function set_lightpuple(){
    r=147; g=112; b=219;
}

function set_size5(){
    w=5;
}
function set_size9(){
    w=9;
}
function set_size13(){
    w=13;
}
function set_size17(){
    w=17;
}
function set_size21(){
    w=21;
}
function set_size25(){
    w=25;
}
function set_size29(){
    w=29;
}



function eraser(){
    r=255; g=255; b=245;
}

function delete_canvas(){
    var cv = document.getElementById("myCanvas");
    var cvx = cv.getContext("2d");
    cvx.fillStyle = "rgb(255,255,245)";
    cvx.fillRect(0, 0,600, 600);
}


