class myCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("hola desde el constructor - Memoria");
    }
connectedCallback(){
    console.log("hola desde el DOM");
}
disconnectedCallback(){
    console.log("adios del DOM");
}
}
customElements.define("my-custom-element", myCustomElement);


document.querySelector("my-custom-element").remove();