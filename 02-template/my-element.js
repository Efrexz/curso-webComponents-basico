class myElement extends HTMLElement{
    constructor(){
        super();
    }
//Generamos una funcion en cual tendremos nuestro template html y esta
    //Funcion retornara este template
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <h2>Titulo Prueba</h2>
        <p>Este es un texto de prueba</p>
        ${this.getStyles()}
        `;/*Para utilizar nuestros estilos de nuestro metodo lo llamamos desde nuestro template html
        para que se agreguen*/
        return template;
    }
    //metodo para generar estilos(lo hacemos separado del template para mas orden pero puede ir junto)
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
        //Agregamos el elemento al dom por dentro utilzamos la funcion que genera el template
      //y utilizamos el content.clone(true) para clonar el elemento
        //Le ponemos true porque si este fuera false solo tomaria las etiquetas padre y no
          //Todo lo que tienen por dentro las etiquetas
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
};

customElements.define("my-element", myElement)