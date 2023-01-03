let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
let saveBtn = document.getElementById("save-btn");

/* <button id="stitch-decr-btn" onclick="decrease()"><i class="fa-solid fa-circle-minus"></i></button>
            <h2 id="count-el">0</h2>
            <button id="stitch-incr-btn" onclick="increment()"><i class="fa-solid fa-circle-plus"></i></button>
            <button id="stitch-save-btn" onclick="save()"><i class="fa-solid fa-circle-down"></i></button>
            <p id="save-el">Saved</p> */

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countSrt = count + " - ";
  saveEl.textContent += countSrt;
  countEl.textContent = 0;
  count = 0;
}

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li><a target='_blank' href='${leads[i]}'>
    ${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
