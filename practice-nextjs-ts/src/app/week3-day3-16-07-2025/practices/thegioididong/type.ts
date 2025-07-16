export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
}

export const baseUrl = "https://api.escuelajs.co/api/v1/products";
