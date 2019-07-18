import * as index from './index'

describe('index', () => {
  it('Parser get a correct path of File', () => {
    const parser = index.parser;
    expect(parser.filePath).toBe('C:/mifort/CSV-Parser/src/Data.csv');
  });
})
