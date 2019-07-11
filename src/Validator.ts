// import settings from './csvConfig';
import * as config from './config';

interface forRules{
  rules: object;
  messages: object;
  onError(): void;
  onSuccess(): void; 
}
interface forObj{
  ID: object,
  Name: string,
  Surname: string,
  Mail: string,
  'Date of Registration': string,
  Phone: string

}

// var emailValidation = new Validator(email, settings);
export default class Validator {
  private obj: forObj;
  // private type: string;
  // private value: string;
  // private length: number;

  private settings: forRules = {
    rules: {
      // min: minLength,
      // max: minLength,
      // match: type
    },
    messages: {
      required: 'This field is required',
      min: `Поле должно содержать больше символов`,
      max: 'Поле не должно содержать больше символов',
      match: 'Поле должно содержать валидный адрес электронной почты'
    },
    onError: function(): void { console.log('Валидация провалена'); },
    onSuccess: function(): void { console.log('Валидация прошла успешно'); }
  };
  

  // private options: forRules;
  // private rules: any;
  // private messages: any;

  public regExps = {
    ID: /^\[0-9]+$/,
    Mail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    Phone: /^(\+375|375|80)(25|29|33|44)(([0-9]{7})|[0-9]{3}( [0-9]{2}){2})$/,
  };

  constructor(obj: forObj) {
    this.obj = obj;
    let i: number = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        config.csv[i].validators.forEach((item) => {
          console.log(typeof(item));
          
          // if (item == _require)
        })
        // console.log(config.csv[i].validators[0]);
        // console.log( typeof(config.csv[i].type));
        if (typeof(config.csv[i].type) == "object") {
          let x: any = config.csv[0].type;
          // console.log(x.parseString(key));
        }
          // else console.log( typeof(config.csv[i].type))
          
        console.log(`${key} = ${obj[key as keyof forObj]}`);
        i++
        
      }
    }
    // this.type = type;
    // this.value = value;
    // this.length = this.value.length;

    // this.options = options;
    // this.rules = this.options.rules;
    // this.messages = this.options.messages;
  }

  // required(): boolean {
  //   return this.length > 0;
  // };

  // min(param: any):boolean {
  //   return this.length >= param;
  // };
  
  // max(param: any):boolean {
  //   return this.length <= param;
  // };

  
  // match(param: any): boolean {
  //   return this.regExps[param].test(this.element);
  // };

  // validate() {
  //   let isValid: boolean = true;
  //   for (let rule in this.rules) {
  //     let param = this.rules[rule];
  //     let result: boolean = (<any>this[rule as keyof Validator])(param);
  //     // console.log(rule);
  //     if (!result) {
  //       isValid = false;
  //       this.options.onError.call(this);
  //       console.log((<any>this.messages[rule as keyof forRules]));
  //       break;
  //     }
  //   }
  //   if (isValid) {
  //     this.options.onSuccess.call(this);
  //   }
  // };


}
