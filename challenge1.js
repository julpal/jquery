	// jquery


$("#subscribe").click(function() {
		var email = $("#emailField");
		if (this.checked){
			email.css("display", "block");
		}
		else{
			email.css("display", "none");
		}
})
