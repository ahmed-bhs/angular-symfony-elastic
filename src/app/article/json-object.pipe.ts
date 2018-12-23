import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jsonObject'})
export class JsonObject implements PipeTransform {
    transform(value: string): any {
        return JSON.parse(value);
    }
}