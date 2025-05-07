function hitungTeropong() {
      let fob = parseInt(document.getElementById("fob").value);
      let fp = parseInt(document.getElementById("fp").value);
      let fok = parseInt(document.getElementById("fok").value);

      if (isNaN(fob) || isNaN(fp) || isNaN(fok)) {
        document.getElementById("hasil").innerText = "Mohon isi semua nilai dengan benar.";
        return;
      }

      let d = fob + (4 * fp) + fok;
      document.getElementById("hasil").innerText = 
        `Panjang Teropong = ${d.toFixed(2)} satuan`;
    }