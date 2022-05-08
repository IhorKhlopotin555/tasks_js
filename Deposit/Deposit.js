// Task 1. You need to calculate the profit of the deposit account.
//     Workflow:
// 1. User inputs initial amount of money. (Use “prompt” function).
// 2. User inputs number of years. (Use “prompt” function).
// 3. User inputs percentage of a year. (Use “prompt” function)
// Percentage of a year - percentage of the all amount earned every year by the owner of the
// money.
//     Warning: Every year amount changes. (Check example)
// 4. You need to validate the input data: three values should be numbers, initial amount can’t
// be less than 1000, number of years can’t be less than 1, percentage can’t be bigger than
// 100.
// 5. If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6. You need to calculate total profit and total amount.
// 7. Show message: (example). Use ”alert” function
// Initial amount: 1000
// Number of years: 3
// Percentage of year: 10
// Total profit: 331.00
// Total amount: 1331.00
// You should show only 2 numbers after comma (if needed).
// Number of years can be only integers.
// let amount = prompt('write your amount')
// if (amount < 1000){
//     alert('Invalid input data');
// }
// let years = prompt('write your years')
// if (years < 1){
//     alert('Invalid input data');
// }
// let persentage = prompt('write your persentage')
// if (persentage > 100){
//     alert('Invalid input data');
// }
// sum = 0
// for (i = 0; i <= year; i++){
//     let profit = amount * persentage / 100
//     amount += profit
//     sum += profit
// }
// console.log(sum);

const calculateProfit = () => {

let amount = prompt('write your amount')
if (amount < 1000){
    alert('Invalid input data');
}
let years = prompt('write your years')
if (years < 1){
    alert('Invalid input data');
}
let persentage = prompt('write your persentage')
if (persentage > 100){
    alert('Invalid input data');

    for (let i = 0; i < years; i++) {
        let totalProfit = amount * persentage / 100;
        amount += totalProfit;
    }
    console.log(totalAmount);
    console.log(totalProfit);
}}
console.log(calculateProfit())


// let amount = prompt('write your amount')
// if (amount < 1000){
//     alert('Invalid input data');
// }
// let years = prompt('write your years')
// if (years < 1){
//     alert('Invalid input data');
// }
// let persentage = prompt('write your persentage')
// if (persentage > 100){
//     alert('Invalid input data');
// }
// for (let i = 0; i < years; i++) {
//     let delta = amount * persentage / 100;
//     amount += delta;
// }
// document.write(amount);

