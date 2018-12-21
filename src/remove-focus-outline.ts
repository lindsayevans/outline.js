import { RemoveFocusOutlineConfiguration } from './remove-focus-outline-configuration';

/**
 * Handles initialisation of the library, mouse/keyboard events & setting relevant CSS
 */
export class RemoveFocusOutline {

    private $style: HTMLStyleElement;

    private boundSetMouseCss: EventListenerOrEventListenerObject;
    private boundSetKeyboardCss: EventListenerOrEventListenerObject;

    private supportsCssText = false;

    public config = new RemoveFocusOutlineConfiguration();

    /* istanbul ignore next */
    constructor(options: Partial<RemoveFocusOutlineConfiguration> = {}) {
        this.config = this.mergeConfiguration(options);
        this.addStyleElement();
        this.supportsCssText = this.detectSupportsCssText();
        this.addEventListeners();
        this.addClassName();
    }

    /**
     * Removes all event listeners & the style element
     */
    public destroy() {
        this.$style.remove();
        this.removeEventListeners();
    }

    /**
     * Merges user-supplied configuration options with defaults
     */
    private mergeConfiguration(options: Partial<RemoveFocusOutlineConfiguration>): RemoveFocusOutlineConfiguration {
        return Object.assign(this.config, options);
    }

    /**
     * Adds an empty `style` element to the document
     */
    private addStyleElement() {
        this.$style = document.createElement('style');
        this.$style.setAttribute('data-remove-focus-outline-style', '');
        document.getElementsByTagName('head')[0].appendChild(this.$style);
    }

    /**
     * Adds a class name to the HTML element when initialised so we can easily target our CSS
     */
    private addClassName() {
        document.querySelector('html').classList.add('--remove-focus-outline--initialised');
    }

    /**
     * Adds event listeners for mousedown & keydown
     */
    public addEventListeners() {
        this.boundSetMouseCss = this.setMouseCss.bind(this);
        this.addEventListener(this.config.mouseEvent, this.boundSetMouseCss);

        this.boundSetKeyboardCss = this.setKeyboardCss.bind(this);
        this.addEventListener(this.config.keyboardEvent, this.boundSetKeyboardCss);
    }

    /**
     * Removes event listeners for mousedown & keydown
     */
    public removeEventListeners() {
        this.removeEventListener(this.config.mouseEvent, this.boundSetMouseCss);
        this.removeEventListener(this.config.keyboardEvent, this.boundSetKeyboardCss);
    }

    private setMouseCss() {
        this.setCss(this.config.mouseCss);
    }

    private setKeyboardCss() {
        this.setCss(this.config.keyboardCss);
    }

    private currentCss: string;

    /**
     * Sets the CSS
     */
    private setCss(css: string): boolean {

        if (css !== this.currentCss) {
            this.currentCss = css;
            /* istanbul ignore if */
            // IE8 compatibility
            if (this.supportsCssText) {
                this.$style.styleSheet.cssText = css;
            } else {
                this.$style.innerHTML = css;
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Basic cross-browser event handling
     */
    private addEventListener(type: string, callback: EventListenerOrEventListenerObject) {
        /* istanbul ignore else */
        if (this.supportsDomEvents()) {
            document.addEventListener(type, callback);
        } else {
            // IE8 compatibility
            document.attachEvent('on' + type, callback);
        }
    }

    private removeEventListener(type: string, callback: EventListenerOrEventListenerObject) {
        /* istanbul ignore else */
        if (this.supportsDomEvents()) {
            document.removeEventListener(type, callback);
        } else {
            // IE8 compatibility
            document.detachEvent('on' + type, callback);
        }
    }

    /**
     * Detect whether the browser supports `document.addEventListener`
     */
    private supportsDomEvents(): boolean {
        return 'addEventListener' in document;
    }

    /**
     * Detect whether the browser supports `styleSheet.csstext`
     */
    private detectSupportsCssText(): boolean {
        return !!this.$style.styleSheet;
    }

}
