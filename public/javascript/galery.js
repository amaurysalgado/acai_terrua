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

// function image_modal(){
//   var modal = document.getElementById('myModal');
//   // Get the image and insert it inside the modal - use its "alt" text as a caption
//   var img = $('myImg');
//   var modalImg = document.getElementById("img01");
//
//   img.on("click" function(){
//       modal.style.display = "block";
//       modalImg.src = this.src;
//   })
//
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }
// }
