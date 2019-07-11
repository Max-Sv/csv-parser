interface ColumnDescriptor {
  name: string,
  type: CsvType | string,
  validators: Validators<string>[]
}

interface CsvType {
  parseString(str: string): this;
}

interface Validators<T> {
  /** if return empty array then object valid */
  validate(value: T) : string[];
}


let ID: CsvType = {
  parseString: function (str: string) {
    return this;
  }
}

let Mail: CsvType = {
  parseString: function (str: string) {
    return this;
  }
}

let Phone: CsvType = {
  parseString: function (str: string) {
    return this;
  }
}

let fooValidator: Validators<string> = {
  validate: function (str: string) {
    let rezult: string[] = [];
    if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\s\,.](0?[1-9]|1[012])[\/\-\s\,.]\d{4}$/.test(str)) return rezult
    return ['Incorrect the date']
  }
}

let _require: Validators<string> = {
  validate: function (str: string) {
    if (str.length > 0) return [];
    return ['This field is required']
  }
}

function _length(min:number, max:number) : Validators<string> {
  return {
    validate: function (str: string) {
        if ((str.length >= min) && (str.length <= max)) return [];
        return [`This field should contain at least ${min} and not contain more than ${max} characters`];
    }
  }
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
//   type: VARCHAR, 
//   data: "Name"
//   }, 
//   { 
//   name: "Surname", 
//   type: VARCHAR, 
//   data: "Surname"
//   }, 
//   { 
//   name: "Mail", 
//   type: VARCHAR, 
//   data: "Mail"
//   }, 
//   { 
//   name: "Date", 
//   type: DATE, 
//   data: "Date of registration"
//   }, 
//   { 
//   name: "Phone", 
//   type: INT, 
//   data: "Phone"
//   }, 
// ]
