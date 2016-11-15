$('#contactForm').bind('submit', function (e) {
  let success = true;
  let re = /\S+@\S+\.\S+/;

  if ($("input#name")[0].value == "" || $("input#name")[0].value == null){
    $("input#name").addClass("invalid");
    $("label[for='name']").addClass("invalid_label");
    success = false
  }else{
    $("input#name").removeClass("invalid");
    $("label[for='name']").removeClass("invalid_label");
  }

  if ($("input#email")[0].value == "" || $("input#name")[0].value == null){
    $("input#email").addClass("invalid");
    $("label[for='email']").addClass("invalid_label");
    success = false
  }else if ( !re.test($("input#email")[0].value) )   {
    $("input#email").addClass("invalid");
    $("label[for='email']").addClass("invalid_label");
    $("p.help-block.email")[0].innerHTML = "Por favor, informe um email válido";
    success = false
  }else{
    $("input#email").removeClass("invalid");
    $("label[for='email']").removeClass("invalid_label");
    $("p.help-block.email")[0].innerHTML = "";
  }

  if ($("textarea#message")[0].value == "" || $("input#name")[0].value == null){
    $("textarea#message").addClass("invalid");
    $("label[for='message']").addClass("invalid_label");
    success = false
  }
  return success;
})
