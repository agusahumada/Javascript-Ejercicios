//Reemplazar
const nuevoEncabezado = document.createElement("h2");

//Agregar un id
nuevoEncabezado.id = "encabezado";

//agregar Texto
nuevoEncabezado.appendChild(document.createTextNode("Los mejores cursos"));

//Elemento anterior sera reeemplazado
const anterior = document.querySelector("#encabezado");

const elPadre = document.querySelector("#lista-cursos");

//reemplazar elemento padre
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(anterior.parentElement);
