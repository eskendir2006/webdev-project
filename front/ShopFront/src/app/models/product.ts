export interface Product {
  id?: number;
  name: string;
  photo_url: string;
  description: string[]; // JSONField in backend
  quantity: number;
  created_at?: string;
}
