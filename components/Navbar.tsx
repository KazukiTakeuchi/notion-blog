import { siteConfig } from '@/site.config';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
        >
          <Link href="/" className="text-gray-500 hover:text-gray-600">
            {siteConfig.title}
          </Link>
          {/* Breadcrumb */}
        </div>
      </div>
      <a href="">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="instagram"
          className="w-6 h-full mx-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"
          />
        </svg>
      </a>
    </nav>
  );
}

export default Navbar
