

$("button").click(function() {
    var age=$(".Q1").val();
    var SSW= $(".Q2").val();

    
    if (age <17 && SSW=== "yes") { 
    $("#answer").text("You got Daria! You are cynically sarcastic, claim to not have a conscious and hate most of everything around you");
    $("#answer").css("background-image","https://media.giphy.com/media/NNLh4XfRK6t9e/giphy.gif");
    $(".daria").show();
    }
     else if (age <17 && SSW==="no") {
         $("#answer").text("You got Brittany! Your not the brightest light bulb at the store but your a great cheerleader and your boyfriend is Kevin the QB");
         $(".brit").show();
     }
      else if (age >17 && SSW==="yes") {
         $("#answer").text("You got Mack! Your basically the smartest football player in the school. Your girlfriend is Jodie and your both busy people but you make the time for her");
         $(".mack").show();
     }
     else if (age >17 && SSW==="no") {
         $("#answer").text("You got Kevin! You fit the stereotype of a 'classic high school jock' and your girlfriend is Brittany the cheerleader.");
         $(".kevin").show();
     }
     else {
      $("p").text("OOPS Character not found. Try Again!");   
      $(".oops").show();
     }
});
//daria,brittany,kevin, mack= results with images and little blurb about them//