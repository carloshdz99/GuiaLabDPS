//variable spiderman
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
function Heroe(superHeroeObjt) {
    //imprimiendo el nombre del heroe
    console.log("\n El nombre del super heroe es:");
    console.log("" + superHeroeObjt.nombre);
    //console.log(superHeroeObjt.poderes);
    //imprimiendo poderes del superheroe pasado
    console.log("\n Los poderes del heroe son: ");
    superHeroeObjt.poderes.forEach(function (poder) {
        console.log("" + poder);
    });
}
//pasando la variable con los valores del heroe
Heroe(spiderman);
