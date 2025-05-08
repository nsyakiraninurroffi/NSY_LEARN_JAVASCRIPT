function hitungDiskon() {
      let total = parseFloat(document.getElementById("totalBelanja").value);
      let diskonPersen = parseFloat(document.getElementById("persenDiskon").value);

      if (isNaN(total) || total < 0 || isNaN(diskonPersen) || diskonPersen < 0 || diskonPersen > 100) {
        document.getElementById("hasil").innerText = "Masukkan nilai yang valid.";
        return;
      }

      let diskon = total * (diskonPersen / 100);
      let totalBayar = total - diskon;

      document.getElementById("hasil").innerHTML = `
        Total Belanja: Rp ${total.toFixed(2)}<br>
        Diskon (${diskonPersen}%): Rp ${diskon.toFixed(2)}<br>
        <strong>Total yang Harus Dibayar: Rp ${totalBayar.toFixed(2)}</strong>
      `;
    }