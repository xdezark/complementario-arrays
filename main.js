const prendas = [];

function Prenda(tipo, color, precio,){
    this.tipo=tipo;
    this.color=color;
    this.precio=parseFloat(precio);
}

const buzo1 = new Prenda("canguro", "negro", 3900);
const buzo2 = new Prenda("canguro", "blanco", 4000);
const buzo3 = new Prenda("canguro", "azul", 3900);
const remera1 = new Prenda("manga corta", "rojo", 1900);
const remera2 = new Prenda("manga larga", "gris", 2100);
const remera3 = new Prenda("manga corta", "negro", 2100);
const pantalon1 = new Prenda("jogger","marron",2500);
const pantalon2= new Prenda ("jean","azul oscuro", 3000);
const pantalon3= new Prenda ("joggin", "negro", 2300);

function cargarPrenda (arr,valor){
    arr.push(valor);
};

cargarPrenda(prendas,buzo1);
cargarPrenda(prendas,buzo2);
cargarPrenda(prendas,buzo3);
cargarPrenda(prendas,remera1);
cargarPrenda(prendas,remera2);
cargarPrenda(prendas,remera3);
cargarPrenda(prendas,pantalon1);
cargarPrenda(prendas,pantalon2);
cargarPrenda(prendas,pantalon3);

console.log(prendas);

let ingresar = prompt("Que tipo de prenda estas buscando?")

function filtrarPrenda (arr, filtro){
     const filtrado = arr.filter((element)=>{
        return element.tipo.includes(ingresar)
     })
     return filtrado
}

filtrarPrenda(prendas,)
console.log(filtrarPrenda);