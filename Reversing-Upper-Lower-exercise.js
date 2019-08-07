function tukarBesarKecil(kalimat) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var strNumber = "1234567890";
    var spcChar = " -!" 
    var kalimatBaru=[];
    for (var i =0; i<kalimat.length;i++){
      for (var j = 0;j<lowerCase.length;j++){
        if (kalimat[i]==lowerCase[j]){
          kalimatBaru.push(upperCase[j]);
        } else if (kalimat[i]==upperCase[j]){
          kalimatBaru.push(lowerCase[j]);
        } else if (kalimat[i] == strNumber[j]){
          kalimatBaru.push(strNumber[j]);
        } else if (kalimat [i] == spcChar[j]){
          kalimatBaru.push(spcChar[j]);
        }
      }
    }
    return kalimatBaru.join("");
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"