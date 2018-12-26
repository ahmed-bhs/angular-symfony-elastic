import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent {

  @Output() eventEmitterFilter = new EventEmitter<{}>();

 filter($event) {
     this.eventEmitterFilter.emit($event);
 }
}
