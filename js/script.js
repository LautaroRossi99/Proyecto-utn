const integrantes = [
    {
        nombre: "Lautaro",
        apellido: "Rossi",
        edad: 23,
    },
    {
        nombre: "Solange",
        apellido: "",
        edad: 25,
    },
    {
        nombre: "Tomas",
        apellido: "",
        edad: 18,
    },
    {
        nombre: "Luchito",
        apellido: "",
        edad: 28,
    },
]

const contenedorHTML = document.getElementById("contenedor")

for(const integrante of integrantes){
    contenedorHTML.innerHTML +=`
        <div class = "card">
            <h2>Nombre: ${integrante.nombre}</h2>
            <h2>Apellido: ${integrante.apellido}</h2>
            <h2>Edad:${integrante.edad}</h2>
        </div>
    `
}

/* Placas video */
const articulosHTML = document.getElementById("articulos")
fetch("./db/database.json") 
    .then(response => response.json())
    .then(data => {
        for(const placa of data){
            articulosHTML.innerHTML += `
            <div class = "card2">
                <h2>Marca: ${placa.marca} </h2>
                <h2>Modelo:${placa.modelo} </h2>
                <h2>Capacidad:${placa.capacidad} </h2>
                <img src=${placa.url}>
                <h3>Precio:${placa.precio} </h3>
            `
        }
    } )

/* evento formulario "cargue algo" */

const formularioUsuario = document.getElementById("formularioUsuario")

formularioUsuario.addEventListener("submit", (event) => {
    event.preventDefault()
   /*  console.log(event) */
    console.log(formularioUsuario.apellido.value)
})