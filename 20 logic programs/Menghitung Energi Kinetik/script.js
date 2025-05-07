function hitungEnergiKinetik() {
      let m = parseFloat(document.getElementById("massa").value);
      let v = parseFloat(document.getElementById("kecepatan").value);

      if (isNaN(m) || isNaN(v)) {
        document.getElementById("hasil").innerText = "Mohon masukkan nilai yang valid.";
        return;
      }

      let Ek = 0.5 * m * v * v;
      document.getElementById("hasil").innerText =
        `Energi Kinetik = ${Ek.toFixed(2)} joule`;
    }