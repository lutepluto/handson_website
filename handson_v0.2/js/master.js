$(document).ready(function(){
	$("#logo").click(function(){
		if($("#logo>span").css("display")=="inline"){
			if($("#menu").css("display")=="none"){
				$("#menu").css("display","block");
			}else if($("#menu").css("display")=="block"){
				$("#menu").css("display","none");
			}else{
				$("#menu").css("display","block");
			}
		}
	}); 
	
	$(window).resize(function(){
		if($("#logo>span").css("display")=="none"){
			$("#menu").css("display","block");
		}else {
			$("#menu").css("display","none");
		}
	});
});

function boolean validateEmail(String s){
	var boolean result;
    var pattern = /w/i;
	result=s.match(pattern);
	return result;
}

function boolean validatePhone(String s){
	alert("ping function with name");
}

function boolean validateYYYYYMM(String s){
	alert("ping function with name");
}

function String postData(String jsonOfForm){
	var String result;
	var boolean isJson;
	isJosn=jsonValidation(jsonOfForm);
	if (isJson){
		$.post("/dynamic/ping-servlet",jsonOfForm,function(data){result=data});
	}else{
		result="wrong json format";
	}
	return result;
}

function boolean jsonValidation(String s){
	var boolean result;
	//operation
	return result;
}