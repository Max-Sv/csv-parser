interface forRules{
  rules: object;
  messages: object;
  onError(): void;
  onSuccess(): void; 
}

let settings: forRules = {
  rules: {
    min: 6,
    max: 18,
    // match: 'email'
  },
  messages: {
    min: `Поле должно содержать больше символов`,
    max: 'Поле не должно содержать больше символов',
    match: 'Поле должно содержать валидный адрес электронной почты'
  },
  onError: function(): void { console.log('Валидация провалена'); },
  onSuccess: function(): void { console.log('Валидация прошла успешно'); }
};

module.exports = settings;
// let csvConfig: ColumnDescriptor[] = [
//   {
//   name: "ID",
//   type: 'ID',
//   validators: [length(1,4), require]
//   },
//   {
//   name: "Name",
//   type: "string",
//   validators: [length(1,18)]
//   },
//   {
//   name: "Surname",
//   type: "string",
//   validators: [length(1,18)]
//   },
//   {
//   name: "Mail",
//   type: 'Mail',
//   validators: [length(6,18)]
//   },
//   // {
//   // name: "Date of Registration",
//   // type: "date",
//   // validators: [fooValidator]
//   // },
//   // {
//   // name: "Phone",
//   // type: 'Phone',
//   // validators: [length(14,16),]
//   // },
// ]
  
// interface ColumnDescriptor {
//   name: string,
//   type: CsvType | string,
//   validators: Validators[]
// }

// interface CsvType {
//   parseString(str: string): this;
// }

// interface Validators<T> {
//   /** if return empty array then object valid */
//   validate(value: T) : string[];
// }
