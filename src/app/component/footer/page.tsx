import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Logo</h3>
                        <p className="text-gray-400">Your brand description goes here.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-blue-600">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="text-gray-300 hover:text-blue-600">
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-2">1234 E-commerce St, City, Country</p>
                        <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-400">Email: info@ecommerce.com</p>
                    </div>

                    {/* Follow Us */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-300 hover:text-blue-600">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-600">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-600">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-600">
                                <FaLinkedin size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Subscribe to Our Newsletter */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                        <label htmlFor="email" className="sr-only">Enter your email</label>
                        <div className="flex w-full sm:w-auto">
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border text-black border-gray-300 rounded-l-full w-full sm:w-60 focus:outline-none"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700">
                                <FaEnvelope size={18} />
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-6">&copy; 2024 E-commerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
