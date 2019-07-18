import * as validator from './Validator'

describe('Validator', () => {
  it('Should create Validator Object', () => {
    let correctData: validator.forObj = {ID:"1008",Name:"Elena",Surname:"Glazov",Mail:"Elena@mail.ru",'Date of Registration':"24.4.2014",Phone:"375 29 2561421"};
    let uncorrectData: validator.forObj = {ID:"1g008",Name:"Elena",Surname:"Glazov",Mail:"ghj",'Date of Registration':"24.4.2014",Phone:"375 3662561421"};
    let correctObj = new validator.Validator(correctData);
    let uncorrectObj = new validator.Validator(uncorrectData);
    expect(correctObj.regExps).not.toEqual([]);
    expect(uncorrectObj.regExps).not.toEqual([]);
  });

})
