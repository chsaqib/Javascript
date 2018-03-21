$(document).ready(function() {

      $("#in").click(function(){
         $(".target").fadeIn( 'slow', function(){ 
             $(".log").text('Fade In Transition Complete');
          });
      });

      $("#out").click(function(){
         $(".target").fadeOut( 'slow', function(){ 
             $(".log").text('Fade Out Transition Complete');
          });
      });

      $("#fin").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(1000);
    });
    $("#fout").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(1000);
    });




   });
