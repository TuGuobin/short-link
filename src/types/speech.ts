export interface SpeechRecognitionEvent {
    results: SpeechRecognitionResultList;
}

export class SpeechRecognitionType {
    lang: string = 'en-US';
    continuous: boolean = false;
    interimResults: boolean = false;
    maxAlternatives: number = 1;
    onresult: null | ((event: SpeechRecognitionEvent) => void) = null;
    onstart: null | (() => void) = null;
    onstop: null | (() => void) = null;
    onend: null | (() => void) = null;
    onerror: null | ((event: Error) => void) = null;
    stop: () => void = () => { };
    start: () => void = () => { };
}