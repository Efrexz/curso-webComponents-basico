class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow( {mode: "open"})
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <h2 class="title">Titulo Prueba</h2>
        <p>Este es un texto de prueba</p>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            h2{
                color: red;
            }
        </style>
        `
    }

    render(){
        /*Tenemos que colocar.shadowRoot es necesario para agregar elementos al árbol DOM encapsulado dentro del shadow DOM.*/
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
};

customElements.define("my-element", myElement)