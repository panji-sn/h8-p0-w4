function cariMedian(arr) {
    var hasil = 0;
    lenArr = Number(arr.length); 
    if (lenArr % 2 == 1){
        hasil = arr[(lenArr-1)/2];
    } else {
        hasil = (arr[lenArr/2-1] + arr[lenArr/2])/2
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5