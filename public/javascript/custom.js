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
