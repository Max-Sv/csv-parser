import csv = require('csvtojson');
import * as Validator from './Validator';

export default class CsvParser {
  readonly filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  getObjects(parameters: object) {
    csv(parameters)
      .fromFile(this.filePath)
      .then(jsonObj => {
        // console.log(jsonObj);
        jsonObj.map(item => new Validator.Validator(item))}
      )
  }
}
