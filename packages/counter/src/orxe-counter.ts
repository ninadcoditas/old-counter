import { html, customElement, LitElement } from 'lit-element';
import styles from './counter-css';

@customElement('orxe-counter')
export default class OrxeCounter extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <p>Hello, Welcome to lit Elements</p>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
