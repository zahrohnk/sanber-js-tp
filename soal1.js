const prompt = require('prompt-sync')({sigint: true});
function akarPangkat2(x) {
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif"); //Jika 'x' kurang dari nol maka akan mencetak isi console.log
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil"); //Jika 'x' dibagi 2 tidak sama dengan nol ('x' bukan bil genap) maka akan mencetak isi console.log
    } else {
        const hasil = Math.sqrt(x);
        console.log("Hasil akar pangkat 2 dari " + x + " = " + hasil); //Jika 'x' bukan tidak memenuhi persyaratan diatasnya maka 'x' akan dihitung akarpangkat 2 dan dicetak hasilnya
    }
}
//Input dari pengguna
const userInput = prompt("Masukkan bilangan genap:"); //Inputan tersimpan di var 'userinput'
const x = parseFloat(userInput); //Mengkonversi isi 'userinput' dari string ke desimal dan disimpan dalam var 'x'
if (isNaN(x)) {
    console.log("Input tidak valid. Harap masukkan angka."); //Jika 'x' NaN (Not a Number) atau bukan angka maka akan mencetak pesan input invalid
} else {
    akarPangkat2(x); //Jika 'x' angka maka akan mencetak hasil dari function x
}
