const tbl = [];
const value = 5;
const rows = 10;
const cols = 10;
for (let i = 0; i < rows + 1; i++) {
  const tmp = [];
  for (let j = 0; j < cols + 1; j++) {
    tmp.push(i * j);
  }
  tbl.push(tmp);
}

console.log(tbl);
