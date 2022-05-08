
const casino = () => {
    let randomly = Math.floor(Math.random() * 8);
    console.log(randomly);
    let randomly2 = Math.floor(Math.random() * 12);
    console.log(randomly2);

    let ask = confirm("Welcome to our Casino 777, lets play a game!" +
        "\n" + 'You have 3 attempts to find a correct number from 0 to 8.')
    if (ask === true) {

        let a = parseFloat(prompt("Choose a roulette pocket number from 0 to 8: "+'\n'+'Attempts left: 3' + '\n' + 'Total prize: 0' + '\n' + 'Possible prise of current attend: 100$', ''));
        if (a === randomly) {

            let ask2 = confirm('Congratulation, you won! Your prize is: 100 $. ' +
                '\n' + 'Do you want to play Super Game?')
            if(ask2 === true) {
                let a2 = parseFloat(prompt("Choose a roulette pocket number from 0 to 12: "+'\n'+'Attempts left: 1' + '\n' + 'Total prize: 100' + '\n' + 'Possible prise of current attend: 200$', ''))
                if(a2 === randomly2){
                   let ask2tour =  confirm('Congratulation, you won! Your prize is: 200 $.' +
                    '\n' + 'Do you want to play again?')
                    if(ask2tour === true){
                        casino()
                    }
                }
                else{
                    let ask2tour =  confirm('Congratulation, you won! Your prize is: 100 $.' +
                        '\n' + 'Do you want to play again?')
                    if(ask2tour === true){
                        casino()
                        }
                    }
                }
            else{
                alert("You did not become a billionaire, but can.");
            }
            }
         else {
            alert('First turn is wrong, you can choose a number 2 times.' )
        }
        let b = parseFloat(prompt("Choose a roulette pocket number from 0 to 8: "+'\n'+'Attempts left: 2' + '\n' + 'Total prize: 0' + '\n' + 'Possible prise of current attend: 50$', ""));
        if (b === randomly) {
            let ask3 = confirm('Congratulation, you won! Your prize is: 50 $. ' +
                '\n' + 'Do you want to play Super Game?')
            if(ask3 === true) {
                let b2 = parseFloat(prompt("Choose a roulette pocket number from 0 to 12: "+'\n'+'Attempts left: 2' + '\n' + 'Total prize: 50' + '\n' + 'Possible prise of current attend: 100$', ''))
                if(b2 === randomly2) {
                    let ask2tour = confirm('Congratulation, you won! Your prize is: 100 $.' +
                        '\n' + 'Do you want to play again?')
                    if (ask2tour === true) {
                        casino()
                    }
                }
         else {
                    let ask2tour =  confirm('Congratulation, you won! Your prize is: 50 $.' +
                        '\n' + 'Do you want to play again?')
                    if(ask2tour === true){
                        casino()
                    }
            }
        }
            else{
                alert("You did not become a billionaire, but can.");
            }
    }
        else {
            alert('Second turn is wrong, you can choose a number 1 times.' )
        }

        let c = parseFloat(prompt("Choose a roulette pocket number from 0 to 8: "+'\n'+'Attempts left: 1' + '\n' + 'Total prize: 0' + '\n' + 'Possible prise of current attend: 25$', ""));
        if (c === randomly) {
            let ask3 = confirm('Congratulation, you won! Your prize is: 25 $. ' +
                '\n' + 'Do you want to play Super Game?')
            if(ask3 === true) {
                let c2 = parseFloat(prompt("Choose a roulette pocket number from 0 to 12: "+'\n'+'Attempts left: 1' + '\n' + 'Total prize: 25' + '\n' + 'Possible prise of current attend: 50$', ''))
                if(c2 === randomly2) {
                    let ask2tour = confirm('Congratulation, you won! Your prize is: 50 $.' +
                        '\n' + 'Do you want to play again?')
                    if (ask2tour === true) {
                        casino()
                    }
                }
                else {
                    let ask2tour =  confirm('Congratulation, you won! Your prize is: 25 $.' +
                        '\n' + 'Do you want to play again?')
                    if(ask2tour === true){
                        casino()
                    }
                }
            }
            else{
                alert("You did not become a billionaire, but can.");
            }
        }
     else {
        alert("You did not become a billionaire, but can.");
            let ask2tour =  confirm( 'Do you want to play again?')
            if(ask2tour === true) {
                casino()
            }
        }
    }
}
casino()



// Step 2:
// - If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in
// range [0; 8] (including 0 and 8) and ask user to enter a number of pocket on which the ball could
// land (use prompt()).
// - User has 3 attempts to guess a number.
// - If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize
// for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$.
// - If user did not guess a number show the message ‘Thank you for your participation. Your prize is:
//     … $’ (Use alert) and ask if he wants to play again (use confirm).
// Step 3:
// - If user did guess - Show the message ‘Congratulation, you won! Your prize is: … $. Do you want
// to continue?’.
// - If user does not want to continue – show the message ‘Thank you for your participation. Your
// prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
// - If user does want to continue, make number range bigger at 4 as the previous one (for example
//                                                                                             [0; 8] -> [0; 12]), and two times bigger maximum prize (for example on 1-st attempt prize will be
// 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and
// number of attempts should be set to 3 (user should have 3 attempts to guess a number for each
//     numbers range)
// - Each time you ask user to enter a number you should show him a range of cells, how much
// attempts he has left, his total prize and possible prize on current attempt. See Figure 1:
// - All these stuffs should be repeated until user lose or decide to quit
