//ejemplos de problemas comnunes de callback
/*
* obtenemos los datos de un empleado por medio del ID 
* parte 2 de 2 
*/
let empleados = [
    {id:1,nombre:'luis'},
    {id:2,nombre:'uzumaky'},
    {id:3,nombre:'gohan'}
];

let salarios = [
    {id:1,salario:100},
    {id:2,salario:200}
];


let getEmpleado  = (id , callback) => {
    empleadoDB = empleados.find(empleado =>{
        return empleado.id == id;
    });

   //console.log(empleadoDB);

   if(!empleadoDB){
        callback('EL id que ingreso no existe en la BD');
   }else{
        callback(null,empleadoDB);
   }
}

let getSalario = (empleado, callback) =>{
    salariosDb = salarios.find(salario =>{
        return  salario.id === empleado.id;
    });

    if(!salariosDb){
        callback(`El empleado ${empleado.nombre} no cuenta con salario definido`);
    } else {
        callback(null,{nombre :empleado.nombre,salarios:salariosDb.salario});
    }
}

getEmpleado(1,(err,empleado)=>{
    if(err){
        return console.log(err);
    }

    //console.log(empleado);
    // llamamos a la funcion getSalario
    getSalario(empleado,(err,emp)=>{
        if(err){
            return console.log(err);
        }
        return console.log(emp);
    });
});
