$(document).ready(function() {
	$('.knopka1').click( function () {
    $(".sec1").addClass("none");
    $(".sec2").removeClass("none").addClass("block")
  });

 
    $('.kngotovo').click(function(){
      $(".sec2").removeClass("block").addClass("none");
      $(".sec3").removeClass("none").addClass("block")
    });
  

  $(function() {
    $(".cnst").draggable();
  } )


	$('.knper1').click(function(){
    $('.jopa').attr('src', 'image/person1.svg');
    })
    $('.knoper2').click(function(){
    $('.jopa').attr('src', 'image/person2.svg');
    })
    $('.knopk3').click(function(){
    $('.jopa').attr('src', 'image/person3.svg');
    })
    $('.knpsn4').click(function(){
    $('.jopa').attr('src', 'image/person4.svg');
    })
  

    $( function() {
      var $constants = $( ".constants" ),
      $clothes = $( ".ludi" );
      
      $clothes.droppable({
      accept: ".constants > .cnst",
      drop: function( event, ui ) {
      deleteImage( ui.draggable );
      }
      });
      });
      
      function deleteImage( $item ) {
      (function($) {
      $item.addClass("item");
      $(".item")
      })(jQuery);
      $item.fadeOut(function() {
      var $list = $( ".item", ".krugg", ".krugj", ".krugk", ".serg", ".serk", ".serj", ".bantg", ".bantj", ".bantk", ".palkaj", ".palkak", ".palkag", ".piramida", ".lepestok", ".krugi", ".kapli").length ?
      $( ".item", ".krugg", ".krugj", ".krugk", ".serg", ".serk", ".serj", ".bantg", ".bantj", ".bantk", ".palkaj", ".palkak", ".palkag", ".piramida", ".lepestok", ".krugi", ".kapli") :
      $(this).removeAttr("style");
      $(this).appendTo(".ludi");
      $(this).removeClass("item");
      $(this).addClass("placed");
      });
      }

      $(function(){
        $(".kngotovo").one('click'), (function(){
        $(".ludi").css({'animation':'none'}),
        $(".constants").css({'animation':'fall 1s ease-out'}),
        $(".constants").css({'opacity':'0'})
        });
      });
         
        
      
        

});







