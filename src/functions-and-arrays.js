// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a > b){
    return a;
  }
  else{
    return b;
  }
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  let n = words.length;
  if (n == 0){
    return null;
  }
  let i;
  let pos = -1;
  let len = 0;
  for(i=0;i<n;i++){
    if(words[i].length > len){
      len = words[i].length;
      pos = i;
    }
  }
  return words[pos];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  let n = numbers.length;
  let sum = 0;
  let i;
  for(i=0;i<n;i++){
    sum = sum+numbers[i];
  }
  return sum;
}

function add(mixedArr){
  if(mixedArr.length == 0){
    return 0;
  }
  else{
    let n = mixedArr.length;
    let sum = 0;
    for(let i=0;i<n;i++){
      if(typeof mixedArr[i] == "string"){
        sum = sum + mixedArr[i].length;
      }
      else if(typeof mixedArr[i] == "boolean"){
        if(mixedArr[i] == true){
          sum++;
        }
      }
      else if(typeof mixedArr[i] == "number"){
        sum = sum+mixedArr[i];
      }
      else{
        throw console.error();
        
      }
    }
    return sum;
  }
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  let sum = netPrice(numbersAvg);
  let len = numbersAvg.length;
  if(len == 0){
    return null;
  }
  let avg = sum/len;
  return avg;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  let n = wordsArr.length;
  if(n == 0){
    return null;
  }
  let sum = 0;
  let i;
  for(i=0;i<n;i++){
    sum = sum+wordsArr[i].length;
  }
  let average = float.parse(sum/n);
  return average;
}

function avg(mixedArr){
  if(mixedArr.length == 0){
    return null;
  }
  else{
    let n = mixedArr.length;
    let sum = add(mixedArr);
    let average =  sum/n;
    console.log(average);
    return average
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){
  if(wordsUnique.length == 0){
    return null
  }
  let len = wordsUnique.length;
  const retArray = [];
  for(let i=0; i<len;i++){
    if(!retArray.includes(wordsUnique[i])){
      retArray.push(wordsUnique[i]);
    }
  }
  return retArray;
  //console.log(wordsUnique.indexOf('egg'));
}



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, word){
  if(wordsFind.length == 0){
    return null
  }
  if(wordsFind.includes(word)){
    return true;
  }
  else{
    return false;
  }
}



// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, word){
  if(wordsCount.length == 0){
    return 0;
  }
  let count = 0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i] == word){
      count = count+1;
    }
  }
  return count;
}



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  let product = 1;
  let n;
  for(let i=0;i<10;i++){
    for(let j=0;j<6;j++){
      n = matrix[i,j]*matrix[i,j+1]*matrix[i,j+2]*matrix[i,j+3];
      if(product<n){
        product = n;
      }
    }
  }

  for(let i=0;i<6;i++){
    for(let j=0;j<10;j++){
      n = matrix[i,j]*matrix[i+1,j]*matrix[i+2,j]*matrix[i+3,j];
      if(product<n){
        product = n;
      }
    }
  }

  return product
}
