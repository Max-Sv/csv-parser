interface ColumnDescriptor {
  name: string,
  type: CsvType | string,
  validators: Validators<string>[]
}

interface CsvType {
  parseString(str: string): string;
}

interface Validators<T> {
  /** if return empty array then object valid */
  validate(value: T) : string[];
}


let ID: CsvType = {
  parseString: function (str: string) {
    // if(/^[0-9]+$/.test(str)) return this;
    // else return this;
    return str;
  }
}

let Mail: CsvType = {
  parseString: function (str: string) {
    // if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str)) return this;
    // else return this;
    return str;
  }
}

let Phone: CsvType = {
  parseString: function (str: string) {
    // if (/^375(17|25|29|33|44)[0-9]{7}$/.test(str.replace(/\s+/g, ''))) return this;
    // else return this;
    return str;
  }
}
let fooValidator: any = (function(): boolean {
  return true;
})()
let _require: any = (function(): boolean {
  return true;
})()

function _length(min:number, max:number) : any {
  // return {
  //     validate: function (str: string) {
  //         let errors : string[] = [];
  //         if (str.length < min || str.length > max) errors.push(`length error(minLength: ${min}, maxLength: ${max}, value: ${str})`);
  //         return errors;
  //     }
  // }
  return [min, max];
}


export let csv: ColumnDescriptor[] = [
  {
  name: "ID",
  type: ID,
  validators: [_length(1,4), _require]
  },
  {
  name: "Name",
  type: "string",
  validators: [_length(1,18)]
  },
  {
  name: "Surname",
  type: "string",
  validators: [_length(1,18)]
  },
  {
  name: "Mail",
  type: Mail,
  validators: [_length(6,18)]
  },
  {
  name: "Date of Registration",
  type: "date",
  validators: [fooValidator]
  },
  {
  name: "Phone",
  type: Phone,
  validators: [_length(14,16)]
  },
]
  


// let database = [ 
//   { 
//   name: "ID", 
//   type: ['ID', 'PRIMARY KEY'],
//   data: "ID"
//   }, 
//   { 
//   name: "Name", 
//   type: 'VARCHAR', 
//   data: "Name"
//   }, 
//   { 
//   name: "Surname", 
//   type: 'VARCHAR', 
//   data: "Surname"
//   }, 
//   { 
//   name: "Mail", 
//   type: 'VARCHAR', 
//   data: "Mail"
//   }, 
//   { 
//   name: "Date", 
//   type: 'DATE', 
//   data: "Date of registration"
//   }, 
//   { 
//   name: "Phone", 
//   type: 'INT', 
//   data: "Phone"
//   }, 
// ]
