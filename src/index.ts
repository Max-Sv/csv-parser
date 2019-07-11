import App from './App'
import CsvParser from './csvParser'

const port: any = process.env.PORT || 8081

App.listen(port, function(err: any) {
  if (err) console.log("Error");
})

const csvFilePath: string = 'C:/mifort/CSV-Parser/src/Data.csv';
const parserParameters: object = {
    delimiter: ';',
    ignoreEmpty: true
};
  
const parser = new CsvParser(csvFilePath);
const csvObjects = parser.getObjects(parserParameters);
