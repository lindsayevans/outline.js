/**
 * Handles initialisation of the library, mouse/keyboard events & setting relevant CSS
 *
 * TODO:
 * - Add 'removeEventListeners'
 * - Make add/remove event listeners public
 * - CSS + event names should be in config
 */
export class RemoveFocusOutline {

    private $style: HTMLStyleElement;

    /**
     * The CSS injected for mouse users
     */
    private mouseCss = ':focus{outline:0}::-moz-focus-inner{border:0}';

    /**
     * The CSS injected for keyboard users
     */
    private keyboardCss = '';

    constructor() {
        this.addStyleElement();
        this.addEventListeners();
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

        // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
        this.addEventListener('mousedown', () => {
            this.setCss(this.mouseCss);
        });

        this.addEventListener('keydown', () => {
            this.setCss(this.keyboardCss);
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
