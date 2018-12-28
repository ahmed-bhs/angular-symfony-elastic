import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Aggregation} from '../model/aggregation.modle';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Filter} from '../model/filter.model';

@Component({
    selector: 'app-supplier-filter',
    templateUrl: './supplier-filter.component.html',
    styleUrls: ['./supplier-filter.component.css']
})
export class SupplierFilterComponent implements OnChanges {

    form: FormGroup;
    suppliersFormArray: FormArray;
    @Input() suppliers: Aggregation[];
    @Input() filters: number[];
    @Output() eventEmitterFilter = new EventEmitter<any>();

    ngOnChanges() {
        if ( typeof this.filters !== 'undefined' && this.filters.length >= 0) {
          const control = <FormArray>this.form.controls['suppliers'];

          for (let i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
          }

          this.filters.forEach(supplier => {
              this.suppliersFormArray.push(new FormControl(supplier));
          });
      }
  }

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            'suppliers': new FormArray([])
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
