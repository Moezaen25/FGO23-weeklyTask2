import path,{dirname} from 'path';
import { fileURLToPath } from 'node:url';


path.basename('C:\\temp\\myfile.html');
const dirName = dirname(fileURLToPath(import.meta.url))

console.log(dirname(fileURLToPath(import.meta.url)))