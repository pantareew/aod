import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
export default function Footer({ content }) {
  const { tel, fb, linkedin, ig, email } = content.fields;
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-12 gap-8 py-5">
        <div className="col-start-2 col-end-11 md:col-start-2 md:col-end-7 xl:col-start-2 xl:col-end-5 ">
          <Image src="/brand.png" width={100} height={35} />
          <p className="font-kumbh leading-8">
            Alpha Omega Digital builds marketing systems, that attract, nurture,
            and convert sales. We operate on a model of full transparency, and
            work on driving growth for your business.
          </p>
          <div className="my-8 2xl:w-1/4 w-1/3">
            <Button text="Contact" link="/get-in-touch" />
          </div>
        </div>
        <div className="col-start-2 col-end-12 md:col-start-8 md:col-end-12 xl:col-start-5 xl:col-end-6 md:mt-10 xl:mt-20 ">
          <h2 className="font-epilogue font-bold text-2xl tracking-wider ">
            Links
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="3"
            viewBox="0 0 37 3"
            fill="none"
          >
            <rect
              x="0.65625"
              y="0.878906"
              width="25"
              height="2"
              fill="#F35162"
            />
            <rect
              x="28.6562"
              y="0.878906"
              width="7.84109"
              height="2"
              fill="#D9D9D9"
            />
          </svg>
          <div className="font-kumbh tracking-wider leading-8 my-4 ">
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <br />
            <div className="my-5 xl:my-0" />
            <Link href="/about" className="hover:text-primary">
              About Us
            </Link>
            <br />
            <div className="my-5 xl:my-0" />
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <br />
            <div className="my-5 xl:my-0" />
            <Link href="/get-in-touch" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-start-2 col-end-12 md:col-start-2 md:col-end-7 xl:col-start-6 xl:col-end-9 xl:mt-20">
          <h2 className="uppercase font-epilogue font-bold text-2xl tracking-wider ">
            Contact Info
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="3"
            viewBox="0 0 37 3"
            fill="none"
          >
            <rect
              x="0.296875"
              y="0.878906"
              width="22.4031"
              height="2"
              fill="#F44730"
            />
            <rect
              x="28.2969"
              y="0.878906"
              width="7.84109"
              height="2"
              fill="#D9D9D9"
            />
          </svg>
          <div className="my-4 leading-8">
            <p className="font-kumbh">1650/470 St Kilda Rd</p>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#f35162", width: "20" }}
              />
              <p className="mx-3 tracking-wider">{tel}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#f35162", width: "20" }}
              />
              <p className="mx-4">{email}</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-12 md:col-start-8 md:col-end-12 xl:col-start-9 xl:col-end-12 xl:mt-20">
          <h2 className="uppercase font-epilogue font-bold text-2xl tracking-wider ">
            Newsletter
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="3"
            viewBox="0 0 37 3"
            fill="none"
          >
            <rect
              x="0.296875"
              y="0.878906"
              width="22.4031"
              height="2"
              fill="#F44730"
            />
            <rect
              x="28.2969"
              y="0.878906"
              width="7.84109"
              height="2"
              fill="#D9D9D9"
            />
          </svg>

          <div className="my-8 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-2 text-white bg-white bg-opacity-10 rounded-xl py-5 w-full outline outline-2 outline-primary font-kunmbh"
            />

            <div className="absolute right-2 top-1">
              <Button
                link="/"
                icon={
                  <svg
                    className="w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="flex items-center  my-10">
            <Link href={fb} className="mr-3 ml-auto">
              <FontAwesomeIcon icon={faSquareFacebook} style={{ width: 30 }} />
            </Link>
            <Link href={linkedin} className="mx-3">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "white", width: 30 }}
              />
            </Link>
            <Link href={ig} className="mx-3">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                style={{ color: "white", width: 30 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
