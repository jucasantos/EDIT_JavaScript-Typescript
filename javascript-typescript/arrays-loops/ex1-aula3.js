
let array = [1,5,2,4,3]; //array

//EXERCÍCIO 1
/*
for (let i = 1; i <= 10; i++) {
    console.log("item" + i);
  }

//EXERCÍCIO 2

let i = 1;
while (i <= 10) {
  console.log("item" + i);
  i++;
}

//EXERCÍCIO 3

let sum = 0; 

for (let i = 0; i < array.length; i++) {
  sum += array[i]; 
}
console.log(sum);

//EXERCÍCIO 4

let max = array[0]
let min = array[0]

array.forEach(item) => {
    if (item > max){
        max = item;
    }

    if (item < min){
        min = item;
    }
}

console.log(max);
console.log(min);

//EXERCÍCIO 5

const reverseArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i]);
}
console.log(reverseArray);

//OU 

const arrayReverse = array.reverse();
console.log(arrayReverse);

//EXERCÍCIO 6

const numerosPares = array.filter(array => array % 2 === 0); // resto da divisão por 2 é igual a 0 

console.log(numerosPares); 

//EXERCÍCIO 7 

const ordArray= array.sort((a,b) => a - b);
console.log(ordArray)

*/

//EXERCÍCIO 8 

let result = array.reduce((sum, current) => sum + current, 0);  //sum é o valor inicial

console.log(result);
