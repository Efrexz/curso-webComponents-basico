class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow( {mode: "open"})
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <h2>
            <slot></slot>
        </h2>

        ${this.getStyles()}
        `;//Añadimos el <slot> para que tome lo que esta fuera en la etiqueta en el HTML
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
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
};

customElements.define("my-element", myElement)