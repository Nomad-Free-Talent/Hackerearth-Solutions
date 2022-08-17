process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

const MX = 100000;
const MOD = 1000000007;
const BMOD = BigInt(MOD);

const mul = (a, b) => Number(BigInt(a) * BigInt(b) % BMOD)
const pow = (n, k) => {
  let p = 1, m = n;
  while (k) {
    if (k % 2 == 1) {
      p = mul(p, m);
    }
    m = mul(m, m);
    k >>= 1 ;
  }
  return p;
}

function main(input) {
  const lines = input.split('\n');
  let lineIdx = 0;

  let T = parseInt(lines[lineIdx ++]);

  const opposites = Array.from({ length: MX + 1 }, (_, i) => pow(i, MOD - 2));

  while (T --) {
    const [N, K] = lines[lineIdx ++].split(' ').map(num => parseInt(num));
    const heights = lines[lineIdx ++]
      .split(' ')
      .map(num => parseInt(num))
      .sort((prev, next) => prev - next);
    
    let count = 1;
    // Calculate C(n-1, k-1)
    for (let i = 1; i < K; i ++) {
      count = mul(count, N - i);
      count = mul(count, opposites[i]);
    }
    
    let result = 0;
    for (let i = 0; i <= N - K; i ++) {
      result = (result + mul(count, heights[i])) % MOD;
      count = mul(mul(count, opposites[N - 1 - i]), N - K - i);
    }
    console.log(result)
  }
}