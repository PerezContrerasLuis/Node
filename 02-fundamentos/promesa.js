/**
 * Ejemplo de uso de promesas para sustituir un callback
 */
let empleados = [
    {id:1,nombre:'luis'},
    {id:2,nombre:'daniel'},
    {id:3,nombre:'gohan'}
];

let salarios = [
    {id:1,salario:100},
    {id:2,salario:200}
];

//funcion para obtener los datos de un empeado
let getEmpleado  = (id) => {

    return new Promise((resolve, rejact) => {

        empleadoDB = empleados.find(empleado =>{
            return empleado.id == id;
        });

       //console.log(empleadoDB);

       if(!empleadoDB){
            rejact('EL id que ingreso no existe en la BD');
       }else{
            resolve(empleadoDB);
       }
    });
}

//funcion para obtener el salario de un empleado
let getSalario = (empleado) =>{
  return new Promise((resolve,rejact) =>{

    salarioEmpeado = salarios.find( salario =>{
      return  salario.id == empleado.id;
    });

    if(!salarioEmpeado){
      rejact(`el empleado  ${empleado.nombre} con el id ${empleado.id} no cuenta con un salario`);
    } else {
      resolve({id:empleado.id,nombre:empleado.nombre,salario:salarioEmpeado.salario});
    }

  });
}


 //console.log("en script de promesas");
getEmpleado(3).then((empleado)=>{
    //console.log(empleado);
    getSalario(empleado).then((resp) =>{
      console.log(`El empleado ${resp.nombre} con el id ${resp.id}  tiene un salrios de $ ${resp.salario}`);
    },(err) => {
      console.log(err);
    });
}).catch((err) =>{
  console.log(err);
})
