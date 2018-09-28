/* tslint:disable */
// Temporarily adding non-standard browser stuff
interface Document {
    attachEvent(type: string, listener: EventListenerOrEventListenerObject): void;
}

interface HTMLElement {
    styleSheet: {
        cssText?: string;
    }
}
