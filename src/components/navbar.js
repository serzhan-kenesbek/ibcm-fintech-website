import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-15">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-darkBlue hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo.jpeg"
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end hidden sm:flex">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-darkBlue hover:text-lightBlue px-4 py-2 rounded-md text-sm font-medium"
              >
                HOME
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/about"
                className="text-darkBlue hover:text-lightBlue px-4 py-2 rounded-md text-sm font-medium"
              >
                ABOUT US
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/departments"
                className="text-darkBlue hover:text-lightBlue px-4 py-2 rounded-md text-sm font-medium"
              >
                DEPARTMENTS
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="text-darkBlue hover:text-lightBlue px-4 py-2 rounded-md text-sm font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
            >
              ABOUT
            </Link>
            <Link
              href="/departments"
              className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
            >
              DEPARTMENTS
            </Link>
            <Link
              href="/contact"
              className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
