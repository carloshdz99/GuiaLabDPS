//creando interfaz
interface superHeroe{
    nombre?: string;
    poderes?: Array<string>;
}

//variable spiderman
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};

//funcion heroe imprime los valores pasados a la interfaz
//comprueba que cumplan los tipos de valores pasados
function Heroe (superHeroeObjt: superHeroe){
    //imprimiendo el nombre del heroe
    console.log("\n El nombre del super heroe es:");
    console.log(`${superHeroeObjt.nombre}`);
    //console.log(superHeroeObjt.poderes);

    //imprimiendo poderes del superheroe pasado
    console.log("\n Los poderes del heroe son: ");
    superHeroeObjt.poderes.forEach( (poder) => {
        console.log(`${poder}`);
    })
}

//pasando la variable con los valores del heroe
Heroe(spiderman);

