change_logos();
document.onscroll = change_logos;

function change_logos(){
  if (window.pageYOffset > 100){
    $("img.img_logo").hide();
    $("img.img_logo_small").show();
  }else if (window.pageYOffset < 100){
    $("img.img_logo").show();
    $("img.img_logo_small").hide();
  }
}

$("a.modal").on('click',function(){
  this.style.display = "block";
});

$(".modal span.close").on('click',function(){
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
