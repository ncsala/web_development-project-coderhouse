
// ------------------- Activa Animacion Menu hamburguesa-------//

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() 
{
    hamburger.classList.toggle("is-active");
});

//----------------------------------------------------------- //

//--------------------Para Desplegar enlaces de menu hamburguesa-------------------///
let boton = document.getElementById("header__nav__iconoHamb");  
let enlaces = document.getElementById("header__nav__enlaces");
let contador = 0;


boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.classList.remove('ocultarEnlaces');
        enlaces.className = ('header__nav__enlaces circuloEnlace'); //despliega los enlaces con una transicion en circulo
        contador=1;// cuando esta en uno estan desplegados los enlaces del menu hamburguesa
    }else{
        enlaces.classList.remove('circuloEnlace');
        enlaces.className = ('header__nav__enlaces ocultarEnlaces');//repliega los enlaces
        contador = 0;//cuando esta en cero estan ocultos los enlaces del menu hamburguesa 
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 768){
        contador=0;
        enlaces.classList.remove('circuloEnlace');
        enlaces.className = ('header__nav__enlaces ocultarEnlaces');
        hamburger.classList.remove('is-active');
    }
})
//-------------------------------------------------------///

//-------------Typewriter-------------------------------/ 
let app = document.getElementById('sectionUbicacion__typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('La Úlima Capital del Mundo')
    .pauseFor(3000)
    .deleteChars(10)
    .start();
//----------------------------------------------------/ 

