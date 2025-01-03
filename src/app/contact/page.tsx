import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import Foot from '../component/foot/page';

export default function Contact() {
  return (
    <main>
      <section>
        {/* Section 01 */}

        {/* Section 02 */}
        <div className="mt-20 px-4 sm:px-8 lg:px-20">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center">
            Get In Touch With Us
          </h1>
          <p className="text-[#9f9f9f] text-center mt-4 text-sm sm:text-base lg:text-lg">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-40 mt-16 lg:mt-40">
            {/* Box 1 */}
            <div className="space-y-12 sm:space-y-16">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl sm:text-3xl mt-2">
                  <FaLocationDot />
                </div>
                <div>
                  <h5 className="font-medium text-xl sm:text-2xl">Address</h5>
                  <p className="text-sm sm:text-base">
                    236 5th SE Avenue, New <br /> York NY10000, United <br /> States
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl sm:text-3xl mt-2">
                  <FaPhone />
                </div>
                <div>
                  <h5 className="font-medium text-xl sm:text-2xl">Phone</h5>
                  <p className="text-sm sm:text-base">
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              {/* Working Time */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl sm:text-3xl mt-2">
                  <FaClock />
                </div>
                <div>
                  <h5 className="font-medium text-xl sm:text-2xl">
                    Working Time
                  </h5>
                  <p className="text-sm sm:text-base">
                    Monday-Friday: 9:00 - <br /> 22:00
                  </p>
                  <p className="text-sm sm:text-base">
                    Saturday-Sunday: 9:00 - <br /> 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="space-y-6 mt-12 lg:mt-0">
              <p className="font-medium text-sm sm:text-base">Your name</p>
              <input
                type="text"
                placeholder="Abc"
                className="border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-3 sm:py-4 rounded-lg w-full md:w-[500px] lg:w-96"
              />
              <p className="font-medium text-sm sm:text-base">Email address</p>
              <input
                type="text"
                placeholder="Abc@def.com"
                className="border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-3 sm:py-4 rounded-lg w-full md:w-[500px] lg:w-96"
              />
              <p className="font-medium text-sm sm:text-base">Subject</p>
              <input
                type="text"
                placeholder="This is optional"
                className="border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-3 sm:py-4 rounded-lg w-full md:w-[500px] lg:w-96"
              />
              <p className="font-medium text-sm sm:text-base">Message</p>
              <textarea
                placeholder="Hi! I would like to ask about"
                className="border border-gray-300 focus:border-gray-500 focus:outline-none px-4 py-3 sm:py-4 rounded-lg w-full md:w-[500px] lg:w-96 h-32 resize-none"
              />
              <button className="border-[1px] border-black rounded-2xl px-8 py-2 sm:px-16 sm:py-3 block text-sm sm:text-base">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Last Section */}
        <Foot></Foot>
      </section>
    </main>
  );
}
