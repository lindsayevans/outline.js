import { RemoveFocusOutlineConfiguration } from './remove-focus-outline-configuration';

/**
 * Handles initialisation of the library, mouse/keyboard events & setting relevant CSS
 *
 * TODO:
 * - Add 'removeEventListeners'
 * - Make add/remove event listeners public
 */
export class RemoveFocusOutline {

    private $style: HTMLStyleElement;

    public config = new RemoveFocusOutlineConfiguration();

    constructor(options: Partial<RemoveFocusOutlineConfiguration> = {}) {
        this.config = this.mergeConfiguration(options);
        this.addStyleElement();
        this.addEventListeners();
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
        document.getElementsByTagName('head')[0].appendChild(this.$style);
    }

    /**
     * Adds event listeners for mousedown & keydown
     */
    private addEventListeners(d = document) {

        this.addEventListener(this.config.mouseEvent, () => {
            this.setCss(this.config.mouseCss);
        });

        this.addEventListener(this.config.keyboardEvent, () => {
            this.setCss(this.config.keyboardCss);
        });

    }

    /**
     * Sets the CSS
     */
    private setCss(css: string) {
        if (this.supportsCssText()) {
            this.$style.styleSheet.cssText = css;
        } else {
            this.$style.innerHTML = css;
        }
    }

    /**
     * Basic cross-browser event handling
     */
    private addEventListener(type: string, callback: EventListenerOrEventListenerObject) {
        if (this.supportsDomEvents()) {
            document.addEventListener(type, callback);
        } else {
            document.attachEvent('on' + type, callback);
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
    private supportsCssText(): boolean {
        return !!this.$style.styleSheet;
    }

}
