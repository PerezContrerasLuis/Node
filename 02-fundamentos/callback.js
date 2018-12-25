/*
setTimeout(function(){
    console.log('funcion normal');
},3000);


setTimeout(()=>{
    console.log('funcion flecha');
},4000);

*/


let getUsuarioById = (id,callback) => {
    let usuario = {
        nombre : 'Luis',
        id
    };
    if(id == 20){
        callback(`El usuario con id  ${id}, no existe en la BD`);
    } else {
        callback(null,usuario);
    }
    
}

getUsuarioById(20,(err,usuario)=>{
    if(err){
        console.log(err);
    } else {
        console.log('usuario de base de datos',usuario);
    }
});
