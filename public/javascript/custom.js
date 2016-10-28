change_logos();
document.getElementById("page-top").onscroll = function() {
  change_logos();
};

function change_logos(){
  if (window.pageYOffset > 100){
    $("img.img_logo").hide();
    $("img.img_logo_white").show();
  }else if (window.pageYOffset < 100){
    $("img.img_logo").show();
    $("img.img_logo_white").hide();
  }
}
