// it resolves this issue of repetitive code or multiple properties for a ui component (elementRef && components itself create from the reference)
// async ngAfterViewInit(): Promise < void> {
//     var elementRef = (this.addNotesModal as any) as ElementRef;
//     this.addNotesModal = uikit.modal(elementRef.nativeElement);
// }
import { UIkitElement } from './types/uikit.types';
export declare type UIkitComponent = UIkitElement;
export function UIkitComponent(uikitConstructor: any, options?: any) {
    return function (target: any, key: string) {
        var newVal;
        Object.defineProperty(target, key, {
            get: () => newVal,
            set: (value) => newVal = options? uikitConstructor(value.nativeElement, options) : uikitConstructor(value.nativeElement)
        });
    }
}