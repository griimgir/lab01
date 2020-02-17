$(document).ready(function(){

	$("#plus_btn").click(function(){
		var lhs = $("#lhs").val();
		var rhs = $("#rhs").val();
		
		$.get("/add", {"x": lhs, "y": rhs}, function(response){
			var data = JSON.parse(response); // Convert the response string to a JSON

			var ans = data["ans"];

			$("#ans_area").html(ans);
		});
    });
    
    $("#minus_btn").click(function(){
		var lhs = $("#lhs").val();
		var rhs = $("#rhs").val();
		
		$.get("/sub", {"x": lhs, "y": rhs}, function(response){
			var data = JSON.parse(response); // Convert the response string to a JSON

			var ans = data["ans"];

			$("#ans_area").html(ans);
		});
    });

    $("#times_btn").click(function(){
		var lhs = $("#lhs").val();
		var rhs = $("#rhs").val();
		
		$.get("/mult", {"x": lhs, "y": rhs}, function(response){
			var data = JSON.parse(response); // Convert the response string to a JSON

			var ans = data["ans"];

			$("#ans_area").html(ans);
		});
    });

    $("#div_btn").click(function(){
		var lhs = $("#lhs").val();
		var rhs = $("#rhs").val();
		
		$.get("/divide", {"x": lhs, "y": rhs}, function(response){
			var data = JSON.parse(response); // Convert the response string to a JSON

			var ans = data["ans"];

			$("#ans_area").html(ans);
		});
    });

});
