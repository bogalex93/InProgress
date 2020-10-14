import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-overlay',
  templateUrl: './confirmation-overlay.component.html',
  styleUrls: ['./confirmation-overlay.component.scss']
})
export class ConfirmationOverlayComponent implements OnInit {

  @Input() confirmQuestion: string;
  @Input() confirmAction: () => void;
  @Input() cancelAction: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
