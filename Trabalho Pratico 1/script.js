window.addEventListener('load', start) 

var inputR = null;
var inputG = null;
var inputB = null;

function start(){

  inputR = document.querySelector("#inputR");
  inputR.addEventListener('change', colorRed); 

  inputG = document.querySelector("#inputG");
  inputG.addEventListener('change', colorGreen);
  
  inputB = document.querySelector("#inputB");
  inputB.addEventListener('change', colorBlue); 

}

function colorRed(event){
  var rangeR = document.querySelector("#rangeR");
  rangeR.classList.add("inputActive");
  rangeR.value = event.target.value;

  rangeR.addEventListener('change', setColors());

}

function colorGreen(event){
  var rangeG = document.querySelector("#rangeG");
  rangeG.classList.add("inputActive");
  rangeG.value = event.target.value;

  rangeG.addEventListener('change', setColors());
  
}

function colorBlue(event){
  var rangeB = document.querySelector("#rangeB");
  rangeB.classList.add("inputActive");
  rangeB.value = event.target.value;

  rangeB.addEventListener('change', setColors());
  
}

function setColors(red, green, blue){

  var red = rangeR.value;
  var green = rangeG.value;
  var blue = rangeB.value;

  var square = document.querySelector('.square')
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  var h1 = document.querySelector('h1')
  h1.style.color = `rgb(${red}, ${green}, ${blue})`

  var container = document.querySelector('.container')
  container.style.boxShadow = `1px 2px 2px 0px rgb(${red}, ${green}, ${blue})`

}

