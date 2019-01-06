//ejemplos de problemas comnunes de callback
/*
* obtenemos los datos de un empleado por medio del ID 
* parte 1 de 2 
*/
let empleados = [
    {id:1,nombre:'luis'},
    {id:2,nombre:'uzumaky'}
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


getEmpleado(20,(err,empleado)=>{
    if(err){
        return console.log(err);
    }

    console.log(empleado);
});
