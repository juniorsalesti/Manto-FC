export type Category = 'Futebol' | 'NBA' | 'Premium';

export type Version = 'Torcedor' | 'Jogador' | 'Tailandesa 1.1';

export type FilterType = 'TODOS' | 'FUTEBOL' | 'NBA' | 'TORCEDOR' | 'JOGADOR' | 'TAILANDESA 1.1';

export interface Product {
  id: string;
  name: string;
  category: Category;
  version: Version;
  description: string;
  image: string;
  badge?: string;
  sizes: string[];
  fabric?: string;
  details?: string[];
  featured?: boolean;
}
