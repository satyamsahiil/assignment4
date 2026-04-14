let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

let total = 3 * a + b - 2 * c;

if (total < 0) total = 0;

if ((a + b + c) > 50) total -= 10;

let status;

if (total >= 60) status = "PASS";
else status = "FAIL";

alert(total + ", " + status);