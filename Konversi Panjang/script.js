 function konversiPanjang() {
        const meter = parseFloat(document.getElementById('panjang').value);
        if (isNaN(meter)) {
          document.getElementById('hasil').innerHTML = "<p>Masukkan angka yang valid.</p>";
          return;
        }

        const inchi = meter * 39.3701;
        const kaki = meter * 3.28084;
        const yard = meter * 1.09361;

        document.getElementById('hasil').innerHTML = `
          <p>Panjang dalam inchi: ${inchi.toFixed(2)}</p>
          <p>Panjang dalam kaki: ${kaki.toFixed(2)}</p>
          <p>Panjang dalam yard: ${yard.toFixed(2)}</p>
        `;
      }