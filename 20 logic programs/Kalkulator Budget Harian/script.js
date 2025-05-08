function hitungBudget() {
      const gaji = parseFloat(document.getElementById("gaji").value);
      const kebutuhan = gaji * 0.5;
      const tabungan = gaji * 0.3;
      const hiburan = gaji * 0.2;

      document.getElementById("output").innerHTML = `
        <strong>Dari gaji Rp${gaji.toLocaleString()} per bulan:</strong><br><br>
        🥗 Kebutuhan Pokok (50%) : Rp${kebutuhan.toLocaleString()}<br>
        💰 Tabungan & Investasi (30%) : Rp${tabungan.toLocaleString()}<br>
        🎉 Hiburan / Jajan (20%) : Rp${hiburan.toLocaleString()}<br>
      `;
    }