let contador = 0;
// Estructura
const valor = document.querySelector("#valor");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", (procesos) => {
        const seleccion = procesos.currentTarget.classList;
       

        if(seleccion.contains("restar")){
            contador--
        }else if (seleccion.contains("aumentar")) {
            contador++
        }else{
            contador = 0
        }
        
        if (contador < 0) {
            valor.style.color = "red";
        }else if (contador > 0) {
            valor.style.color = "green";
        }else{
            valor.style.color = "hsl(209, 61%, 16%)";
        }
       
        valor.textContent= contador
    });
});

