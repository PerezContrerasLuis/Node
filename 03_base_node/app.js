const fs = require('fs');

const {crearArchivo} = require('./multiplicar/multiplicar');

let base = 5;

crearArchivo(base).then((resp) =>{
  console.log(resp);
}).catch((err) =>{
  console.log(err);
});
