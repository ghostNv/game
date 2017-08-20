var reg = document.getElementsByClassName("reg")[0].getElementsByTagName("button")[0];
var agree = document.getElementById("agree");
var flag = false;
if(!flag){
		reg.disabled = "disabled";
}
agree.onclick = function(){
//	console.log("aa");
	flag = true;
	if(flag){
		reg.disabled = "";
}
	
}
reg.onclick = function(){
	location.href = "login.html";
}
