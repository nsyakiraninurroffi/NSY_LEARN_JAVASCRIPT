function hitungPersegi() {
    const sisi = parseFloat(document.getElementById("sisi").value);

    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    const hasil = `
        <p>Luas Persegi Adalah: <span style="color:blue">${luas.toFixed(2)} cm²</span></p>
        <p>Keliling Persegi Adalah: <span style="color:orange">${keliling.toFixed(2)} cm</span></p>
        <hr>
    `;

    document.getElementById("hasil").innerHTML = hasil;
}
