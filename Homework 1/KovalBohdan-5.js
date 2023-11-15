function highAndLow(intline) {
    let max_num = -Infinity;
    let min_num = Infinity;
    let tmp_num = "";

    for (let i = 0; i < intline.length; i++) {
        if (intline[i] !== " ") {
            tmp_num += String(intline[i])
        } else {
            max_num = Math.max(max_num,  Number(tmp_num));
            min_num = Math.min(min_num, Number(tmp_num));
            tmp_num = "";
        }
    }
    if (tmp_num !== "") {
        max_num = Math.max(max_num,  Number(tmp_num));
        min_num = Math.min(min_num, Number(tmp_num));
    }

    return String(max_num) + " " + String(min_num);
}


console.log(highAndLow("10 7 6 8 -5"));