function deepSum (arr) {
    //Inisialisasi variabel
    var hasil1 = 0;
    var hasil2 = 0;
    var total = 0;
  
    //Proses
    for (var i = 0;i < arr.length;i++){
      for (var j = 0; j<arr[i].length;j++){
        for(var k = 0; k<arr[i][j].length;k++){
          hasil1 += arr[i][j][k];
        } 
        //return hasil1
        hasil2 += hasil1;
        hasil1 = 0;
      }
      total += hasil2;
      hasil2 = 0;
    }
    //jika tidak ada input
    if (total == 0){
      return "No number"
    }
    //output
    return total;
  
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number