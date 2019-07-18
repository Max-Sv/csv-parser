// import config from './config'
let mn = require('./config');

describe('config', () => {
    it('if lenth is correct return []', () => {
        expect(mn._length(2, 5).validate('bob')).toEqual([]);
        expect(mn._length(2, 4).validate('super')).toEqual([`This field should contain at least 2 and not contain more than 4 characters`]);
    });
    it('test for data', () => {
        expect(mn.fooValidator.validate('24/4/2014')).toEqual([]);
        expect(mn.fooValidator.validate('24.4.2014')).toEqual([]);
        expect(mn.fooValidator.validate('24.13.2014')).toEqual(['Incorrect the date']);
        expect(mn.fooValidator.validate('24.0.2014')).toEqual(['Incorrect the date']);
        expect(mn.fooValidator.validate('root')).toEqual(['Incorrect the date']);
    });
    it('require must be more than 0', () => {
        expect(mn._require.validate('1')).toEqual([]);
        expect(mn._require.validate('12546546455')).toEqual([]);
        expect(mn._require.validate('root')).toEqual([]);
        expect(mn._require.validate('')).toEqual(['This field is required']);
    });
    it('parseString return this', () => {
        expect(mn.ID.parseString()).not.toEqual([]);
        expect(mn.Mail.parseString()).not.toEqual([]);
        expect(mn.Phone.parseString()).not.toEqual([]);
    });
})
