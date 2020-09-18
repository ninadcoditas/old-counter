var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, property } from 'lit-element';
import styles from './card-css';
import { TranslationClass } from '@orxe-culture/lit';
import '@orxe-components/button';
let OrxeCard = class OrxeCard extends TranslationClass {
    constructor() {
        super(...arguments);
        this.cardType = 'default-card';
        this.closeIcon = false;
        this.a11yCloseLabel = '';
    }
    render() {
        return html `
      <div data-testid="card-container" class="card__container" card-type=${this.cardType}>
        <slot></slot>
        ${this._renderCloseIcon()}
      </div>
    `;
    }
    _renderCloseIcon() {
        if (this.cardType === 'floating-card' && this.closeIcon) {
            return html `
        <orxe-button
          class="button__icon--close"
          kind="iconOnly"
          icon="ic-close"
          icon-size="small"
          a11y-label=${this.a11yCloseLabel || this.t('orxe-card.ally_close_label')}
          data-testid="close-icon"
          @click=${this._destroyFloatingCard}
        >
        </orxe-button>
      `;
        }
    }
    _destroyFloatingCard() {
        this.remove();
    }
};
OrxeCard.styles = styles;
__decorate([
    property({ type: String, reflect: true, attribute: 'card-type' }),
    __metadata("design:type", Object)
], OrxeCard.prototype, "cardType", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'close-icon' }),
    __metadata("design:type", Object)
], OrxeCard.prototype, "closeIcon", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'a11y-close-label' }),
    __metadata("design:type", Object)
], OrxeCard.prototype, "a11yCloseLabel", void 0);
OrxeCard = __decorate([
    customElement('orxe-card')
], OrxeCard);
export default OrxeCard;
