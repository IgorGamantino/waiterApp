export class ProductDto {
  name: string;
  icon: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
  }[];

  categoryID: string;
}
