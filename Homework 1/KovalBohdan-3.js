function search_num(m) {
    let n = 0;

    while (true) {
        let count_kubs = (n**2*((n+1)**2) / 4);

        if (count_kubs === m) {
            return n;
        }
        if (count_kubs > m) {
            return -1;
        }
        n++;
    }
}

console.log(search_num(91716553919377))

