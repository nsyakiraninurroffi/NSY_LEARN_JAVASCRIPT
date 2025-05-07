function hitungGaji() {
  const nama = document.getElementById("nama").value;
  const gajiPokok = parseInt(document.getElementById("gaji").value);

  const tunjangan = 0.2 * gajiPokok;
  const pajak = 0.15 * (gajiPokok + tunjangan);
  const gajiBersih = (gajiPokok + tunjangan) - pajak;

  const hasil = `
====================================
Nama Karyawan : ${nama}
Gaji Pokok    : Rp.${Math.floor(gajiPokok)}
Tunjangan     : Rp.${Math.floor(tunjangan)}
Pajak         : Rp.${Math.floor(pajak)}
Gaji Bersih   : Rp.${Math.floor(gajiBersih)}
====================================
  `;

  document.getElementById("output").textContent = hasil;
}
