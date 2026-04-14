let target = parseInt(prompt());
let seed = parseInt(prompt());

let m = 0;
let sum = 0;
let skip = seed + 2;

while (true) {
    m++;

    if (m % skip != 0) {
        sum += m;
    }

    if (sum >= target) break;
}

alert(m + " " + sum);