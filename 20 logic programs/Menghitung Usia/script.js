function hitungUsia() {
      const tanggalLahir = new Date(document.getElementById('tanggalLahir').value);
      const sekarang = new Date();
      let usia = sekarang.getFullYear() - tanggalLahir.getFullYear();
      const bulan = sekarang.getMonth() - tanggalLahir.getMonth();
      if (bulan < 0 || (bulan === 0 && sekarang.getDate() < tanggalLahir.getDate())) {
        usia--;
      }
      document.getElementById('hasil').innerText = `Usia Anda adalah ${usia} tahun.`;
    }