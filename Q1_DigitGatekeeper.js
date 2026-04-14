let start = parseInt(prompt());
let end = parseInt(prompt());
let k = parseInt(prompt());

let ans = 0;

for (let i = start; i <= end; i++) {
    if (i % k != 0) continue;

    let str = i.toString();
    if (str.indexOf('0') !== -1) continue;

    let temp = i, s = 0;
    while (temp > 0) {
        s += temp % 10;
        temp = Math.floor(temp / 10);
    }

    let prime = true;
    if (s < 2) prime = false;
    for (let j = 2; j * j <= s; j++) {
        if (s % j == 0) {
            prime = false;
            break;
        }
    }

    if (prime) ans++;
}

alert(ans);