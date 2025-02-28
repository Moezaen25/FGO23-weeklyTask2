import fs from 'fs';

function writeBiodata(pathFile, contentFile) {
    fs.writeFile(pathFile, contentFile, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}


writeBiodata('newFile.js', 'nama = "Mamad", \n Domisili = "Padang Pariaman", \n universitas = "Institut Teknologi Sumatera" ');