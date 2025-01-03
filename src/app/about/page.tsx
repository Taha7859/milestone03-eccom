import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <main>
        {/* section01 */}
      <header 
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-5 bg-blue-900" 
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-5 text-white">Discover the legacy of precision craftsmanship and timeless elegance in every watch we create.</p>
      </header>
      {/* section02 */}
      <section className="my-20">
  <h3 className="text-center text-3xl font-semibold text-blue-600">Who I Am</h3>
  <div className="mt-20 flex flex-col lg:flex-row sm:justify-center space-y-10 lg:space-y-0 lg:space-x-10 mx-10 xl:mx-40">
    {/* Card 1 */}
    <div className="bg-gray-800 rounded-lg p-5">
      <h4 className="text-blue-500 text-center font-medium text-xl">
        Education
      </h4>
      <p className="text-center text-gray-300">
        O-Level from Karachi Pakistan at the age of 16. Continuously learning through the Governor IT Initiative.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-800 rounded-lg p-5">
      <h4 className="text-blue-500 text-center font-medium text-xl">
        Education
      </h4>
      <p className="text-center text-gray-300">
        O-Level from Karachi Pakistan at the age of 16. Continuously learning through the Governor IT Initiative.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-800 rounded-lg p-5">
      <h4 className="text-blue-500 text-center font-medium text-xl">
        Education
      </h4>
      <p className="text-center text-gray-300">
        O-Level from Karachi Pakistan at the age of 16. Continuously learning through the Governor IT Initiative.
      </p>
    </div>
  </div>
</section>
{/* section 3 */}
<section className="my-40 px-4">
  <h3 className="text-center text-3xl font-semibold text-blue-600">Meet My Team</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
    {/* Team Member 1 */}
    <div className="flex flex-col items-center">
      <Image
        src="/person1.png"
        alt="Image 1"
        width={150}
        height={150}
        className="rounded-full w-[140px] h-[140px]"
      />
      <p className="text-blue-300 mt-4 text-xl">John Doe</p>
      <p>Founder & CEO</p>
    </div>

    {/* Team Member 2 */}
    <div className="flex flex-col items-center">
      <Image
        src="/person2.png"
        alt="Image 2"
        width={150}
        height={150}
        className="rounded-full w-[140px] h-[140px]"
      />
      <p className="text-blue-300 mt-4 text-xl">Jane Smith</p>
      <p>Head of Product Design</p>
    </div>

    {/* Team Member 3 */}
    <div className="flex flex-col items-center">
      <Image
        src="/person3.png"
        alt="Image 3"
        width={150}
        height={150}
        className="rounded-full w-[140px] h-[140px]"
      />
      <p className="text-blue-300 mt-4 text-xl">Michael Brown</p>
      <p>Marketing Director</p>
    </div>
  </div>

  {/* Comment Section */}
  <div className="text-center py-20">
    <div className="text-blue-300 text-3xl mb-2">Leave a Comment</div>
  </div>
</section>

    </main>
  )
}

export default About
