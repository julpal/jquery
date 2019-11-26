	// jquery


	$("#useBilling").click(function(){
		if (this.checked){
			$("#home").val($("#billing").val());
			$("#home").prop('disabled', true);
		}
		else{
			$("#home").val(null);
			$("#home").prop('disabled', false);
		}
})
