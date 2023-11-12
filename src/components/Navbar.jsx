import { useState } from "react";
import Link from "next/link";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="grid grid-cols-12">
      <Link href="/" className=" col-start-1 ml-4 sm:ml-12 xl:hidden">
        <Image src="/brand.png" className="fixed " width={100} height={35} />
      </Link>

      <div className="my-2 mr-5 sm:mr-0 ml-auto  xl:hidden col-start-11 col-end-12  text-primary">
        <button onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <FontAwesomeIcon icon={faX} className="w-6 md:w-7 lg:w-8 fixed" />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="w-8 md:w-9 lg:w-10 fixed"
            />
          )}
        </button>
      </div>
      <div
        className={`xl:hidden py-auto h-screen fixed bg-white ${
          navbar ? "block " : "hidden"
        }`}
      >
        <ul className="w-full font-kumbh font-medium">
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/" onClick={() => setNavbar(!navbar)}>
              Home
            </Link>
          </li>
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/about">About Us</Link>
          </li>
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/services/">Services</Link>
          </li>
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/blog">Blog</Link>
          </li>
          <li className=" pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/white-label-wordpress" className="w-full">
              White label wordpress
            </Link>
          </li>
          <li className="pr-10 sm:pr-60 py-3 m-5 text-black border-solid border-b-2 border-zinc-200 ">
            <Link href="/get-in-touch">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="my-6 hidden xl:block xl:col-start-6 xl:col-end-12 ml-auto">
        <div className=" inline-flex gap-6 text-white font-kumbh font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services/">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/white-label-wordpress">White label wordpress</Link>
          <Link href="/get-in-touch">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
