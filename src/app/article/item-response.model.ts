import {Article} from './article.model';

export interface ItemResponse {
  page: number;
  total: number;
  limit: number;
  _embedded: {
    articles: Article[];
    aggregations: any;
  };
}
