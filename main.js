"use strict";

{
let displayElem = document.getElementsByClassName('display').item(0);
let numbersElem = document.getElementsByClassName('js-number');

// 演算子+
let operatorAddElem = document.getElementsByClassName('btn ja-operator is-add').item(0);
// 演算子-
let operatorSubElem = document.getElementsByClassName('btn js-operator is-sub').item(0);
// 演算子×
let operatorMultiElem = document.getElementsByClassName('btn ja-operator is-multi').item(0);
// 演算子÷
let operatorDivisionElem = document.getElementsByClassName('btn js-operator is-division').item(0);

let equalElem =document.getElementsByClassName('btn_under is-equal').item(0);
let acElem = document.getElementsByClassName('btn_under is-ac').item(0);

let leftNumberElem = document.getElementById('leftNumber');
let inputOperatorElem = document.getElementById('inputOperator');
let rightNumberElem = document.getElementById('rightNumber');
let resultnumberElem = document.getElementById('resultNumber');

let resultNumber;

let leftNumber;

let rightNumber;

let inputOperator;

log();

for (let i = 0; i < numbersElem.length; i++) {
  numbersElem.item(i).onclick = displayNumber;
}

operatorAddElem.addEventListener('click', saveAddOperator);
operatorAddElem.addEventListener('click', flashDisplay);
operatorSubElem.addEventListener('click', saveSubOperator);
operatorSubElem.addEventListener('click', flashDisplay);
operatorMultiElem.addEventListener('click', saveMultiOperator);
operatorMultiElem.addEventListener('click', flashDisplay);
operatorDivisionElem.addEventListener('click', saveDivisionOperator);
operatorDivisionElem.addEventListener('click', flashDisplay);

// イコールをクリックしたとき
equalElem.addEventListener('click', calculate);
equalElem.addEventListener('click', flashDisplay);

acElem.addEventListener('click', reset);
acElem.addEventListener('click', flashDisplay);

function reset() {
  resultNumber = undefined;
  leftNumber = undefined;
  rightNumber = undefined;
  inputOperator = undefined;
  displayElem.innerText = 0;
  log();
}

function calculate() {
  resultNumber = eval(leftNumber + inputOperator + rightNumber);
  displayElem.innerText = resultNumber;
  log();
}

function displayNumber() {
  if (resultNumber !== undefined) {
    reset();
  }
  if (rightNumber === undefined) {
    rightNumber = 0;
  }
  rightNumber = Number(rightNumber + this.innerText);
  displayElem.innerText = rightNumber;
  log();
}

function createCalculation() {
  if (rightNumber === undefined) {
    if (leftNumber === undefined) {
      leftNumber = 0;
    }
    return;
  }

  if (leftNumber === undefined) {
    leftNumber = rightNumber;
  } else {
    calculate();
  }

  if (resultNumber !== undefined) {
    leftNumber = resultNumber;
  }
  
  rightNumber = undefined;
  resultNumber = undefined;
  log();
}

function saveAddOperator() {
  createCalculation();
  inputOperator = '+';
  log();
}

function saveSubOperator() {
  createCalculation();
  inputOperator = '-';
  log();
}

function saveMultiOperator() {
  createCalculation();
  inputOperator = '×';
  log();
}

function saveDivisionOperator() {
  createCalculation();
  inputOperator = '÷';
  log();
}

function log() {
  leftNumberElem.innerText = leftNumber;
  inputOperatorElem.innerText = inputOperator;
  rightNumberElem.innerText = rightNumber;
  resultnumberElem.innerText = resultNumber;
}

function flashDisplay() {
  displayElem.classList.add('flashing');
  let remove = function(){
    displayElem.classList.remove('flashing');
  };
  setTimeout(remove, 100);
}
}
