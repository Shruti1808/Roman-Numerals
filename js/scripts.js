var romanNumeral = function(aNumber) {
  var symbolArray = ["I", "V", "X", "L", "C", "D", "M"];
  var valueArray = [1, 5, 10, 50, 100, 500, 1000];
  var digitArray = aNumber.split("");
  var result = "";
  var tens = "";
  var hundreds ="";
  var thousands = ""
  var ones = ""


  for(i=0; i<valueArray.length; i++){
    if (aNumber === valueArray[i] - valueArray[i-1]) {
      result = symbolArray[i-1] + symbolArray[i];
      return result;
    } else if (aNumber === valueArray[i]){
      result = symbolArray[i];
      return result;
    }
  }
  // For thousands and hundreds !
  if (digitArray.length === 4){
    thousands = "M".repeat(digitArray[0]);

    if (digitArray[1] < 4 && digitArray[1] >= 1){
      hundreds = "C".repeat(digitArray[1]);

    }else if (digitArray[1]>=5 && digitArray[1]<9) {
      hundreds = "D" + "C".repeat(digitArray[1]-5);
    }

    // for tens and ones !
    if (digitArray[2]<4 && digitArray[2]>=1){
      tens= "X".repeat(digitArray[2]);
    }else if (digitArray[2]>=5 && digitArray[2]<9){
      tens = "L"+ "X".repeat(digitArray[2]-5);
    }

    if(digitArray[3] < 4){
      ones= "I".repeat(digitArray);

    } else if (digitArray[3] >= 5 && digitArray[3] < 9) {
      ones = "V" + "I".repeat(digitArray[3]- 5);

    }

    return thousands + hundreds + tens + ones;
  }
};







$(document).ready(function(){

  $("form#roman").submit(function(event){
   event.preventDefault();

   var userInput = ($("#number").val());

   $("#result").text(romanNumeral(userInput));

  });
});
