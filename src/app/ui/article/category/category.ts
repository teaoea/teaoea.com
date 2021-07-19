import config from '../../../../config.json';

export interface Category {
  key: string
  value: string
}

export const categories: Category[] = [
  {
    key: config.category.key,
    value: config.category.value
  }
];
