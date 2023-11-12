import { useState } from "react";
import ContactBox from "./ContactBox";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ServiceList({ content, contact }) {
  const router = useRouter();
  const currentSlug = router.asPath.split("/")[2];
  const [selected, setSelected] = useState(currentSlug);

  return (
    <div>
      <h1 className="text-2xl text-gray-900 font-epilogue font-semibold mb-5">
        Service List
      </h1>
      <div>
        {content.map((details) => (
          <div key={details.sys.id} className="grid grid-cols-12 gap-4 ">
            <Link
              onClick={() => setSelected(details.fields.slug)}
              href="/services/[slug]"
              as={`/services/${details.fields.slug}`}
              className={`relative col-start-1 col-end-13 px-5 text-gray-800 font-epilogue text-lg sm:text-xl flex items-center py-5 hover:bg-primary hover:text-white
            ${
              details.fields.slug === selected
                ? "bg-primary text-white"
                : "bg-gray-100"
            }
            `}
            >
              {details.fields.serviceName}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute right-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      <div className="py-7 px-4 lg:px-5 xl:px-2 2xl:px-5 bg-gray-100 my-10 ">
        <h1 className="text-2xl text-gray-900 font-epilogue font-semibold">
          Contact Us
        </h1>
        {contact.map((info) => (
          <ContactBox key={info.sys.id} content={info} />
        ))}
      </div>
    </div>
  );
}
