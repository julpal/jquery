	// jquery


$('#ch4form').submit(function() {

  var name = $("#fullname").val();
  var address = $("#streetaddr").val();

if (name.length == 0){
    $("#nameerrormsg").css("display", 'block');
    event.preventDefault();
    validInput = false;
}

else{
  $("#nameerrormsg").css('display', 'none');
}

if (address.length == 0){
  $("#addrerrormsg").css("display", 'block');
  event.preventDefault();
  validInput = false;
}

else{
  $("#addrerrormsg").css("display", 'none');
}
})
