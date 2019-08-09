function changeMe(arr) {
    var arrNama= [];
    var arrNamaLengkap = [];
    if (arr == false){
      return "";
    }
    for (var i = 0;i<arr.length;i++){
      for (var j = 0;j<arr[i].length;j++){
        var lokal = i+1+".";
        arrNama.push(String(lokal));      
        arrNama.push(arr[i][j]);
        arrNama.push(arr[i][j+1]);
        arrNama.push(":");
        arrNamaLengkap = arrNama.join(" ");
        
        var objMe = {
          firstName: arr[i][j],
          lastName: arr[i][j+1],
          gender: arr[i][j+2],
          age: 2019 - arr[i][j+3]
        };
        if (!arr[i][j+3] || arr[i][j+3] > 2019){
          objMe.age = "Invalid Birth Year";
        }
        console.log(arrNamaLengkap);
        console.log(objMe);
        break;
      }
      arrNama = [];
      arrNamaLengkap = [];
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""