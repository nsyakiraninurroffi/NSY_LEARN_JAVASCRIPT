function hitungLingkaran() {
    const rusuk = parseFloat(document.getElementById("jari").value);
    const phi = 3.14;

    const luas = rusuk * rusuk * phi;
    const keliling = 2 * phi * rusuk;

    const hasil = `
        <p>=========== ini hasilnya ===========</p>
        <p>Luas Lingkaran = ${luas.toFixed(2)} cm</p>
        <p>Keliling Lingkaran = ${keliling.toFixed(2)} cm</p>
    `;

    document.getElementById("hasil").innerHTML = hasil;
}