import { Product } from "./product";

export type ProductCategory = {
  id: number;
  name: string;
  product: Product[];
};
