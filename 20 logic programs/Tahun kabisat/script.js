  function cekKabisat() {
    let t = parseInt(document.getElementById("tahun").value);
    let kabisat = (t % 4 === 0 && t % 100 !== 0) || (t % 400 === 0);
    document.getElementById("hasil").innerText = 
      kabisat ? `${t} adalah tahun kabisat ✅` : `${t} bukan tahun kabisat ❌`;
  }