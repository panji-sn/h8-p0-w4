function digitPerkalianMinimum(angka) {
    var temp = [];
    var arr = [];
      
    for (var i = 1; i<=angka;i++){
      for (var j = angka; j>0;j--){
        if (i*j==angka){
         temp.push(i);
         temp.push(j);
         arr.push(Number(temp.join("")));
        }
        temp = [];
      }
    }
    arr.sort(function (a,b){return b<a})
    return String(arr[0]).length;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2