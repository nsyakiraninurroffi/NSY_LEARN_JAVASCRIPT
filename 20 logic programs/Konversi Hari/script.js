function konversiHari() {
      let jumlahHari = parseInt(document.getElementById("inputHari").value);

      if (isNaN(jumlahHari) || jumlahHari < 0) {
        document.getElementById("hasil").innerText = "Masukkan jumlah hari yang valid!";
        return;
      }

      let tahun = Math.floor(jumlahHari / 365);
      jumlahHari %= 365;
      let bulan = Math.floor(jumlahHari / 30);
      let hari = jumlahHari % 30;

      document.getElementById("hasil").innerText = `${tahun} tahun, ${bulan} bulan, ${hari} hari`;
    }