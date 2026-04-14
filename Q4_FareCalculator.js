let base = parseInt(prompt());
let dist = parseInt(prompt());
let late = parseInt(prompt());
let seed = parseInt(prompt());

let total = base + (7 * dist);

if (late > 15) total += 20;

if (dist > 10) {
    let extra = Math.floor(total * 0.10);
    total += extra;
}

if (seed % 2 == 0) total += seed;
else total -= seed;

total = Math.ceil(total / 5) * 5;

alert(total);