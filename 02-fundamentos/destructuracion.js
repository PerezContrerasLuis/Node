let deadpool = {
    nombre : 'Luis',
    apellido : 'Perez',
    poder : 'Regeneracion',
    getNombre : function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};


//console.log(deadpool.getNombre());

let {nombre:primerNombre , apellido, poder} = deadpool;

console.log(primerNombre , apellido);