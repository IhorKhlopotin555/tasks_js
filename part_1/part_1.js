// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let input1 = prompt('Enter your 1 number')
// let input2 = prompt('Enter your 2 number')
// let input3 = prompt('Enter your 3 number')
//
// if(input1 > input2 && input1> input3 && input2 > input3){
//     document.write(input3, input2, input1);
// }
// if(input1 > input2 && input1> input3 && input2 < input3){
//     document.write(input2, input3, input1);
// }
// else if (input2 > input1 && input2> input3 && input1 > input3){
//     document.write(input3, input1, input2);
// }
// else if(input3 > input1 && input3> input2 && input1 > input2){
//     document.write(input2, input1, input3);
// }
// else if(input3 > input1 && input3> input2 && input1 < input2){
//     document.write(input1, input2, input3);
// }
// else if (input2 > input1 && input2> input3 && input1 < input3) {
//     document.write(input1, input3, input2);
// }
// else if (input2 === input1 && input2 > input3) {
//     document.write(input1, input2, input3);
// }
// else if (input1 === input2 && input2 < input3) {
//     document.write(input3, input1, input2);
// }
// else if (input1 === input3 && input1 < input2) {
//     document.write(input2, input1, input3);
// }
// else if (input1 === input3 && input1 > input2) {
//     document.write(input3, input1, input2);
// }
// else if (input2 === input3 && input1 > input2) {
//     document.write(input3, input2, input1);
// }
// else if (input2 === input3 && input1 < input2) {
//     document.write(input1, input2, input3);
// }
// else if (input2 === input3 && input1 === input2) {
//     document.write(input1, input2, input3);
// }else{
//     false
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let traffic = prompt('Color')
// if(traffic === 'green'){
//     document.write('Go')
// }
// else if(traffic === 'yellow'){
//     document.write("wait")
// }
// else if(traffic === 'red'){
//     document.write("stop")
// }else{
//     document.write('do what you want')
// }
//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!