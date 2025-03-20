////
// yesterday code
////
const data =
  "ID,Name,Occupation,Age\n42,Bruce, Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const separatedLine = data.split("\n");
let refactoredArr = [];

// // This is the refactor part.

// for (let line of separatedLine) {
//   let cells = line.split(",");
//   refactoredArr.push(cells);
// }

// for (let i = 0; i < refactoredArr.length; i++) {
//   console.log(
//     refactoredArr[i][0],
//     refactoredArr[i][1],
//     refactoredArr[i][2],
//     refactoredArr[i][3]
//   );
// }

///////////
// Expanding functionality
//////////

if (separatedLine.length > 0) {
  // Create & store the headCells
  let headCells = separatedLine[0].split(",");
  let numberOfColumns = headCells.length;
  refactoredArr.push(headCells);

  for (let i = 1; i < separatedLine.length; i++) {
    let cells = separatedLine[i].split(",");
    if (cells.length === numberOfColumns) {
      refactoredArr.push(cells);
    } else {
      console.log(`The row ${i + 1} has extra columns, not printed!.`);
    }
  }
}
console.log(refactoredArr);
