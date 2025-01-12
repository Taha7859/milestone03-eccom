"use client"
import {
    Sheet,
    SheetContent,
 
    SheetHeader,
    SheetTitle,
   
  } from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ShoppingCartModal(){

    const {cartCount,shouldDisplayCart, handleCartClick,cartDetails,removeItem,totalPrice}= useShoppingCart()
    return(
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}> 
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-auto">
                <ul className="-my-6 divide divide-gray-200">
                {cartCount === 0 ? (
                    <h1 className=" py-6">You dont have any item</h1>
                ):(
                    <>
                    {Object.values(cartDetails ?? {} ).map((entry)=>(
                        <li key={entry.id} className="flex py-6"> 
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image src={entry.image as string} alt="Product" width={100} height={100}/>
                        </div>
                            <div className="ml-4 flex flex-col flex-1">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{entry.name}</h3>
                                        <p className="ml-4">${entry.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
                                </div>
                                    <div className="flex flex-1 justify-between text-sm">
                                        <p className="text-gray-500">Best</p>
                                        <div>
                                            <button type="button" className="font-medium text-primary hover:text-primary/80" onClick={()=>removeItem(entry.id)}>Remove</button>
                                        </div>
                                    </div>
                            </div>
                        </li>
                    ))}
                    </>
                )}
                </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justfiy-between text-base font-medium text-gray-900">
                    <p>SubTotal:</p>
                    <p>$
                        {totalPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes are calculated at checkout</p>
                <div className="mt-6">
                    <Button className="w-full text-white"> checkout</Button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        OR <button className="text-md font-medium hover:text-primary/80" onClick={()=>handleCartClick()}>Continue Shopping</button>
                    </p>
                </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
}