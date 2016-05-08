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