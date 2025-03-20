////
// yesterday code
////

const data =
  "ID,Name,Occupation,Age\n42,Bruce, Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const separatedLine = data.split("\n");
let refactoredArr = [];
const ArrayOfObj = [];

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
// Expanding functionality to work with any number of rows.
//////////

// if (separatedLine.length > 0) {
//   // Create & store the headCells
//   let headCells = separatedLine[0].split(",");
//   let numberOfColumns = headCells.length;
//   refactoredArr.push(headCells);

//   for (let i = 1; i < separatedLine.length; i++) {
//     let cells = separatedLine[i].split(",");
//     if (cells.length === numberOfColumns) {
//       refactoredArr.push(cells);
//     } else {
//       console.log(`The row ${i + 1} has extra columns, not printed!.`);
//     }
//   }
// }
// console.log(refactoredArr);

///////////
// Transforming Data to Array of Objects.
//////////

if (separatedLine.length > 0) {
  let headCells = separatedLine[0].split(",");
  let numberOfColumns = headCells.length;

  for (let i = 1; i < separatedLine.length; i++) {
    let cells = separatedLine[i].split(",");
    if (cells.length === numberOfColumns) {
      // i got hint from stack overflow for this part.
      let dataObj = {};
      for (let j = 0; j < numberOfColumns; j++) {
        dataObj[headCells[j]] = cells[j];
      }
      ArrayOfObj.push(dataObj);
    } else {
      console.log(`The row ${i + 1} has extra columns, not printed!.`);
    }
  }
}

let sortedArrOfObj = ArrayOfObj.sort();

// // Part 4th // //

sortedArrOfObj.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
sortedArrOfObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(sortedArrOfObj);

/////////////////
// // 5th part
///////////////

if (sortedArrOfObj.length > 0) {
  let headLine = Object.keys(sortedArrOfObj[0]).join(",");
  let nextLine = "";

  sortedArrOfObj.forEach((obj, idx) => {
    let objValue = Object.values(obj).join(",");
    nextLine += objValue;
    if (idx < sortedArrOfObj.length - 1) {
      nextLine += "\n";
    }
  });
  const csvFormat = `${headLine}\n${nextLine}`;
  console.log(csvFormat);
} else {
  //if no data!
  console.log("");
}
