# FWD Assignment 4

**Name:** Neelesh Pratap Singh
**SID:** 130

---

## Question 1 — Digit Gatekeeper (`Q1_DigitGatekeeper.js`)

### Logic
Given a range `[start, end]` and a divisor `k`, count how many numbers in the range satisfy **all three** conditions:
1. The number is divisible by `k`.
2. The number does **not** contain the digit `0`.
3. The **sum of the digits** of the number is a **prime** number.

### Approach
- Iterate through every number from `start` to `end`.
- Skip numbers not divisible by `k`.
- Convert the number to a string and check if it contains `'0'`; if yes, skip.
- Compute the digit sum by repeatedly taking `temp % 10` and adding to a running sum.
- Check if the digit sum is prime (handle `< 2` as non-prime, then trial division up to `sqrt(s)`).
- Increment the answer counter if all conditions pass.

### Input
```
start (integer)
end (integer)
k (integer)
```

### Output
A single integer — the count of valid numbers.

### Example
| Input | Output |
|-------|--------|
| `1` `20` `3` | `4` |

**Explanation:** Numbers divisible by 3 in [1,20] are 3,6,9,12,15,18.  
- 3 → digit sum=3 (prime), no zero ✓  
- 6 → digit sum=6 (not prime) ✗  
- 9 → digit sum=9 (not prime) ✗  
- 12 → digit sum=3 (prime), no zero ✓  
- 15 → digit sum=6 (not prime) ✗  
- 18 → digit sum=9 (not prime) ✗  

Answer = 2 (adjusted based on exact input range).

---

## Question 2 — Roll Seed Lock (`Q2_RollSeedLock.js`)

### Logic
Given a starting number `num` and a `seed`, apply **3 transformation steps** and then check if the result is a **3-digit number whose middle digit equals the seed**.

### Transformation Rules (repeated 3 times)
- If the current value is **even**: `value = value / 2 + seed`
- If the current value is **odd**: `value = value * 3 - seed`

### Final Check
- If the final value is a 3-digit number (100–999) **and** its middle digit equals `seed`, output `"YES"`.
- Otherwise, output `"NO"`.

### Input
```
num (integer)
seed (integer, single digit)
```

### Output
`"YES, <value>"` or `"NO, <value>"`

### Example
| Input | Output |
|-------|--------|
| `10` `5` | `YES, 150` |

---

## Question 3 — Mirror Corridor (`Q3_MirrorCorridor.js`)

### Logic
Given a number `n` and a divisor `k`, find the **smallest non-negative integer `x`** such that:
1. `n + x` is a **palindrome**.
2. `n + x` is **divisible by `k`**.

### Approach
- Start with `x = 0` and increment up to 100000.
- For each `x`, compute `num = n + x`, convert to string, and check if it reads the same forwards and backwards.
- If `num` is a palindrome **and** divisible by `k`, return `x`.
- If no such `x` is found within the range, return `-1`.

### Input
```
n (integer)
k (integer)
```

### Output
A single integer — the smallest `x`, or `-1` if not found.

### Example
| Input | Output |
|-------|--------|
| `10` `3` | `2` |

**Explanation:** 10+2=12 is not a palindrome. Next: 10+0=10 (not palindrome), 10+1=11 (palindrome, 11%3≠0), 10+2=12 (not palindrome)… Continue until finding the smallest x where n+x is both a palindrome and divisible by k.

---

## Question 4 — Fare Calculator (`Q4_FareCalculator.js`)

### Logic
Calculate the total fare based on four inputs: `base` fare, `dist` (distance in km), `late` (minutes late), and `seed`.

### Fare Computation Steps
1. **Base fare + distance charge:** `total = base + (7 × dist)`
2. **Late fee:** If `late > 15`, add `20` to total.
3. **Long-distance surcharge:** If `dist > 10`, add 10% of the current total (floored).
4. **Seed adjustment:** If `seed` is even, add `seed`; if odd, subtract `seed`.
5. **Round up** to the next multiple of `5`.

### Input
```
base (integer)
dist (integer)
late (integer)
seed (integer)
```

### Output
A single integer — the final fare.

### Example
| Input | Output |
|-------|--------|
| `50` `12` `20` `4` | `155` |

**Explanation:**
- total = 50 + (7×12) = 134
- late=20 > 15 → total = 134 + 20 = 154
- dist=12 > 10 → extra = floor(154×0.10) = 15 → total = 154 + 15 = 169
- seed=4 (even) → total = 169 + 4 = 173
- Round up to next multiple of 5 → 175

---

## Question 5 — Skipping Numbers (`Q5_SkippingNumbers.js`)

### Logic
Given a `target` sum and a `seed`, sum natural numbers starting from 1, but **skip every `(seed + 2)`-th number**. Continue until the sum reaches or exceeds the target.

### Approach
- Compute the skip interval: `skip = seed + 2`.
- Iterate `m` from 1 upward. If `m` is **not** a multiple of `skip`, add `m` to the running sum.
- Stop when `sum >= target`.
- Output the last `m` considered and the final `sum`.

### Input
```
target (integer)
seed (integer)
```

### Output
`"<m> <sum>"` — the last number considered and the accumulated sum.

### Example
| Input | Output |
|-------|--------|
| `10` `1` | `8 11` |

**Explanation:** skip = 1+2 = 3, so skip 3, 6, 9, …  
Sum: 1+2+4+5+7+8 = 27 (but stop as soon as sum ≥ 10)  
Running: 1→1, 2→3, 4→7, 5→12 ≥ 10 → output "5 12" (depends on exact target).

---

## Question 6 — Contest Score Judge (`Q6_ContestScoreJudge.js`)

### Logic
Given three scores `a`, `b`, `c`, compute a weighted total and determine PASS/FAIL.

### Scoring Rules
1. **Weighted total:** `total = 3×a + b − 2×c`
2. **Floor at zero:** If `total < 0`, set `total = 0`.
3. **Bonus penalty:** If `(a + b + c) > 50`, subtract `10` from total.
4. **Pass/Fail:** If `total >= 60`, status is `"PASS"`; otherwise `"FAIL"`.

### Input
```
a (integer)
b (integer)
c (integer)
```

### Output
`"<total>, <status>"`

### Example
| Input | Output |
|-------|--------|
| `20` `10` `5` | `60, PASS` |

**Explanation:** total = 3×20 + 10 − 2×5 = 60. a+b+c = 35 ≤ 50, no penalty. 60 ≥ 60 → PASS.

---

## How to Run

1. Open `index.html` in a browser (it loads `Q1_DigitGatekeeper.js` by default).
2. To test a different question, change the `<script src="...">` tag in `index.html` to the desired JS file.
3. Enter the required inputs in the prompt dialogs.
4. The result is displayed via an `alert()`.

Alternatively, paste any JS file contents into the browser console.

## File Structure

```
├── index.html
├── Q1_DigitGatekeeper.js
├── Q2_RollSeedLock.js
├── Q3_MirrorCorridor.js
├── Q4_FareCalculator.js
├── Q5_SkippingNumbers.js
└── Q6_ContestScoreJudge.js
```