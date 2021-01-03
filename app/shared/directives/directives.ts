import { Directive, ElementRef, Input, Output, EventEmitter, AfterViewInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { ConfirmationOverlayComponent } from '../components/confirmation-overlay/confirmation-overlay.component';

@Directive({ selector: '[confirm-delete]' })
export class ConfirmDeleteDirective {

  @Output() onConfirm = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  private nativeElement: HTMLElement;
  private confirmationOverlay: ComponentRef<ConfirmationOverlayComponent>;

  constructor(elRef: ElementRef, private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) {
    this.nativeElement = elRef.nativeElement as HTMLElement;
    this.nativeElement["confirmDelete"] = () => this.confirmDelete();
  }

  private confirmDelete() {

    this.nativeElement.style.filter = 'blur(2px)';
    this.nativeElement.parentElement.style.position = 'relative';

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmationOverlayComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.confirmAction = () => this.handleAction(true);
    componentRef.instance.cancelAction = () => this.handleAction(false);
    this.confirmationOverlay = componentRef;

    var confirmationElement = componentRef.location.nativeElement;
    confirmationElement.style.left = this.nativeElement.offsetLeft - 1 + 'px';
    confirmationElement.style.top = this.nativeElement.offsetTop - 1 + 'px';
    confirmationElement.style.width = this.nativeElement.clientWidth + 2 + 'px';
    confirmationElement.style.height = this.nativeElement.clientHeight + 2 + 'px';
  }

  private handleAction(confirm: boolean): void {
    this.viewContainerRef.remove();
    this.nativeElement.style.filter = '';
    this.nativeElement.parentElement.style.position = 'relative';
    if (confirm && this.onConfirm.observers.length) {
      this.onConfirm.emit();
    }
    if (!confirm && this.onCancel.observers.length) {
      this.onCancel.emit();
    }
  }


}



@Directive({
  selector: '[ngInit]'
})
export class NgInitDirective {
  @Output('ngInit') initEvent: EventEmitter<HTMLElement> = new EventEmitter();
  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.initEvent.emit(this.elRef.nativeElement);
  }
}
