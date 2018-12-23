import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})
export class FilterDisplayComponent {
    @Input() filter: any;
    @Output() unfiltered = new EventEmitter();

    unfilter($event) {
        this.unfiltered.emit({
            filter: this.filter,
            $event
        });
    }
}



