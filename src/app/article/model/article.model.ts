export interface Article {
  id: number;
  score: number;
  percentage: 100;
  data: {
    highlight: {title: string}
    id: number
    title: string;
    image: string;
    brand: string;
    label: string;
    supplierId: number;
    categoryid: number;
    category: {
      id: number;
      name: string;
      faicon: string;
    }
    aggs: {
      title: string;
      label: string;
      visible: string;
      brand: string;
      supplierName: string;
      categoryName: string;
      supplier: string;
      category: string;
    }
  };
}
