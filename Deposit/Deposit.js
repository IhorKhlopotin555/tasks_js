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


const calculateProfit = () => {

let amount = parseFloat(prompt('Enter your amount:'))
if (amount < 1000){
    alert('Invalid input data');
}
let years = parseFloat(prompt('Enter your years:'))
if (years < 1){
    alert('Invalid input data');
}
let persentage = parseFloat(prompt('Enter your persentage:'))
if (persentage > 100) {
    alert('Invalid input data');
}
    for (let i = 1; i <= years; i++) {
        let totalProfit = (amount * persentage / 100)
        amount += totalProfit
        alert('Total profit:' + `${totalProfit.toFixed(2)}` +'('+`${persentage}`+'% from initial amount)' + '\n'+'Total amount:' + `${amount.toFixed(2)}`+' (initial amount + total profit)'+`\n`+ 'Year:' + `${i}`)
        }

}
calculateProfit()



