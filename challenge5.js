

$(function(){
	$("img").mouseover(function(){
		console.log(this.img)
		$("#image").css('background-image', "url('"+$(this).attr("src")+"')");
		$("#image").html($(this).attr("alt"));
	})

	$("img").focus(function() {
		$("#image").css('background-image', "url('"+$(this).attr("src")+"')");
		$("#image").html($(this).attr("alt"));
	})

	$("img").mouseout(function() {
		$("#image").css('background-image', '')
		$("#image").html("Hover over an image below")
	})

	$("img").blur(function() {
		$("#image").css('background-image', '')
		$("#image").html("Hover over an image below")
	})
})
