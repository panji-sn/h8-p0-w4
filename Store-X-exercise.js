function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var arrResult = [];
  
    if(shoppers.length === 0){
      return arrResult;
    }
  
   
    for(let i = 0; i < listBarang.length; i++){
      var barObj = {};
      barObj.product = listBarang[i][0];
      barObj.pembeli = [];
      var jmlBrg  = 0;
      for(let j = 0; j < shoppers.length; j++){
        if(shoppers[j].product === barObj.product && shoppers[j].amount <= listBarang[i][2]){
          jmlBrg += shoppers[j].amount;
          barObj.pembeli.push(shoppers[j].name);
        }    
      }
      
      if(jmlBrg <= listBarang[i][2]){
        barObj.leftOver = listBarang[i][2] - jmlBrg;
        if(barObj.product === listBarang[0][0]){
          barObj.totalProfit = jmlBrg * listBarang[0][1];
        } else if(barObj.product === listBarang[1][0]){
          barObj.totalProfit = jmlBrg * listBarang[1][1];
        } else { 
          barObj.totalProfit = jmlBrg * listBarang[2][1];
        } 
      } else {
        barObj.leftOver = listBarang[i][2];
        barObj.totalProfit = 0;
      }
      arrResult.push(barObj);
    }
    return arrResult;
  }
  // TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 11}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
console.log(countProfit([])); //[]