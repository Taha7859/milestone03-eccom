import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
  const query = `*[_type == 'product'] { "slug": slug.current }`;
  const products: { slug: string }[] = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug,
  }));
}