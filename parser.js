const csv = require("csv-parser");
const fs = require("fs");
const results = [];

// csv({
//   mapValues: ({ header, index, value }) => value.toLowerCase(),
// });
// fs.createReadStream("u4ea-global_total_downloads.csv")
//   .pipe(csv())
//   .on("data", (data) => {
//     console.log(data);
//     return results.push(data);
//   })
//   .on("end", () => {
//     // console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: '24' },
//     //   { NAME: 'Bugs Bunny', AGE: '22' }
//     // ]
//   });

fs.createReadStream("u4ea-global_total_downloads.csv")
  .pipe(csv())
  .on("headers", (headers) => {
    console.log(`First header: ${headers[0]}`);
    console.log(headers);
  });
