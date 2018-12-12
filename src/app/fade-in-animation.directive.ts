import {Component, Directive, HostBinding} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: '[appFadeInAnimation]',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:'0'}),
        animate(600, style({opacity:'1'}))
      ])
    ])
  ],
  template: `<ng-content></ng-content>`,
})
export class FadeInAnimationDirective {
  @HostBinding('@fadeIn') trigger = '';
}
