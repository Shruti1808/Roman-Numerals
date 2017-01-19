var romanNumeral = function(aNumber) {
  var symbolArray = ["I", "V", "X", "L", "C", "D", "M"];
  var valueArray = [1, 5, 10, 50, 100, 500, 1000];

  //
  // for (var symbol = 0; symbol < symbolArray.length; symbol++){
  //   if (aNumber === valueArray[symbol]){
  //     result = symbolArray[symbol];
  //     return result;
  //   } else if (aNumber ===3){
  //     result = "I".repeat(3)
  //     return result;
  //   };
  // };

  var result = ""


  for(i=0; i<valueArray.length; i++){
     if (aNumber === valueArray[i] - valueArray[i-1]) {
       result = symbolArray[i-1] + symbolArray[i];
       return result;
     } else if (aNumber === valueArray[i]){
       result = symbolArray[i];
       return result;
     } else if(aNumber < 4){
       result= "I".repeat(aNumber);
       return result;
     } else if (aNumber >= 5 && aNumber < 9) {
       result = "V" + "I".repeat(aNumber - 5);
       return result;
     }


  }
};







$(document).ready(function(){

  $("form#roman").submit(function(event){
   event.preventDefault();

   var userInput = parseInt($("#number").val());

   $("#result").text(romanNumeral(userInput));

  });
});
