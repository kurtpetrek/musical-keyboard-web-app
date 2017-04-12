"use strict";

/* Keyboard Triggers
============================ */

$("#key-input").keydown(function( event ) { 
  switch (event.key.toLowerCase()){
    case "a":
      playSingleNote($("#c2"));
      break;
    case "w":
      playSingleNote($("#c-sharp2"));
      break;   
    case "s":
      playSingleNote($("#d2"));
      break;
    case "e":
      playSingleNote($("#d-sharp2"));
      break; 
    case "d":
      playSingleNote($("#e2"));
      break;
    case "f":
      playSingleNote($("#f2"));
      break;
    case "t":
      playSingleNote($("#f-sharp2"));
      break;
    case "g":
      playSingleNote($("#g2"));
      break;
    case "y":
      playSingleNote($("#g-sharp2"));
      break;
    case "h":
      playSingleNote($("#a2"));
      break;
    case "u":
      playSingleNote($("#a-sharp2"));
      break;
    case "j":
      playSingleNote($("#b2"));
      break;
    case "k":
      playSingleNote($("#c3"));
      break;
    case "o":
      playSingleNote($("#c-sharp3"));
      break;
    case "l":
      playSingleNote($("#d3"));
      break;
    case "p":
      playSingleNote($("#d-sharp3"));
      break;
    case ";":
      playSingleNote($("#e3"));
      break;
    case "'":
      playSingleNote($("#f3"));
      break;
  }

});

$("#key-input").keyup(function( event ) {
 switch (event.key.toLowerCase()){
    case "a":
      stopSingleNote($("#c2"));
      break;
    case "w":
      stopSingleNote($("#c-sharp2"));
      break;   
    case "s":
      stopSingleNote($("#d2"));
      break;
    case "e":
      stopSingleNote($("#d-sharp2"));
      break; 
    case "d":
      stopSingleNote($("#e2"));
      break;
    case "f":
      stopSingleNote($("#f2"));
      break;
    case "t":
      stopSingleNote($("#f-sharp2"));
      break;
    case "g":
      stopSingleNote($("#g2"));
      break;
    case "y":
      stopSingleNote($("#g-sharp2"));
      break;
    case "h":
      stopSingleNote($("#a2"));
      break;
    case "u":
      stopSingleNote($("#a-sharp2"));
      break;
    case "j":
      stopSingleNote($("#b2"));
      break; 
    case "k":
      stopSingleNote($("#c3"));
      break;
    case "o":
      stopSingleNote($("#c-sharp3"));
      break;
    case "l":
      stopSingleNote($("#d3"));
      break;
    case "p":
      stopSingleNote($("#d-sharp3"));
      break;
    case ";":
      stopSingleNote($("#e3"));
      break;
    case "'":
      stopSingleNote($("#f3"));
      break;
  }
});

/* Mouse Events
============================ */

$(".keyboard").mousedown(function(event){
  var note = "#" + event.target.id.slice(0, -4);
  playSingleNote($(note));
});

$('.keyboard').on({ 'touchstart' : function(event){
  var note = "#" + event.target.id.slice(0, -4);
  playSingleNote($(note));
} });

$(".keyboard").mouseup(function(event){
  var note = "#" + event.target.id.slice(0, -4);
  stopSingleNote($(note));
});

$('.keyboard').on({ 'touchend' : function(event){
  var note = "#" + event.target.id.slice(0, -4);
  stopSingleNote($(note));
} });

$(".keyboard div").mouseleave(function(){
  $(this).removeClass("white-pressed");
  $(this).removeClass("black-pressed");  
});





/* Play note
============================ */

function playSingleNote(note) {
  
  var elString = "#" + note.attr('id') + "-key";
  
  if (elString.indexOf("sharp") >= 0){
    $(elString).addClass("black-pressed");
  } else {
  $(elString).addClass("white-pressed");
  }
  
  note.get(0).play();
  
}

/* stop note
============================ */

function stopSingleNote(note) {
  var elString = "#" + note.attr('id') + "-key";
  
  if (elString.indexOf("sharp") >= 0){
    $(elString).removeClass("black-pressed");
  } else {
  $(elString).removeClass("white-pressed");
  }
  

    note.get(0).pause();
    note.get(0).currentTime = 0;
    
  

}