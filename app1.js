/*******************Exercise #1 *************************************************/
let userArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let countPositiveNum = 0;
let sumPositiveNum = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        countPositiveNum++;
        sumPositiveNum += userArray[i];
    }
}
console.log(`1. Количество положительных чисел в массиве: ${countPositiveNum}, сумма всех положительных чисел: ${sumPositiveNum}`);
/*******************Exercise #2 - #3 *************************************************/
let minNum = userArray[0];
let maxNum = userArray[0];
let indexMinNum;
let indexMaxNum;

for (let i = 1; i < userArray.length; i++) {
    if (minNum > userArray[i]) {
        minNum = userArray[i];
        indexMinNum = i + 1;
    }
    if (maxNum < userArray[i]) {
        maxNum = userArray[i];
        indexMaxNum = i + 1;
    }
}
console.log(`2. Минимальное число массива: ${minNum} его порядковый номер: ${indexMinNum}`);
console.log(`3. Максимальное число массива: ${maxNum} его порядковый номер: ${indexMaxNum}`);
/*******************Exercise #4 *************************************************/
let negativeNumbersCount = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] < 0) {
        negativeNumbersCount++;
    }
}
console.log(`4. Количество отрицательных чисел в массиве: ${negativeNumbersCount}`);
/*******************Exercise #5 - #6 *************************************************/
let oddPositiveNumversCount = 0;
let evenPositiveNumversCount = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        if(userArray[i] % 2 === 0) {
            evenPositiveNumversCount++;
        }
        else {
            oddPositiveNumversCount++;
        }
    }

}
console.log(`5. Количество положительных нечетных чисел в массиве: ${oddPositiveNumversCount}`);
console.log(`6. Количество положительных четных чисел в массиве: ${evenPositiveNumversCount}`);
/*******************Exercise #7 - #8 *************************************************/

let sumEvenPositiveNumvers = 0;
let sumOddPositiveNumvers = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0 && userArray[i] % 2 === 0) {
        sumEvenPositiveNumvers += userArray[i];
    }
    if (userArray[i] > 0 && userArray[i] % 2 !== 0) {
        sumOddPositiveNumvers += userArray[i];
    }
}
console.log(`7. Сумма положительных четных чисел в массиве: ${sumEvenPositiveNumvers}`);
console.log(`8. Сумма положительных нечетных чисел в массиве: ${sumOddPositiveNumvers}`);
/*******************Exercise #9 *************************************************/
let multiAllPositiveNumbers = 1;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) {
        multiAllPositiveNumbers *= userArray[i];
    }
}
console.log(`9. Произведение положительных чисел в массиве: ${multiAllPositiveNumbers}`);
/*******************Exercise #10 *************************************************/
let maxNumber = userArray[0];

for (let i = 1; i < userArray.length; i++) {
    if (maxNumber < userArray[i]) {
        maxNumber = userArray[i];
    }
}

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] !== maxNumber) {
        userArray[i] = 0;
    }
}
console.log(`10. Обнуленный массив с наибольшим значением: ${userArray}`);
