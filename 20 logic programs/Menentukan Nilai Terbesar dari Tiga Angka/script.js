function cariTerbesar() {
      let a = parseFloat(document.getElementById('a').value);
      let b = parseFloat(document.getElementById('b').value);
      let c = parseFloat(document.getElementById('c').value);

      let terbesar;

      if (a >= b && a >= c) {
        terbesar = a;
      } else if (b >= a && b >= c) {
        terbesar = b;
      } else {
        terbesar = c;
      }

      document.getElementById('hasil').innerText = "Angka terbesar adalah " + terbesar;
    }