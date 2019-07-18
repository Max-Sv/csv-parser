import App from './App'
import CsvParser from './csvParser'

const port: any = process.env.PORT || 8081

App.listen(port);

const csvFilePath: string = 'C:/mifort/CSV-Parser/src/Data.csv';
const parserParameters: object = {
    delimiter: ';',
    ignoreEmpty: true
};
  
export const parser = new CsvParser(csvFilePath);
parser.getObjects(parserParameters);
