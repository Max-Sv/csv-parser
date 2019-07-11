import App from './App'
import CsvParser from './csvParser'
import { log } from 'util';
// import AppView from './AppView'

const port: any = process.env.PORT || 8081

App.listen(port, function(err: any) {
  if (err) console.log("Error");
  // console.log(`server is listening on ${port}`);
})

const csvFilePath: string = 'C:/mifort/CSV-Parser/src/Data.csv';
const parserParameters: object = {
    delimiter: ';',
    ignoreEmpty: true
};
  
const parser = new CsvParser(csvFilePath);
// console.log(parser);

const csvObjects = parser.getObjects(parserParameters);
// console.log(parser.arrObjects);


// require ('./config');
// console.log(csv);


// const csv = require('csvtojson')
// const parserParameters = {
//   delimiter: ';',
//   ignoreEmpty: true
// };


// csv(parserParameters)
// .fromFile(csvFilePath)
// .then((jsonObj: string)=>{
//     console.log(jsonObj);
// })

// AppView.render();
// class Reader {

  // Here we import the File System module of node
  // private fs = require('fs');

  // constructor() { }

  // createFile() {

  //     this.fs.writeFile('file.txt', 'I am cool!',  function(err) {
  //         if (err) {
  //             return console.error(err);
  //         }
  //         console.log("File created!");
  //     });
  // }

//   showFile() {

//       this.fs.readFile('./src/config.ts', function (err: any, data: any) {
//           if (err) {
//               return console.error(err);
//           }
//           console.log("Asynchronous read: " + data.toString());
//       });
//   }
// }
// let result: any = new Reader;
// result.showFile();
