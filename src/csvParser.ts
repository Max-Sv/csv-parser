import csv = require('csvtojson');
import Validator from './Validator';
// import User from './Uyser';
import { stringify } from 'querystring';

interface forRules{
  rules: object;
  messages: object;
  onError(): void;
  onSuccess(): void; 
}

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
          new Validator(item);
          // console.log(item);
          // console.log(item.Mail);
          // let pez: any = new Validator(item.Mail, this.settings);
          // pez.validate();
          // console.log(item);
          
          // for (const key in item) {
          //   if (item.hasOwnProperty(key)) {
          //     console.log(key);
          //     console.log(item[key]);
          //     // let pez: any = new Validator(key, item[key], this.settings);
              
          //   }
          // }
        })
      )
    // const jsonArray = await csv(parameters).fromFile(this.filePath);
    // console.log(jsonArray);

    
  }
}
