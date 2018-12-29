import {Aggregation} from './aggregation.modle';

export interface Aggregations {
    brands: Aggregation;
    category: Aggregation;
    label: Aggregation;
    suppliers: Aggregation;
    without_filter_min: {value: number};
    without_filter_max: {value: number};

}
