function cekZodiak() {
    let d = parseInt(document.getElementById("tgl").value);
    let m = parseInt(document.getElementById("bln").value);
    let zodiak = "Tidak valid";

    if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) zodiak = "Aries ♈";
    else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) zodiak = "Taurus ♉";
    else if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) zodiak = "Gemini ♊";
    else if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) zodiak = "Cancer ♋";
    else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) zodiak = "Leo ♌";
    else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) zodiak = "Virgo ♍";
    else if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) zodiak = "Libra ♎";
    else if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) zodiak = "Scorpio ♏";
    else if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) zodiak = "Sagitarius ♐";
    else if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) zodiak = "Capricorn ♑";
    else if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) zodiak = "Aquarius ♒";
    else if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) zodiak = "Pisces ♓";

    document.getElementById("hasilZodiak").innerText = `Zodiak kamu adalah: ${zodiak}`;
  }