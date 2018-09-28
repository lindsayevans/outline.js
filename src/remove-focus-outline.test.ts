import 'jest';

import { RemoveFocusOutline } from './remove-focus-outline';

let rfo: RemoveFocusOutline;
let $link: HTMLAnchorElement;
let $btn: HTMLButtonElement;
let setCssSpy: any;

function triggerEvent(type: string, $element = document.body) {
    $element.dispatchEvent(new CustomEvent(type, { bubbles: true }))
}

describe('The library should...', () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <a href="javascript:void(0)">Test link</a>
            <button type="button">Test button</button>
        `

        $link = document.querySelector('a')
        $btn = document.querySelector('button')

        rfo = new RemoveFocusOutline({
            mouseCss: '.TEST_MOUSE_CSS{}',
            keyboardCss: '.TEST_KB_CSS{}',
        })

        setCssSpy = jest.spyOn(rfo as any, 'setCss')

    })

    afterEach(() => {
        rfo.destroy()
        document.getElementsByTagName('html')[0].innerHTML = ''
    })

    test('be defined', () => {
        expect(rfo).toBeInstanceOf(RemoveFocusOutline)
    })

    test('inject the style element to the DOM once only', () => {
        const $style = document.querySelectorAll('[data-remove-focus-outline-style]')

        expect($style.length).toBe(1)
    })

    test('remove the style element when destroyed', () => {
        rfo.destroy()
        const $style = document.querySelectorAll('[data-remove-focus-outline-style]')

        expect($style.length).toBe(0)
    })

    test('remove event listeners when told to', () => {
        setCssSpy.mockClear()
        rfo.removeEventListeners()
        triggerEvent('mousedown')
        triggerEvent('keydown')

        expect(setCssSpy).not.toHaveBeenCalled()
    })

    test('remove event listeners when destroyed', () => {
        setCssSpy.mockClear()
        rfo.destroy()
        triggerEvent('mousedown')
        triggerEvent('keydown')

        expect(setCssSpy).not.toHaveBeenCalled()
    })

    test('set the correct CSS on mousedown', () => {
        triggerEvent('mousedown')
        const $style = document.querySelectorAll('[data-remove-focus-outline-style]')

        expect($style.item(0).innerHTML).toContain('TEST_MOUSE_CSS')
        expect($style.item(0).innerHTML).not.toContain('TEST_KB_CSS')
    })

    test('set the correct CSS on keydown', () => {
        triggerEvent('keydown')
        const $style = document.querySelectorAll('[data-remove-focus-outline-style]')

        expect($style.item(0).innerHTML).toContain('TEST_KB_CSS')
        expect($style.item(0).innerHTML).not.toContain('TEST_MOUSE_CSS')
    })

    // TODO:
    // * configuration merges correctly

})
