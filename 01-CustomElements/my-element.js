const template = document.createElement('div');

template.innerHTML = `
    <style>
        p {
            color: blue;
        }

        .texto {
            color: red;
        }
    </style>

    <p class="texto">Hola mundo 2!!</p>
    <p>texto ejemplo para la clase!</p>
`;
//HTMLElement sirve para crear custom elements
class myElement extends HTMLElement{
    constructor(){
        super();//* Obtenemos acceso a todos los elementos y métodos de la clase que extendemos (heredamos)

        //*Aquí solo estamos creando la etiqueta p, pero aún no la veremos en el DOM
        this.p = document.createElement("p");
    }
    //*Esto es lo que agregará cosas al DOM
    connectedCallback(){
        this.p.innerText = "Hola mundo!!";
        this.appendChild(this.p);
        this.appendChild(template);//*Agregamos al DOM el template que creamos al inicio y tendrá los estilos que definimos
    }
};

customElements.define("my-element", myElement)//* Definimos que la clase se va a convertir en una etiqueta