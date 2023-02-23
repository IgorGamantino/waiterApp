/* eslint-disable prettier/prettier */
export class ProductDto {
  name: string;
  icon: string;
  imagePath: string;
  price: number;
  ingredients: string | { name: string; icon: string; }[];
  categoryID: string;
}
