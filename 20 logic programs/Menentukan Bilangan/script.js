function cekBilangan() {
      const input = document.getElementById("angka").value;
      const nilai = parseFloat(input);
      let hasil = "";

      if (isNaN(nilai)) {
        hasil = "❌ Masukkan angka yang valid.";
      } else {
        if (nilai > 0) {
          hasil = "✅ Bilangan POSITIF";
        } else if (nilai < 0) {
          hasil = "✅ Bilangan NEGATIF";
        } else {
          hasil = "⚪ Ini adalah angka NOL";
        }

        // Cek Ganjil/Genap jika bilangan bulat
        if (Number.isInteger(nilai)) {
          if (nilai % 2 === 0) {
            hasil += "<br>🔢 Termasuk bilangan GENAP";
          } else {
            hasil += "<br>🔢 Termasuk bilangan GANJIL";
          }
        } else {
          hasil += "<br>⛔ Bukan bilangan bulat, tidak bisa dicek ganjil/genap.";
        }
      }

      document.getElementById("hasil").innerHTML = hasil;
    }