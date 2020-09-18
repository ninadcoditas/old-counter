var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, LitElement } from 'lit-element';
import styles from './counter-css';
let OrxeCounter = class OrxeCounter extends LitElement {
    render() {
        return html `
      <p>Hello, Welcome to lit Elements</p>
    `;
    }
};
OrxeCounter.styles = styles;
OrxeCounter = __decorate([
    customElement('orxe-counter')
], OrxeCounter);
export default OrxeCounter;
