function hitungTrapesium() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const d = parseFloat(document.getElementById("d").value);
    const t = parseFloat(document.getElementById("t").value);

    const keliling = a + b + c + d;
    const luas = 0.5 * (a + b) * t;

    const hasil = `
        <hr>
        <p>Keliling Trapesium: ${keliling.toFixed(2)} cm</p>
        <p>Luas Trapesium: ${luas.toFixed(2)} cm²</p>
        <hr>
    `;

    document.getElementById("hasil").innerHTML = hasil;
}