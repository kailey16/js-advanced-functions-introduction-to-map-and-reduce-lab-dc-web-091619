import { start } from "repl";

// map like functions

function mapToNegativize(sourceArray) {
  let newArray = [];
  for (let i=0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * (-1))
  }
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  for (let i=0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i])
  }
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  for (let i=0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2)
  }
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  for (let i=0; i < sourceArray.length; i++) {
    newArray.push(Math.pow(sourceArray[i], 2))
  }
  return newArray;
}


// reduce like functions

function reduceToTotal(sourceArray, startingPoint=0) {
  for (let i=0; i < sourceArray.length; i++) {
    startingPoint += sourceArray[i]
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let stauts = null;
  for (let i=0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  let stauts = null;
  for (let i=0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      return true;
    }
  }
  return false;
}