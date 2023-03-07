// calculate button
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", () => {
  calcExpense();
});

// saving btn
const savingsBtn = document.getElementById("savings-btn");
savingsBtn.addEventListener("click", () => {
  calcSavings();
});
