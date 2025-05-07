function hitungKalor() {
      let m = parseFloat(document.getElementById("massa").value);
      let suhu1 = parseFloat(document.getElementById("suhu1").value);
      let suhu2 = parseFloat(document.getElementById("suhu2").value);

      if (isNaN(m) || isNaN(suhu1) || isNaN(suhu2)) {
        document.getElementById("hasil").innerText = "Mohon isi semua nilai dengan benar.";
        return;
      }

      let c = 2100;  // kalor jenis es
      let ca = 4200; // kalor jenis air
      let l = 336000; // kalor lebur es
      let dt = suhu2 - suhu1;

      let q1 = m * c * dt;
      let q2 = m * l;
      let q3 = m * ca * dt;

      document.getElementById("hasil").innerHTML = `
        <div style="color: #6a1b9a">Kalor Jenis Es: ${q1.toFixed(2)} J</div>
        <div style="color: #c62828">Kalor Lebur Es: ${q2.toFixed(2)} J</div>
        <div style="color: #2e7d32">Kalor Jenis Air: ${q3.toFixed(2)} J</div>
      `;
    }