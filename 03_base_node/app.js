const fs = require('fs');

const {crearArchivo} = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base).then((resp) =>{
  console.log(resp);
}).catch((err) =>{
  console.log(err);
});
