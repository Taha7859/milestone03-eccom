import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const query = `*[_type=='product' && slug.current=="${slug}"] {
    title
  }[0]`;

  const product: { Title: string } | null = await client.fetch(query);

  return {
    title: product?.Title || 'Product Details',
    description: `Find out more about ${product?.Title || 'this product'}.`,
  };
}