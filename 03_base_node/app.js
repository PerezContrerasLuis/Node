const fs = require('fs');

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
  data += `${base} * ${i} = ${base * i} \n`;
}

fs.writeFile('tablas.txt',data,(err) =>{

  if(err){
    throw  err;
  }

  console.log("Archivo creado con exito");
});
