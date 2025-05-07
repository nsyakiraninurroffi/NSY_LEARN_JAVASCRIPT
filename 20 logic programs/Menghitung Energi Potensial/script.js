function hitungEnergiPotensial() {
      var massa = parseFloat(document.getElementById("massa").value);
      var gravitasi = parseFloat(document.getElementById("gravitasi").value);
      var ketinggian = parseFloat(document.getElementById("ketinggian").value);

      if (isNaN(massa) || isNaN(gravitasi) || isNaN(ketinggian)) {
        document.getElementById("hasil").innerHTML = "Silakan masukkan nilai yang valid.";
        return;
      }

      var energiPotensial = massa * gravitasi * ketinggian;
      document.getElementById("hasil").innerHTML = "Energi Potensial: " + energiPotensial + " Joule";
    }