import React from 'react'
 

export default function Foot() {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left my-40 px-4 lg:mx-20 xl:mx-[350px]">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium">Free Delivery</h1>
            <p className="text-[#9f9f9f] text-sm sm:text-base">
              For all orders over $50, consectetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-medium">90 Days Return</h1>
            <p className="text-[#9f9f9f] text-sm sm:text-base">
              If goods have problems, consectetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-medium">Secure Payment</h1>
            <p className="text-[#9f9f9f] text-sm sm:text-base">
              100% secure payment, consectetur <br /> adipiscing elit.
            </p>
          </div>
        </div>
    </div>
  )
}
