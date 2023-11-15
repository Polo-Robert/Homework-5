function sorting_num(num) {
    let numberAsString = num.toString();
    let nums_list = numberAsString.split('').map(Number);

    for (let i = 0; i < nums_list.length; i++) {
        for (let j = i + 1; j < nums_list.length; j++) {
            if (nums_list[i] < nums_list[j]){
                let tmp_num = nums_list[j];
                nums_list[j] = nums_list[i];
                nums_list[i] = tmp_num
            }
        }
    }
    return nums_list;
}



let sorting_list = sorting_num(3450605604).join('');

console.log(sorting_list)


