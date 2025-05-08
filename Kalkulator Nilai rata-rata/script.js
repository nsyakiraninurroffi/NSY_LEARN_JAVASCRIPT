function hitungRataRata() {
  let total = 0;
  let jumlah = 12;

  for (let i = 1; i <= jumlah; i++) {
    let nilai = parseFloat(document.getElementById(`nilai${i}`).value);
    if (isNaN(nilai)) {
      alert(`Nilai ke-${i} belum diisi atau salah!`);
      return;
    }
    total += nilai;
  }

  let rataRata = total / jumlah;
  document.getElementById("hasil").innerHTML = `📘 Nilai Rata-Rata: ${rataRata.toFixed(2)}`;
}
