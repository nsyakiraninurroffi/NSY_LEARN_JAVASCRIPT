function konversiDurasi() {
      let durasi = parseInt(document.getElementById("durasi").value);

      let hari = Math.floor(durasi / (24 * 3600));
      durasi %= (24 * 3600);
      let jam = Math.floor(durasi / 3600);
      durasi %= 3600;
      let menit = Math.floor(durasi / 60);
      let detik = durasi % 60;

      document.getElementById("hasil").innerText =
        `${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik`;
    }