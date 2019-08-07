function urutkanAbjad(str) {
    var arr = [];
    var teks = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i =0; i<str.length;i++){
      for (var j =0;j<teks.length;j++){
        if (str[i]==teks[j]){
          arr.push(teks[j]);
        }
      }
    }
    //arr = arrNum.sort(function (a,b){return a>b;}).join("");
    
    return arr.sort(function (a,b){return a>b;}).join("");
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'