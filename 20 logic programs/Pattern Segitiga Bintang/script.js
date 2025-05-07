function buatSegitiga() {
  const tinggi = parseInt(document.getElementById("tinggiInput").value);
  let pola = "";

  for (let i = 1; i <= tinggi; i++) {
    pola += "*".repeat(i) + "\n";
  }

  document.getElementById("output").textContent = pola;
}

