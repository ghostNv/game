var main = document.getElementById("main");
var div = document.getElementsByTagName("div");
main.onclick = function(a){
var ev = a||window.event;
var cx = ev.pageX-main.offsetLeft;
var cy = ev.pageY-main.offsetTop;
console.log("y=" +cy);
	console.log("x=" +cx);

	if(cx > 120 && cx < 220){
		if(cy > 230&& cy < 330){
			alert("恭喜你");
		}
//		console.log("bb");
	}
	
}


function go(){
  for(var i=0;i<div.length;i++){
      div[i+1].onclick = function(){
        this.style.background = "red";
               }
         }
}
go();
//function go(i){
//
//div[i+1].style.backgroundColor = "red";
//}

//div.onclick = function(){
//	console.log("aa");
//}
