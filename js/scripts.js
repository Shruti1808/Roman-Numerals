var romanNumeral = function(aNumber) {
  var symbolArray = ["I", "V", "X", "L", "C", "D", "M"];
  var valueArray = [1, 5, 10, 50, 100, 500, 1000];

  for (var symbol = 0; symbol < symbolArray.length; symbol++){
    if (aNumber === valueArray[symbol]){
      var result = symbolArray[symbol];
      return result
    }
  }


}







$(document).ready(function(){

  $("form#roman").submit(function(event){
   event.preventDefault();

   var userInput = parseInt($("#number").val());

   $("#result").text(romanNumeral(userInput));

  });
});
