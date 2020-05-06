import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() message = '';

  showSpinners: boolean [] = [false, false, false, false, false];

  constructor() {
  }

  ngOnInit() {
    this.recShowSpinner(0);
  }

  recShowSpinner(index: number) {
    if ( index < this.showSpinners.length ) {
    setInterval(() => {
      this.showSpinners[index]=true;
      this.recShowSpinner(index+1);
    }, 100);
    }
  }
}
