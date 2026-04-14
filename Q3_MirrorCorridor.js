let n = parseInt(prompt());
let k = parseInt(prompt());

let answer = -1;

for (let x = 0; x <= 100000; x++) {
    let num = n + x;
    let s = num.toString();
    let rev = s.split('').reverse().join('');

    if (s == rev && num % k == 0) {
        answer = x;
        break;
    }
}

alert(answer);