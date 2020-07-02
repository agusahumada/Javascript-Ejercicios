// Crear enlace

const enlace = document.createElement("a");
// Agregar una clase
enlace.className = "enlace";
// Añadir un Id
enlace.id = "nuevo-id";
// Atributo href
enlace.setAttribute("href", "#");
// Añadir Texto
enlace.textContent = "Nuevo enlace";
//Agregarlo al HTML
document.querySelector("#secundaria").appendChild(enlace);

console.log(enlace);
