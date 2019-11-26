
$("#ch3form").submit(function( event ) {

  if ($('input[name="fruit"]:checked').val()){
    return;
  }
  alert("You must pick a fruit!!")
  // console.log('is this working')
  event.preventDefault();
  })
