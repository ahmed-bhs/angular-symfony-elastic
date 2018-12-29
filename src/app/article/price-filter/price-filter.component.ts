import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnChanges {
    @Input() floor ;
    @Input() ceil;
    @Output() eventEmitterFilter = new EventEmitter<{}>();
    min: any;
    max: any;

    options: Options;
    ngOnChanges() {
        if ( this.floor && this.ceil) {
          console.log( isNaN(this.max));
           if (isNaN(this.max) && isNaN(this.min)) {
            this.max = Number(this.ceil.toFixed(0)) || 0;

            this.min = Number(this.floor.toFixed(0)) || 0;
            console.log(this.min);
            this.options = {
              floor: this.floor,
              ceil: this.ceil,
              showSelectionBar: true,
              selectionBarGradient: {
                from: 'white',
                to: '#007bff'
              },
              showOuterSelectionBars: true,
              translate: (value: number, label: LabelType): string => {
                return value + '€';
              }
          };
           }


        }
    }

 filter() {
    this.eventEmitterFilter.emit({'ceil' : this.max, 'floor' : this.min});
 }
}
