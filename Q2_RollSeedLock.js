let num = parseInt(prompt());
let seed = parseInt(prompt());

let value = num;

for (let step = 1; step <= 3; step++) {
    if (value % 2 == 0) value = value / 2 + seed;
    else value = value * 3 - seed;
}

let result = "NO";

if (value >= 100 && value <= 999) {
    let middle = Math.floor(value / 10) % 10;
    if (middle == seed) result = "YES";
}

alert(result + ", " + value);