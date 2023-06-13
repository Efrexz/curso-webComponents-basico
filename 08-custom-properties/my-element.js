class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h1>
                <slot name="title"></slot>
            </h1>
            <div>
                <p>
                    <slot name="parrafo"></slot>
                </p>
            </div>

        </section>

        ${this.getStyles()}
        `;

        return template;
    }
    getStyles() {
    return `
        <style>
            :host {
                --primary-color: tomato;
                --secondary-color: salmon;
                --heading-primary: 40px;
                --heading-secondary: 30px;
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: grey;
            }
            section{
                background-color: var(--primary-color);
            }
            h1 {
                font-size: var(--heading-primary);
            }
            section div p {
                background-color: var(--secondary-color);
                font-size: var(--heading-secondary);
            }
        </style>
    `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", myElement);