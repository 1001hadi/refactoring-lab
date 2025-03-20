////
// yesterday code
////
const data =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19,32\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const separatedLine = data.split("\n");
let refactoredArr = [];


for (let line of separatedLine) {
  let cells = line.split(",");
  refactoredArr.push(cells);
}

for (let i = 0; i < refactoredArr.length; i++) {
  console.log(
    refactoredArr[i][0],
    refactoredArr[i][1],
    refactoredArr[i][2],
    refactoredArr[i][3]
  );
}
