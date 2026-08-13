/*=====================================================
TECH FACTORY ARCADE
SCRIPT.JS
=====================================================*/


/*============== MENÚ AL HACER SCROLL ==============*/

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="rgba(0,0,0,.97)";

navbar.style.boxShadow="0 0 20px rgba(244,196,0,.4)";

}else{

navbar.style.background="rgba(0,0,0,.85)";

navbar.style.boxShadow="none";

}

});


/*============== APARICIÓN DE TARJETAS ==============*/

const cards=document.querySelectorAll(".card");

const mostrar=()=>{

cards.forEach(card=>{

const posicion=card.getBoundingClientRect().top;

const pantalla=window.innerHeight;

if(posicion<pantalla-100){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

};

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});

window.addEventListener("scroll",mostrar);

mostrar();


/*============== EFECTO EN BOTONES ==============*/

const botones=document.querySelectorAll(".boton");

botones.forEach(boton=>{

boton.addEventListener("mouseenter",()=>{

boton.style.transform="scale(1.05)";

});

boton.addEventListener("mouseleave",()=>{

boton.style.transform="scale(1)";

});

});


/*============== EFECTO EN EL LOGO ==============*/

const logo=document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

logo.style.color="#00B7FF";

});

logo.addEventListener("mouseleave",()=>{

logo.style.color="#ff44e0";

});


/*============== MENSAJE EN CONSOLA ==============*/

console.log("Bienvenido a Tech Factory Arcade");


/*============== EFECTO HERO ==============*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

hero.style.backgroundPosition=

`${x*40}px ${y*40}px`;

});
/*====================================
CONTADORES
====================================*/

function contador(id,numero){

let inicio=0;

const elemento=document.getElementById(id);

const tiempo=setInterval(()=>{

inicio++;

elemento.textContent=inicio;

if(inicio>=numero){

clearInterval(tiempo);

}

},40);

}

contador("componentes",42);

contador("lineas",1256);

contador("dias",15);

contador("objetivoFinal",8);

/* =========================================
   COPIAR CÓDIGO
========================================= */

const botonCopiar =
document.getElementById("copiarCodigo");

const codigoProyecto =
document.getElementById("codigoProyecto");


if(botonCopiar && codigoProyecto){

    botonCopiar.addEventListener("click",async()=>{

        try{

            await navigator.clipboard.writeText(
                codigoProyecto.innerText
            );

            botonCopiar.textContent =
            "✅ ¡Código copiado!";

            setTimeout(()=>{

                botonCopiar.textContent =
                "📋 Copiar código";

            },2000);

        }catch(error){

            botonCopiar.textContent =
            "❌ No se pudo copiar";

        }

    });

}

/* =========================================
   LIGHTBOX DE GALERÍA
========================================= */

const fotosGaleria =
document.querySelectorAll(".foto-galeria");

const lightbox =
document.getElementById("lightbox");

const imagenLightbox =
document.getElementById("imagenLightbox");

const descripcionLightbox =
document.getElementById("descripcionLightbox");

const cerrarLightbox =
document.getElementById("cerrarLightbox");

const fotoAnterior =
document.getElementById("fotoAnterior");

const fotoSiguiente =
document.getElementById("fotoSiguiente");


let fotoActual = 0;


/* ABRIR FOTO */

function abrirFoto(indice){

    if(!fotosGaleria.length){
        return;
    }

    fotoActual = indice;

    const foto =
    fotosGaleria[fotoActual];

    imagenLightbox.src =
    foto.src;

    imagenLightbox.alt =
    foto.alt;

    descripcionLightbox.textContent =
    foto.alt;

    lightbox.classList.add("activo");

    document.body.style.overflow =
    "hidden";

}


/* CERRAR */

function cerrarFoto(){

    lightbox.classList.remove("activo");

    document.body.style.overflow =
    "";

}


/* FOTO ANTERIOR */

function mostrarAnterior(){

    fotoActual--;

    if(fotoActual < 0){

        fotoActual =
        fotosGaleria.length - 1;

    }

    abrirFoto(fotoActual);

}


/* FOTO SIGUIENTE */

function mostrarSiguiente(){

    fotoActual++;

    if(
        fotoActual >=
        fotosGaleria.length
    ){

        fotoActual = 0;

    }

    abrirFoto(fotoActual);

}


/* EVENTOS DE LAS FOTOS */

fotosGaleria.forEach(
    (foto, indice)=>{

        foto.addEventListener(
            "click",
            ()=>{
                abrirFoto(indice);
            }
        );

    }
);


/* BOTONES */

if(cerrarLightbox){

    cerrarLightbox.addEventListener(
        "click",
        cerrarFoto
    );

}


if(fotoAnterior){

    fotoAnterior.addEventListener(
        "click",
        mostrarAnterior
    );

}


if(fotoSiguiente){

    fotoSiguiente.addEventListener(
        "click",
        mostrarSiguiente
    );

}


/* CERRAR AL HACER CLICK EN EL FONDO */

if(lightbox){

    lightbox.addEventListener(
        "click",
        (evento)=>{

            if(
                evento.target ===
                lightbox
            ){

                cerrarFoto();

            }

        }
    );

}


/* TECLADO */

document.addEventListener(
    "keydown",
    (evento)=>{

        if(
            !lightbox ||
            !lightbox.classList.contains("activo")
        ){

            return;

        }


        if(evento.key === "Escape"){

            cerrarFoto();

        }


        if(evento.key === "ArrowLeft"){

            mostrarAnterior();

        }


        if(evento.key === "ArrowRight"){

            mostrarSiguiente();

        }

    }
);
