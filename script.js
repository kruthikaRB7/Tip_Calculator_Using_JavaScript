function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
  
    if (isNaN(bill) || isNaN(tipPercent)) {
      document.getElementById('result').innerText = "Please enter valid values.";
      return;
    }
  
    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;
  
    document.getElementById('result').innerHTML = `
      <p><strong>Tip:</strong> ₹${tipAmount.toFixed(2)}</p>
      <p><strong>Total Amount:</strong> ₹${total.toFixed(2)}</p>
    `;
  }
  