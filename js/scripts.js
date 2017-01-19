var romanNumeral = function(aNumber) {

  var digitArray = aNumber.split("");
  var result = "";
  var tens = "";
  var hundreds ="";
  var thousands = ""
  var ones = ""

  var convertOnes = function(digitArray) {
    if(digitArray[digitArray.length-1] < 4){
      ones= "I".repeat(digitArray[digitArray.length-1]);
    } else if (digitArray[digitArray.length-1] >= 5 && digitArray[digitArray.length-1] < 9){
      ones = "V" + "I".repeat(digitArray[digitArray.length-1]- 5);
    }
    else if (digitArray[digitArray.length-1]==4){
      ones = "IV";
    }else if (digitArray[digitArray.length-1]==9) {
      ones = "IX";
    }
    return ones;
  };

  var convertTens = function(digitArray) {
    if (digitArray[digitArray.length-2]<4 && digitArray[digitArray.length-2]>=1){
      tens= "X".repeat(digitArray[digitArray.length-2]);
    }else if (digitArray[digitArray.length-2]>=5 && digitArray[digitArray.length-2]<9){
      tens = "L"+ "X".repeat(digitArray[digitArray.length-2]-5);
    }else if (digitArray[digitArray.length-2]==4){
      tens = "XL";
    }else if (digitArray[digitArray.length-2]==9) {
      tens = "XC";
    }
    return tens;
  };

  var convertHundreds = function(digitArray) {
    if (digitArray[digitArray.length-3] < 4 && digitArray[digitArray.length-3] >= 1){
      hundreds = "C".repeat(digitArray[digitArray.length-3]);

    }else if (digitArray[digitArray.length-3]>=5 && digitArray[digitArray.length-3]<9) {
      hundreds = "D" + "C".repeat(digitArray[digitArray.length-3]-5);
    }else if (digitArray[digitArray.length-3]==4){
      hundreds = "CD";
    }else if (digitArray[digitArray.length-3]==9) {
      hundreds = "CM";
    }
    return hundreds;
  };

  var convertThousands = function(digitArray) {
    thousands = "M".repeat(digitArray[digitArray.length-4]);
    return thousands;
  }

  if (parseInt(aNumber) < 4000) {
    return convertThousands(digitArray) + convertHundreds(digitArray) + convertTens(digitArray) + convertOnes(digitArray);
  } else {
    return "Please enter a number less than 4000";
  }
};


$(document).ready(function(){

  $("form#roman").submit(function(event){
   event.preventDefault();

   var userInput = ($("#number").val());

   $("#result").text(romanNumeral(userInput));

  });
});

// var symbolArray = ["I", "V", "X", "L", "C", "D", "M"];
// var valueArray = [1, 5, 10, 50, 100, 500, 1000];
  // for(i=0; i<valueArray.length; i++){
  //   if (aNumber === valueArray[i] - valueArray[i-1]) {
  //     result = symbolArray[i-1] + symbolArray[i];
  //     return result;
  //   } else if (aNumber === valueArray[i]){
  //     result = symbolArray[i];
  //     return result;
  //   }
  // }
