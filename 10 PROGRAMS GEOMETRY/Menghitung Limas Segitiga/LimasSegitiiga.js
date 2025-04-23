// Fungsi untuk menghitung keliling alas dan luas permukaan limas segitiga
function hitungLimas() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const t_alas = parseFloat(document.getElementById("t_alas").value);
    const t_sisi1 = parseFloat(document.getElementById("t_sisi1").value);
    const t_sisi2 = parseFloat(document.getElementById("t_sisi2").value);
    const t_sisi3 = parseFloat(document.getElementById("t_sisi3").value);

    const keliling = a + b + c;
    const luas = 0.5 * a * t_alas +
                 0.5 * a * t_sisi1 +
                 0.5 * b * t_sisi2 +
                 0.5 * c * t_sisi3;

    document.getElementById("hasil").innerHTML =
        "Keliling alas limas: " + keliling.toFixed(2) + ", " +
        "Luas permukaan limas: " + luas.toFixed(2);
}
