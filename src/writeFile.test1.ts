
// const fs = require("fs");
import * as w from './writeFile'

// describe('Validator', () => {
//   it('Should be an instance of Object', () => {
//     let text = 1;
//     expect(w.writeFile(text)).toThrow();
//   });
//   // it('Should be an instance of Object', () => {
//   //   let
//   //   const result = new validator
//   //   expect(result).toBeInstanceOf(Object);
//   // });
// })
const fs = require('fs');
// const _jest = require('jest');

describe("writeFile", () => {
  it("Should save file successfully", done => {

     // stub all external connections (your external file)
    jest.setTimeout(30000);
    const fsStub = jest.spyOn(fs, 'appendFileSync')
    const isPlaying = fs.appendFileSync("invalidUsers.txt", 'text');

    expect(fsStub).toHaveBeenCalled();
    expect(isPlaying).toBeUndefined;
  
    // fsStub.mockRestore();
    // fsStub.mockImplementation((null))
    // const player = {name: "test" } 
    // w.writeFile(player)
    // expect(fsStub.called).toBeTruthy()
    fsStub.mockRestore();
    done()
  });


  it("Should get error", done => {

    const fsStub = jest.spyOn(fs, 'appendFileSync')
    // const err = new Error('SOME ERROR OCCURS');
    const err = fs.appendFileSync("invalidUsers.txt", 'text', function(error:any){
      if(error) throw error;
    });
    expect(err()).toThrow()
  //   // const isPlaying = 

  //   // const player = {name: "test" } 


  //   try {
  //     const l = fs.appendFileSync("invalidUsers.txt", err);
  //     expect(l).rejects.toThrow()
  //   } catch(err) {
  //       expect(err.message).toEqual('SOME ERROR OCCURS');

  //       fsStub.mockRestore();
  //       done();
  //   }
  });
});
