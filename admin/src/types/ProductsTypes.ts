export type ProductItem = {
  name: string;
  id: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  images: {
    color: string;
    colorCode: string;
    image: string;
  }[];
  reviews: any[];
};

