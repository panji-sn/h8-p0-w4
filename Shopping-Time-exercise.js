function shoppingTime(memberId, money) {
    if (!memberId){
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money<50000){
      return "Mohon maaf, uang tidak cukup";
    }
    var harga = money;
    var arr = [];
    function listObj(harga){
      for (var i =0;i<5;i++){
      //var arr = [];
      if (harga>1500000){
        arr.push("Sepatu Stacattu");
        harga = harga - 1500000;
      } else if (harga>500000){
        arr.push("Baju Zoro");
        harga = harga - 500000;
      } else if (harga>250000){
        arr.push("Baju H&N");
        harga = harga - 250000;
      } else if (harga>175000){
        arr.push("Sweater Uniklooh");
        harga = harga - 175000;
      } else if (harga>=50000){
        arr.push("Casing Handphone");
        harga = harga - 50000;
        break;
      }} 
      return arr;
    }
    function hargaObj(harga){
      for (var i =0;i<5;i++){
      //var arr = [];
      if (harga>1500000){
        harga = harga - 1500000;
      } else if (harga>500000){
        harga = harga - 500000;
      } else if (harga>250000){
        harga = harga - 250000;
      } else if (harga>175000){
        harga = harga - 175000;
      } else if (harga>=50000){
        harga = harga - 50000;
        break;
      }} 
      return harga;
    }
  
  
    var shopObj = {
      memberId: memberId,
      money: money,
      listPurchased: listObj(money),
      changeMoney: hargaObj(money)
    };
    return shopObj;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja