// Fungsi untuk menghitung keliling dan luas jajar genjang
function hitungJajarGenjang() {
    const a = parseFloat(document.getElementById("alas").value);
    const b = parseFloat(document.getElementById("sisi").value);
    const t = parseFloat(document.getElementById("tinggi").value);

    // Perhitungan
    const keliling = 2 * (a + b);
    const luas = a * t;

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML =
        "Keliling jajar genjang: " + keliling.toFixed(2) + ", " +
        "Luas jajar genjang: " + luas.toFixed(2);
}