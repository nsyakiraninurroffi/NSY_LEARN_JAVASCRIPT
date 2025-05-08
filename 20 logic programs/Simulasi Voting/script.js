let suara = { A: 0, B: 0, C: 0 };

  function vote(pilihan) {
    suara[pilihan]++;
    document.getElementById("hasilVote").innerText = 
      `A: ${suara.A} suara | B: ${suara.B} suara | C: ${suara.C} suara`;
  }