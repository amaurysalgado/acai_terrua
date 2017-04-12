$(document).ready(function(){
  if ($("div#image-galery").length > 0){
    $("img").on("click", function(){
      $("div#myModal").show();
      $("img#modalImage").attr('src',this.src);
    });
    $("span.close").on("click",function() {
      $("div#myModal").hide();
    });
  }
});
