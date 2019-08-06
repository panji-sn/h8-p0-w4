function ubahHuruf(kata) {
    var teks = "abcdefghijklmnopqrstuvwxyza";
    var hasil = [];
    var temp = [];
    //console.log(teks[2]);
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j< teks.length;j++){
            if (teks[j]== kata[i]){
                hasil.push(teks[j+1]);
            }
        } 
    }
    return String(hasil.join(""));
  }
  //ubahHuruf("tes");
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu