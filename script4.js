// O(N²) — Quadratic Time
function logArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
    }
  }
}

logArray([86, 24, 64, 48, 15, 30, 90, 49]);
