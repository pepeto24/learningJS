var rangeA = null;
var rangeB = null;
var rangeC = null;
var inputA = null;
var inputB = null;
var inputC = null;
var favcolor = null;

function start() {
  mapInputs();
  addEvents();
  calculate();
}

function mapInputs() {
  rangeA = document.querySelector("#rangeA");
  rangeB = document.querySelector("#rangeB");
  rangeC = document.querySelector("#rangeC");
  inputA = document.querySelector("#inputA");
  inputB = document.querySelector("#inputB");
  inputC = document.querySelector("#inputC");
  favcolor = document.querySelector("#favcolor");
}

function addEvents() {
  rangeA.addEventListener("input", handleInputAChange);
  rangeB.addEventListener("input", handleInputBChange);
  rangeC.addEventListener("input", handleInputCChange);
}

function handleInputAChange(event) {
  inputA.value = event.target.value;
  calculate();
}

function handleInputBChange(event) {
  inputB.value = event.target.value;
  calculate();
}

function handleInputCChange(event) {
  inputC.value = event.target.value;
  calculate();
}

function calculate() {
  var numberA = parseInt(inputA.value, 10);
  var numberB = parseInt(inputB.value, 10);
  var numberC = parseInt(inputC.value, 10);

  favcolor.value = numberA + numberB + numberC;

}

start();
