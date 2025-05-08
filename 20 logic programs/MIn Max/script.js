function prosesAngka() {
      let a = parseFloat(document.getElementById("angka1").value);
      let b = parseFloat(document.getElementById("angka2").value);
      let c = parseFloat(document.getElementById("angka3").value);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("hasil").innerText = "Mohon masukkan semua angka dengan benar.";
        return;
      }

      let terkecil = Math.min(a, b, c);
      let terbesar = Math.max(a, b, c);
      let kaliDua = terkecil * 2;
      let bagiDua = terbesar / 2;

      document.getElementById("hasil").innerHTML = `
        Angka terkecil: ${terkecil} <br>
        Angka terbesar: ${terbesar} <br>
        Angka ${terkecil} dikalikan dua: ${kaliDua} <br>
        Angka ${terbesar} dibagi dua: ${bagiDua}
      `;
    }