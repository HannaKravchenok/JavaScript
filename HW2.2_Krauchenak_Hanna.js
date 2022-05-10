// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61



const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

// const checkAge = function(age){
//     if (age_1<age_2){
//         console.log("You don't have access cause your age is\t" + age + "\tit's less then\t"  +  age_2 );
//     }
//     else if (age>=age_2 && age<age_3){
//         console.log("Welcome !")
//     }
//     else if (age>age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else {
//         console.log("Technical work")
//     }
// }


// checkAge(25)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number



const checkAge = function(age){
    // age = Number(age)
    
    // if (!isNaN(age)){
        // if (Number(age)){
            if (+age){
    if (age<age_2){
        console.log("You don't have access cause your age is\t" + age + "\tit's less then\t"  +  age_2 );
    }
    else if (age>=age_2 && age<age_3){
        console.log("Welcome !")
    }
    else if (age>age_3){
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
} else {console.log("Not inreger value")}
}
// checkAge (25)
// checkAge (61)
// checkAge ("-22")


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let agePrompt = prompt ('Enter age')

checkAge(agePrompt)