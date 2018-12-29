import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Aggregation} from '../model/aggregation.modle';

@Component({
    selector: 'app-category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
    categoryQuery = '';
    @Input() categories: Aggregation[];
    @Output() eventEmitterFilter = new EventEmitter<number>();

    filter($category: string) {
        this.eventEmitterFilter.emit(JSON.parse($category));
    }
}
