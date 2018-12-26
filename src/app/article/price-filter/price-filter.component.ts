import {Component, OnInit, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import {Aggregation} from '../model/aggregation.modle';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnChanges {
    @Input('floor') floor ;
    @Input('ceil') ceil;
    minValue: number = 100.00;
    maxValue: number = 400.00;

    options: Options;
    ngOnChanges(){
        if( this.floor && this.ceil) {

            this.options = {
                floor: Number(this.floor.toFixed(2)),
                ceil: Number(this.ceil.toFixed(2))

            };
        }
    }
constructor() {

}

  @Output() eventEmitterFilter = new EventEmitter<{}>();


 filter($event) {
     this.eventEmitterFilter.emit($event);
 }
}
