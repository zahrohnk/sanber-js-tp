function akarPangkat2(x) {
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        const hasil = Math.sqrt(x);
        console.log("Hasil akar pangkat 2 dari " + x + " adalah: " + hasil);
    }
}

// Mengambil input dari pengguna
const userInput = prompt("Masukkan bilangan genap:");
const angka = parseFloat(userInput);

if (isNaN(angka)) {
    console.log("Input tidak valid. Harap masukkan angka.");
} else {
    akarPangkat2(angka);
}
