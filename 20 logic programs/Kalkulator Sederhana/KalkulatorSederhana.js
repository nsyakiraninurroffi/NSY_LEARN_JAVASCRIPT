function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return y !== 0 ? x / y : "Error! Tidak bisa bagi nol.";
}

function hitung(choice) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let hasil;

  switch (choice) {
    case '1':
      hasil = add(num1, num2);
      break;
    case '2':
      hasil = subtract(num1, num2);
      break;
    case '3':
      hasil = multiply(num1, num2);
      break;
    case '4':
      hasil = divide(num1, num2);
      break;
    default:
      hasil = "Operasi tidak dikenal.";
  }

  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}
