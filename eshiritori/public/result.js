window.URL = window.URL || window.webkitURL;

var form = document.querySelector("form") ;
var input = document.querySelector("input[name=field1]") ;
var output = document.querySelector("output") ;

var file_input = document.querySelector("input[name=file]") ;

var ws = new WebSocket("ws://"+location.host) ;

ws.onopen = on_open ;
ws.onmessage = on_message ;
ws.onclose = on_close ;

var shiritori=new Array();
var illust=new Array();
var num1=0;
var num2=0;

function on_open(e) {

}

function on_message(e) {
	var sourceStr = e.data ;
	var moji = sourceStr.slice( -1 ) ;
	if(e.data=="end"){
		var result = document.getElementById("result");
		for(var i=0;i<num1;i++){
			result.innerHTML +="<div class='eshiritori'><img src=" + illust[i] + "   class='illust'> <div class='text' >"+shiritori[i]+"</div></div>";
		}

	}else if(typeof(e.data)==="string"){
		shiritori[num1]=e.data;
		num1++;
		if(moji=="ん"){
			var result = document.getElementById("result");
			for(var i=0;i<num1;i++){
				result.innerHTML +="<div class='eshiritori'><img src=" + illust[i] + "   class='illust'> <div class='text' >"+shiritori[i]+"</div></div>";
			}
			
		}
	}else{
		var a = window.URL.createObjectURL( e.data ) ;
		illust[num2]=a;
		num2++;
	}
}

function on_close(e) {

}


