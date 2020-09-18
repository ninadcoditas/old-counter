import { TranslationClass } from '@orxe-culture/lit';
import '@orxe-components/button';
export default class OrxeCard extends TranslationClass {
    cardType: string;
    closeIcon: boolean;
    a11yCloseLabel: string;
    render(): import("lit-element").TemplateResult;
    private _renderCloseIcon;
    private _destroyFloatingCard;
    static styles: import("lit-element").CSSResult;
}
