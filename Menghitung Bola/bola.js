// Fungsi untuk menghitung keliling dan luas permukaan bola
function hitungBola() {
    const r = parseFloat(document.getElementById("radius").value);

    // Menghitung keliling dan luas permukaan bola
    const keliling = 2 * Math.PI * r;
    const luas = 4 * Math.PI * r * r;

    // Menampilkan hasil ke halaman
    document.getElementById("hasil").innerHTML = 
        "Keliling lingkaran besar bola: " + keliling.toFixed(2) + ", " + 
        "Luas permukaan bola: " + luas.toFixed(2);
}