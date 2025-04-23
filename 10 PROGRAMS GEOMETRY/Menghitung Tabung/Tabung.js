function hitungTabung() {
    const r = parseFloat(document.getElementById("jari").value);
    const t = parseFloat(document.getElementById("tinggi").value);

    const phi = Math.PI;
    const luasAlas = phi * r * r;
    const kelilingAlas = 2 * phi * r;
    const luasPermukaan = 2 * luasAlas + kelilingAlas * t;
    const volume = luasAlas * t;

    const hasil = `
        <hr>
        <p>Luas Permukaan Tabung: ${luasPermukaan.toFixed(2)} cm²</p>
        <p>Volume Tabung: ${volume.toFixed(2)} cm³</p>
        <hr>
    `;

    document.getElementById("hasil").innerHTML = hasil;
}