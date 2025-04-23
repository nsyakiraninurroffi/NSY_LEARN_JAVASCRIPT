// Fungsi untuk menghitung keliling alas dan luas permukaan kerucut
function hitungKerucut() {
    const r = parseFloat(document.getElementById("jari").value);
    const s = parseFloat(document.getElementById("pelukis").value);

    const keliling = 2 * Math.PI * r;
    const luas = Math.PI * r * (r + s);

    document.getElementById("hasil").innerHTML =
        "Keliling alas kerucut: " + keliling.toFixed(2) + ", " +
        "Luas permukaan kerucut: " + luas.toFixed(2);
}