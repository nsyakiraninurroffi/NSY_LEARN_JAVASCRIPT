console.log("Menghitung Keliling dan Luas Permukaan Balok");
const luasPermukaanBalok = (p, l, t) => 2 * (p * l + p * t + l * t);
const kelilingBalok = (p, l, t) => 4 * (p + l + t);
function hitungBalok() {
  const p = parseFloat(document.getElementById('panjang').value);
  const l = parseFloat(document.getElementById('lebar').value);
  const t = parseFloat(document.getElementById('tinggi').value);

  if (isNaN(p) || isNaN(l) || isNaN(t)) {
    document.getElementById('hasil').innerText = "Masukkan semua nilai dengan benar ya, sayang!";
    return;
  }

  const keliling = kelilingBalok(p, l, t).toFixed(2);
  const luas = luasPermukaanBalok(p, l, t).toFixed(2);

  document.getElementById('hasil').innerText =
    `Keliling balok: ${keliling}, Luas permukaan balok: ${luas}`;
}