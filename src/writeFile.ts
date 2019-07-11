const fs = require("fs");

export function writeFile(text: any) {
  fs.appendFileSync("invalidUsers.txt", text, function(error:any){
    if(error) throw error;
  });
}
