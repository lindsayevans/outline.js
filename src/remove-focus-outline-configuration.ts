export class RemoveFocusOutlineConfiguration {
    /**
     * The CSS injected for mouse users
     */
    mouseCss = ':focus{outline:0}';

    /**
     * The CSS injected for keyboard users
     */
    keyboardCss = '';

    /**
     * Mouse event to listen for
     *
     * Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
     */
    mouseEvent = 'mousedown';

    /**
     * Keyboard event to listen for
     */
    keyboardEvent = 'keydown';

}
