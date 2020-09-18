import { css } from 'lit-element';
export default css `:host{--card-font-family: var(--global-font-family);--card-font-color: var(--secondary-text);--card-font-weight: var(--font-weight-regular);--card-close-icon-color: currentColor;--card-background-color: var(--neutral);--card-min-height: 48px;--floating-card-max-height: 177px}.card__container{background-color:var(--card-background-color);min-height:var(--card-min-height);padding:var(--spacing-05);font-family:var(--card-font-family);font-size:1.2rem;color:var(--card-font-color);font-weight:var(--card-font-weight)}.card__container[card-type='floating-card']{position:relative;box-shadow:0 2px 6px rgba(0,0,0,0.16);max-height:var(--card-max-height)}.card__container[card-type='floating-card'] .button__icon--close{--button-icon-color: var(--card-close-icon-color);position:absolute;top:0;right:0;cursor:pointer;background-color:inherit}`;
