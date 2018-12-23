import {HttpParams} from '@angular/common/http';

export function createHttpParams(params: {}): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(param => {
        if (params[param]) {

            console.log(params[param]);
            if (params[param] instanceof Array) {
                params[param].forEach(value => {
                    httpParams = httpParams.append(param, value);
                });
            } else {
                httpParams = httpParams.append(param, params[param]);
            }
        }
    });

    return httpParams;
}
