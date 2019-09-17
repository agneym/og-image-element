import { html, css, LitElement } from 'lit-element';

export class OgImageElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
        width: 100vw;
        background: var(--background, #ffffff);
        color: var(--font-color, #000000);
        font-size: var(--font-size, 100%);
      }
      main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        padding: 0 8rem;
        text-align: center;
      }
      h1 {
        font-weight: 400;
        letter-spacing: 0.1rem;
        font-size: 4em;
        font-family: var(--heading-font, serif);
      }
      p {
        font-size: 1em;
      }
      .image-container {
        margin-bottom: 1rem;
        width: 100%;
        height: 15%;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return html`
      <main>
        <div class="image-container">
          <slot name="image"></slot>
        </div>
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>${this.subtitle}</p>
      </main>
    `;
  }
}
