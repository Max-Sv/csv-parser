import * as config from './config';
import * as writer from './writeFile';
import * as db from './dbConnect';

export interface forObj{
  ID: string,
  Name: string,
  Surname: string,
  Mail: string,
  'Date of Registration': string,
  Phone: string
}
export interface forregExps{
  ID: RegExp,
  Mail: RegExp,
  Phone: RegExp
}

export class Validator {
  private obj: forObj;
  private isCorrect: boolean;
  private invalidData: string[];
  // private fs = require('fs');

  public regExps: forregExps = {
    ID: /^[0-9]+$/,
    Mail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    Phone: /^(\+375|375|80)\s*(25|29|33|44)\s*(([0-9]{7})|[0-9]{3}( [0-9]{2}){2})$/,
  };

  constructor(obj: forObj) {
    this.obj = obj;
    this.isCorrect = true;
    this.invalidData = [];
    let i: number = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof(config.csv[i].type) == "object") {
          this.correctObj(this.match(key, obj[key as keyof forObj]), key)
        }
        config.csv[i].validators.forEach((item) => {
          this.correctObj(item.validate(obj[key as keyof forObj]), key)
        })  
        // console.log(`${key} = ${this.obj[key as keyof forObj]}`);
        i++
      }
    }
    this.sendObj();
  }

  match(key: string, param: any): string[] {
    if (this.regExps[key as keyof forregExps].test(param)) return [];
    return ['Data entered incorrectly']
  };

  correctObj(err: string[], key: string):void {
    if(err.length != 0) {
      this.isCorrect = false;
      this.obj[key as keyof forObj] += ` <- ${err}`
      this.invalidData.push(key);
    }
  }

  sendObj() {
    if (!this.isCorrect) {
      console.log(`INVALID OBJECT - ${JSON.stringify(this.obj)}`);
      console.log(`INVALID FIELDS: ${this.uniqueArr(this.invalidData).join(', ')}`);
      console.log('\n');
      writer.writeFile(`INVALID OBJECT - ${JSON.stringify(this.obj)}`);
      writer.writeFile(`INVALID FIELDS: ${this.uniqueArr(this.invalidData).join(', ')}`);
      writer.writeFile('\n');
    } else {
      db.addUser(this.obj);
    }
  }

  uniqueArr(arr:string[]): string[] {
    return arr.filter((elem, index, self) => index === self.indexOf(elem)  )
  }

}
