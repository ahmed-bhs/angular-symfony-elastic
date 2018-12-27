import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Aggregation} from '../model/aggregation.modle';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Filter} from '../model/filter.model';

@Component({
    selector: 'app-supplier-filter',
    templateUrl: './supplier-filter.component.html',
    styleUrls: ['./supplier-filter.component.css']
})
export class SupplierFilterComponent implements  OnChanges{
    ngOnChanges(){

    }
    form: FormGroup;
    suppliersFormArray: FormArray;
    @Input() suppliers: Aggregation[];
    @Input() filters: Filter[];
    @Output() eventEmitterFilter = new EventEmitter<number>();

    constructor(formBuilder: FormBuilder) {console.log(this.filters);
        this.form = formBuilder.group({
            'suppliers': formBuilder.array([])
        });
    }

    filter($label: string, isChecked: boolean) {
        const supplier = JSON.parse($label);

        this.suppliersFormArray = <FormArray>this.form.controls.suppliers;

        if (isChecked) {
            this.suppliersFormArray.push(new FormControl(supplier));
        } else {
            const index = this.suppliersFormArray.controls.findIndex(x => x.value.id === supplier.id);
            this.suppliersFormArray.removeAt(index);
        }
    }

    submit($event) {
        this.eventEmitterFilter.emit($event.suppliers);
    }
}
