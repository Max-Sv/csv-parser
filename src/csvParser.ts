import csv = require('csvtojson');
import Validator from './Validator';

export default class CsvParser {
  readonly filePath: string;
  public arrObjects: any[];

  constructor(filePath: string) {
    this.filePath = filePath;
    this.arrObjects = [];
  }

  async getObjects(parameters: object) {
    csv(parameters)
      .fromFile(this.filePath)
      .then(jsonObj => 
        jsonObj.map( item => {
          let validator = new Validator(item);
          // console.log(item);

        })
      )
  }
}
