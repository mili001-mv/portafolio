// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgcHEd6KcfGrk5M-swZjRRZJi2qark8aI",
    authDomain: "form-portafolio-8f0d6.firebaseapp.com",
    projectId: "form-portafolio-8f0d6",
    storageBucket: "form-portafolio-8f0d6.firebasestorage.app",
    messagingSenderId: "955604577621",
    appId: "1:955604577621:web:6bb43338c57d9783fc13dc",
    measurementId: "G-B3L21QKNDE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
 
const form = document.getElementById("contacto-form");
 
form.addEventListener("submit", async (e) => {
    e.preventDefault();
 
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();
 
 
    try {
        await addDoc(collection(db, "Clientes"), {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha
        });
        console.log("Datos enviados");
        alert("Solicitud enviada");
        form.reset();
    } catch (error) {
        console.log("Error al enviar datos");
        alert("Hubo un error al enviar datos");
    }
});

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgcHEd6KcfGrk5M-swZjRRZJi2qark8aI",
    authDomain: "form-portafolio-8f0d6.firebaseapp.com",
    projectId: "form-portafolio-8f0d6",
    storageBucket: "form-portafolio-8f0d6.firebasestorage.app",
    messagingSenderId: "955604577621",
    appId: "1:955604577621:web:6bb43338c57d9783fc13dc",
    measurementId: "G-B3L21QKNDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

const form = document.getElementById("contacto-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();

    try {
        await addDoc(collection(db, "Clientes")),{
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha
        };
        console.log("Datos enviados");
        alert("Solicitud enviada.");
        form.reset();
    } catch (error) {
        console.log("Error al enviar datos");
        alert("Hubo un error al enviar datos.");
    }
}); */