function konversiJarak() {
      let cm = parseInt(document.getElementById("inputCM").value);
      if (isNaN(cm) || cm < 0) {
        document.getElementById("hasil").innerText = "Masukkan nilai cm yang valid.";
        return;
      }

      let km = Math.floor(cm / 100000);
      cm %= 100000;
      let m = Math.floor(cm / 100);
      let sisaCM = cm % 100;

      document.getElementById("hasil").innerHTML = `
        <p>${km} kilometer</p>
        <p>${m} meter</p>
        <p>${sisaCM} sentimeter</p>
      `;
    }