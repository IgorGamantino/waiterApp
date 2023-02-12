import { Category } from 'src/category/interfaces/category';

export interface Product {
  _id: string;
  name: string;
  icon: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
  }[];
  category: Category;
}
