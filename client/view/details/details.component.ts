import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  states = ['home', 'schedule', 'signup'];
  currentState = 0;

  constructor() {
  }

  onNextClick() {
    this.currentState = this.currentState <= this.states.length ? this.currentState + 1 : this.states.length;
  }

  onBackClick() {
    this.currentState = this.currentState >= 1 ? this.currentState - 1 : 0;
  }

}
