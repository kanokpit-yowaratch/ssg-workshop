// Product type definition
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
}

// Category type for filtering
export type Category = 'all' | 'electronics' | 'home' | 'furniture';

export type IdParams = Record<'id', string>;
export type SlugParams = Record<'slug', string>;
export type SearchParams = Record<'q', string>;
export type TagParams = Record<'tag', string>;

export type IdProps = {
  params: Promise<IdParams>;
};

export type SlugProps = {
  params: Promise<SlugParams>;
};

export type SearchProps = {
  searchParams: Promise<SearchParams>;
};

export type TagProps = {
  params: Promise<TagParams>;
};
