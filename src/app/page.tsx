import Image from 'next/image'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { getProductData } from '@/sanity/lib/getProductData'
import { IoStar } from 'react-icons/io5'
import Foot from './component/foot/page'
import LikeButton from './component/like/page'

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}
interface Iproduct{
  description:string,
  Title:string,
  image:SanityImage,
  slug:string,
  price:number,
  discountedprice:string

}


async function Shop() {
 
  const data:Iproduct[] = await getProductData()
  console.log(data)
  
 
 
  return (
    <main className='my-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 px-4 mt-10 xl:grid-cols-6 lg:grid-cols-4">
  { 
   data.map( (item:Iproduct, index:number) => (   
     <div  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-300 " key={index}>
        <div className="h-auto w-full">
        <LikeButton></LikeButton>
        <Link href={`products/${item.slug}`} key={index}>
          <Image
            src={urlFor(item.image).url()}
            alt={"product"}
            width={300}
            height={300}
            className=" object-cover"
          />
          </Link>
        </div>
        <div className="space-y-2 mb-4">
          <div className='flex items-center text-yellow-400 text-lg'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <p className='text-black text-xs ml-2'>(190) reviews</p>
          </div>
          <h2 className="font-semibold text-lg mb-2 ">{item.Title}</h2>
          <p>{item.description}</p>
         <div className='flex space-x-2 items-center  '>
         <h3 className="text-gray-500 text-sm line-through">${item.price}</h3>
          <h3 className="font-medium">${item.discountedprice}</h3>
         </div>
         <p className=' md:mx-20 lg:mx-16 xl:mx-20'>
         {/* <AddToCart currency='USD' price={item.price} image={item.image} name={item.Title} description={item.description} /> */}
         
         </p>
        </div>
      </div>
  ))}
  
</div>
      <Foot></Foot>
    </main>
  )
}

export default Shop

