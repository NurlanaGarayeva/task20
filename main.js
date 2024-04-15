

const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    [(row.querySelector("td").textContent = key + 1)];
  });
};

const saveData = (e) => {
  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input) => {
    input.parentElement.textContent = input.value;
  });
  e.target.textContent = "Düzəliş et";
  e.target.removeEventListener("click", saveData);
  e.target.addEventListener("click", editRow);
  allow = true;
};

const editRow = (e) => {
  const row = e.target.parentElement.parentElement;
  const inputs = [...row.querySelectorAll("input")];
  inputs.forEach((input) => {
    input.value = input.parentElement.textContent;
    input.parentElement.textContent = "";
    input.parentElement.appendChild(input);
  });
  e.target.textContent = "Yadda saxla";
  e.target.removeEventListener("click", editRow);
  e.target.addEventListener("click", saveData);
};

const deleteRow = (e) => {
  const row = e.target.parentElement.parentElement;
  row.remove();
  orderRow();
};

addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Öncəki xananı doldurun pls...");
    return;
  }

  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.addEventListener("click", deleteRow);
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});

