window.URL = window.URL || window.webkitURL;

var form = document.querySelector("form") ;
var input = document.querySelector("input[name=field1]") ;
var output = document.querySelector("output") ;

var file_input = document.querySelector("input[name=file]") ;

var ws = new WebSocket("ws://"+location.host) ;

ws.onopen = on_open ;
ws.onmessage = on_message ;
ws.onclose = on_close ;

function on_open(e) {
	output.innerHTML += "<span class='message'>&nbspLet's 絵しりとり&nbsp→&nbsp</span>" ;
}

function on_message(e) {
	var sourceStr = e.data ;
	var moji = sourceStr.slice( -1 ) ;
	
	if(typeof(e.data)==="string"){
		output.innerHTML +="<span class='message'>&nbsp→&nbsp</span>";
		
		playsound("sound.mp3");
		// 現在のスクロール位置
		var scrollPosition = document.getElementById("auto_scroll").scrollLeft;
		// スクロール要素の高さ
		var scrollWidth = document.getElementById("auto_scroll").scrollWidth;
		document.getElementById("auto_scroll").scrollLeft = scrollWidth;
		if(e.data=="end"||moji=="ん"){
			output.innerHTML +="<div>おわり</div>"
			document.getElementById("overlay").style.display = "block";
			
		}
	}else{
		var a = window.URL.createObjectURL( e.data ) ;
		output.innerHTML +="<img src=" + a + "  Width='150' id='message' class='message' >";
	}
	
}

function on_close(e) {
	output.innerHTML += "[[サーバとの接続が切れました]]" ;
}

function on_submit(e){
	if(document.form1.field1.value != ""){
		var cv = document.getElementById("myCanvas");
		var cvx = cv.getContext("2d");
	  	var dataURI = cv.toDataURL();
	  	// "iVBORw..."をバイナリに変換
		var byteString = atob( dataURI.split( "," )[1] ) ;
		// "image/png"
		var mimeType = dataURI.match( /(:)([a-z\/]+)(;)/ )[2] ;
		// バイナリからBlobを作成
		for( var i=0, l=byteString.length, content=new Uint8Array( l ); l>i; i++ ) {
			content[i] = byteString.charCodeAt( i ) ;
		}
		var blob = new Blob( [ content ], {
			type: mimeType ,
		} ) ;
	  	if(ws){
			ws.send(blob);
		}
		var msg = input.value;

		if(ws){
			ws.send(msg);
		}
		input.value="";
	}
	delete_canvas();
}


function playsound(filename){
	var e = new Audio();
	e.src=filename;
	e.play();
}


function on() {
	ws.send("end");
    
}

function off() {
    document.getElementById("overlay").style.display = "none";
    window.location.reload();
}