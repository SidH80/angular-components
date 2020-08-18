import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter;
  constructor(
    private el: ElementRef,

  ) {
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }

}
