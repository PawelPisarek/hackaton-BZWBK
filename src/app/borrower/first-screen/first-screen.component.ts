import { Component, OnChanges, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-first-screen',
  animations: [
    trigger('flyOut', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            display: 'none'
        })),
        transition('small <=> large', animate('600ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(0)', offset: 0}),
            style({opacity: 1, transform: 'translateX(-15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(-1000px)',     offset: 1.0})
        ]))),
    ]),
  ],
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent{
 @Input() isVisible : boolean = true;
  constructor() { }
   state: string = 'small';
   animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
