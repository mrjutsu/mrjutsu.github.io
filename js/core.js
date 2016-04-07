$(document).ready(function(){
  $("textarea").on("keyup",function(){
    if ( $(this).val().length == 0 ) {
      $("textarea").css("height","45px");
    } else {
      this.style.height = $(this).parent().height;
      this.style.height = (1+this.scrollHeight)+"px";
    };
  })
});
