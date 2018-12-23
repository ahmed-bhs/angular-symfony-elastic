import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Aggregation} from '../aggregation.modle';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-supplier-filter',
    templateUrl: './supplier-filter.component.html',
    styleUrls: ['./supplier-filter.component.css']
})
export class SupplierFilterComponent {

    form: FormGroup;
    suppliersFormArray: FormArray;
    @Input() suppliers: Aggregation[];
    @Output() eventEmitterFilter = new EventEmitter<number>();

    constructor(formBuilder: FormBuilder) {

        this.form = formBuilder.group({
            'suppliers': formBuilder.array([])
        });
    }

    filter($event, isChecked: boolean) {

        const categoryId = JSON.parse($event).id;
        this.suppliersFormArray = <FormArray>this.form.controls.suppliers;

        if (isChecked) {
            this.suppliersFormArray .push(new FormControl(categoryId));
        } else {
            let index = this.suppliersFormArray.controls.findIndex(x => x.value == categoryId);
            this.suppliersFormArray.removeAt(index);
        }
    }

    submit($event) {
        this.eventEmitterFilter.emit($event.suppliers);
    }
}
