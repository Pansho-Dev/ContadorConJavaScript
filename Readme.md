# <ContadorConJavaScript>

## Descripción

En este proyecto se crea un contador el cual tenga 3 botones, uno de resetear, uno de restar y uno de aumentar. Para poder llevar a cabo este proyecto hay que conocer lo siguiente en JavaScript:

* Conocimiento de condicionales: Saber como funciona el <b>IF,ELSE, ELSE IF</b>
* Manipulacion del DOM: <b>Acceder y Modificar</b> elementos del DOM.
* Conocimiento de bucles: Saber como funciona el <b>ForEach</b>.
* Eventos en JavaScript: Especificamente el <b>"click"</b>. 

<hr>

## Explicación

Primero lo que se hara, sera obtener el valor del contador y luego obtener todos los botones <b>(ocupando querySelectorAll)</b>, luego de que obtenemos los botones y los guardamos en una varible, lo que vamos a hacer sera ocupar un <b>forEach</b>, que recorrera los botones que le pasamos.

Luego haremos uso del parametro que se paso en el <b>forEach</b>, y lo ocuparemos para crear un evento de <b>click</b>, 

<b>Si surge alguna duda y quieres ver todos los valores que puede darte el evento al momento de hacer click, hace un console.log del parametro que ocupaste en el evento de click. En mi caso y el del codigo se llama procesos.</b>

Ahora crearemos una variable que almacene la clase del boton que apretamos, con currentTarget.classList, <b>currentTarget lo que hace es decirnos o asociar el evento con el boton que apretamos, ejemplo si apreto en "aumentar" el currentTarget me devolvera el boton que aprete que seria aumentar y con classList seleccionamos las clases</b>

Luego se crean los if para hacer validaciones con el metodo <b>contains, que lo que hace es buscar una palabra que tenga una variable</b>, y si aumenta se le suma al contador, sino se le resta, sino queda en 0. Luego le pasamos el valor al contador, con textContent. El otro if de los colores esta demas.