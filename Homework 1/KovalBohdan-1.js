let sum_nums = 0;
let given_number = 10; //Змінна для передання числа

if (given_number > 0) {
    for (let num = 1; num < given_number; num++) {
        if (num % 3 === 0 || num % 5 === 0) {
            sum_nums += num;
        }
    }
    console.log(sum_nums)
} else {
    console.log(0);
}
