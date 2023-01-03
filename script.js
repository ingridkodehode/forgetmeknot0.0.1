let stCountEl = document.getElementById("stitch-count-el");
const stDecBtn = document.getElementById("stitch-decr-btn");
const stIncBtn = document.getElementById("stitch-incr-btn");
const stSaveBtn = document.getElementById("stitch-save-btn");
let stSaveEl = document.getElementById("stitch-save-el");
let stCount = 0;

let rowCountEl = document.getElementById("row-count-el");
const rowDecBtn = document.getElementById("row-decr-btn");
const rowIncBtn = document.getElementById("row-incr-btn");
const rowSaveBtn = document.getElementById("row-save-btn");
let rowSaveEl = document.getElementById("row-save-el");
let rowCount = 0;

stDecBtn.addEventListener("click", function () {
  stCount -= 1;
  stCountEl.textContent = stCount;
  console.log(stCount);
});

stIncBtn.addEventListener("click", function () {
  stCount += 1;
  stCountEl.textContent = stCount;
  console.log(stCount);
});

stSaveBtn.addEventListener("click", function () {
  let stCountStr = stCount;
  stSaveEl.textContent = stCountStr;
  stCountEl.textContent = 0;
  stCount = 0;
});

rowDecBtn.addEventListener("click", function () {
  rowCount -= 1;
  rowCountEl.textContent = rowCount;
  console.log(rowCount);
});

rowIncBtn.addEventListener("click", function () {
  rowCount += 1;
  rowCountEl.textContent = rowCount;
  console.log(rowCount);
});

rowSaveBtn.addEventListener("click", function () {
  let rowCountStr = rowCount;
  rowSaveEl.textContent = rowCountStr;
  rowCountEl.textContent = rowCount;
  rowCount = 0;
});
