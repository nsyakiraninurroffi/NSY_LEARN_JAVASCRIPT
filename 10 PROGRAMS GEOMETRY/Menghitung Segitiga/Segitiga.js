function hitungSegitiga() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const lebar = parseFloat(document.getElementById("lebar").value);

    const luas = 0.5 * alas * tinggi;
    const keliling = alas + tinggi + lebar;

    const hasil = `
        <hr>
        <p>Luas Segitiga Adalah: ${luas.toFixed(2)} cm²</p>
        <p>Keliling Segitiga: ${keliling.toFixed(2)} </p>
        <hr>
    `;

    document.getElementById("hasil").innerHTML = hasil;
}