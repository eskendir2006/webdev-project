export interface Review {
  id?: number;
  product: number;
  name: string;
  text: string;
  rating: number;
  created_at?: string;
}
