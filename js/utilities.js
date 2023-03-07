// function getValue
const getValue = (ID, isInputField) => {
  const element = document.getElementById(ID);
  if (isInputField) {
    const value = parseFloat(element.value);
    return value;
  } else {
    const value = parseFloat(element.innerText);
    return value;
  }
};

// function setValue
const setValue = (ID, value, isInputField) => {
  const element = document.getElementById(ID);

  if (isInputField) {
    element.value = value;
  } else {
    element.innerText = value;
  }
};

// function calculate expenses
const calcExpense = () => {
  const foodCost = getValue("food-input", true);
  const rentCost = getValue("rent-input", true);
  const otherCost = getValue("other-input", true);
  const totalIncome = getValue("total-income", true);
  //   total expenses
  const totalExpense = foodCost + rentCost + otherCost;
  setValue("total-expense", totalExpense, false);
  //   balance
  const balance = totalIncome - totalExpense;
  setValue("balance", balance, false);
};

// Function calculate savings
const calcSavings = () => {
  const percentage = getValue("percentage-input", true);
  const totalIncome = getValue("total-income", true);
  const balance = getValue("balance", false);

  //   savings
  const savings = totalIncome * (percentage / 100);
  setValue("savings", savings, false);

  //   remaining balance
  const remainingBalance = balance - savings;
  setValue("remaining-balance", remainingBalance, false);
};
