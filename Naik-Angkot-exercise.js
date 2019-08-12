function naikAngkot(arrPenumpang) {
    //Inisialisasi variabel
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arr = [];
    var obj = {};
    var hasil = 0;
    var total = 0;

    //Proses
    for (var i = 0; i < arrPenumpang.length; i++){
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];
        for (var k = 0; k < rute.length; k++){
            if (rute[k] == arrPenumpang[i][1]){
                for (var l = k; l < rute.length; l++){
                    hasil++;
                    if(rute[l] >= arrPenumpang[i][2]){
                        hasil--;
                    }
                }    
            }
        }
        total = hasil*2000;
        obj.bayar = total;
        arr.push(obj);
        obj = {};
        hasil = 0;
        total = 0;
    }
    //Output
    return arr;
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
console.log(naikAngkot([])); //[]