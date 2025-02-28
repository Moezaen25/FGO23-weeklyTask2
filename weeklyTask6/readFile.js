import { readFile } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';


function readData(password, utf){
  const dirName = dirname(fileURLToPath(import.meta.url))
  
    readFile(`${dirName}/${password}`, utf, (err, data) => {
        if (err) throw err;
        console.log(data);
      });
}

readData('password.js', 'utf8')