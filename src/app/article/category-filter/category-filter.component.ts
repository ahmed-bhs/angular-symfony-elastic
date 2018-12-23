import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Aggregation} from '../aggregation.modle';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {

  constructor() { }
     @Input() categories: Aggregation[];
     @Output() eventEmitterFilter = new EventEmitter<number>();

    filter($category) {
        this.eventEmitterFilter.emit(JSON.parse($category.label));
    }
}
