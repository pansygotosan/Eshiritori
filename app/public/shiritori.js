window.URL = window.URL || window.webkitURL;

var form = document.querySelector("form") ;
var input = document.querySelector("input[name=message]") ;
var output = document.querySelector("output") ;

var file_input = document.querySelector("input[name=file]") ;

var ws = new WebSocket("ws://"+location.host) ;

ws.onopen = on_open ;
ws.onmessage = on_message ;
ws.onclose = on_close ;

function on_open(e) {
	output.innerHTML += "[[サーバと接続しました]]<br>" ;
}

function on_message(e) {
	if(typeof(e.data)=="string"){
		output.innerHTML = "[[RECV]] >> " + e.data + "<br>"  ;
	}else{
		var blob_url = window.URL.createObjectURL(e.data);
		output.innerHTML = "[[RECV]] >> <img src=" + blob_url + "> <br>";
	}
	
	
}

function on_close(e) {
	output.innerHTML += "[[サーバとの接続が切れました]]" ;
}

function on_submit(e){
	var msg = input.value;

	if(ws){
		ws.send(msg);
	}
	input.value="";
}

file_input.addEventListener("change",on_change,false);
function on_change(e) {
	var file =e.target.files[0];
	if(ws){
		ws.send(file);
	}
}