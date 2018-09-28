import 'jest';

import { RemoveFocusOutline } from './remove-focus-outline';

let rfo: RemoveFocusOutline;

describe('The library should should...', () => {

    beforeEach(() => {
        rfo = new RemoveFocusOutline()
    })

    test('be defined', () => {
        expect(rfo).toBeInstanceOf(RemoveFocusOutline)
    })

})
