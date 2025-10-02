document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");
 
    const imagenes = document.querySelectorAll(".flip-card-back img");
 
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });
 
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
 
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});










/*
// Los métodos siempre van con paréntesis
//PRIMER CODIGO DE JAVA SCRIPT:
//LET se usa para definir variables mutables (que pueden variar)
let nombres = "Milagros Mendoza";
let datos = ["Milagros Mendoza", "SENATI", "Estudiante"];
//CONSOLE.LOG() es para poder mostrar los datos en la consola del navegador.
console.log(nombres);
console.log(datos[2]);

//let edad = prompt("Ingresa tu edad: ");
console.log(edad);

//Trabajando con funciones
function mostrarMensaje(){
    alert("Hola Mundo!")
}

function sumar(){
    let n1 = parseInt(prompt("Ingresa tu primer numero: "))
    let n2 = parseInt(prompt("Ingresa tu segundo numero: "))
    alert("El resultado es: "+(n1 + n2))
}

function cambiarColor(){
    let texto = document.getElementById("texto") //Se conecta el id con la variable texto en JS
    texto.style.color= "blue"; //Le estamos realizando cambio al color del texto
}*/
