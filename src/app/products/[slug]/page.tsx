import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

import React from 'react';
import { FaTruckArrowRight } from 'react-icons/fa6';
import { IoStarOutline } from 'react-icons/io5';

// Define the type for Sanity image
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface IProductData {
  Title: string;
  description: string;
  image: SanityImage; // Updated type for image
  price: number;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch product data from Sanity
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product: IProductData = await client.fetch(query, { slug });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='bg-white my-10'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          {/* Render the image */}
          <Image
            src={urlFor(product.image).url()}
            alt={product.Title}
            width={200}
            height={200}
            className='w-full h-auto rounded'
          />
          <div className='md:py-8'>
            <div className='mb-2 md:mb-3 md:mt-10'>
              <span className='text-2xl font-bold text-gray-800 lg:text-4xl'>
                {product.Title}
              </span>
            </div>
            <div className='mb-5 flex item-center gap-3'>
              <Button className='rounded-full gap-x-2'>
                <span className='text-sm'>4.2</span>
                <IoStarOutline className='h-5 w-5' />
              </Button>
              <span className='mt-2 text-sm text-gray-500 transition duration-100'>
                56 Rating
              </span>
            </div>
            <div className='mb-4'>
              <div className='flex item-end gap-3'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                  ${product.price}
                </span>
                <span className='text-red-500 line-through mt-0.5'>
                  ${product.price + 30}
                </span>
              </div>
              <span className='text-sm text-gray-500'>Incl. vat plus shipping</span>
            </div>
            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <FaTruckArrowRight className='w-6 h-6' />
              <span className='text-sm'>2- 4 Day shipping</span>
            </div>
            <div className='flex gap-x-2.5'>
              {/* <AddtoCart  currency='USD' description={data.description} price={data.price} image={data.image} name={data.title}/> */}
              <Button variant={'outline'}>Checkout Now</Button>
              
            </div>
            <p className='mt-8 text-gray-500 text-xl'>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
