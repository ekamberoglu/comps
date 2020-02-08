import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.closeModal.emit();
  }
}
