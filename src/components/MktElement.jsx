import Link from "next/link";

export default function MktElement({ content }) {
  return (
    <div>
      {content.map((item) => (
        <div
          key={item.sys.id}
          className="grid grid-cols-12 text-white-mkt font-inter mb-10"
        >
          <div
            className=" font-bold lg:font-normal lg:col-start-1 lg:col-end-3 text-2xl col-start-1 col-end-13
          "
          >
            {item.fields.question}
          </div>
          <div className="my-10 lg:my-0 lg:col-start-4 lg:col-end-8 col-start-1 col-end-13">
            <div className="text-[22px] md:text-2xl lg:text-3xl mb-3 flex lg:font-semibold">
              {item.fields.sol1Title}
              <div className="ml-auto">
                <Link
                  href="/services/[slug]"
                  as={`/services/${item.fields.link1.fields.slug}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-9 h-10 
                "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>{" "}
              </div>
            </div>
            <div className="text-base md:text-lg  block mb-3">
              {item.fields.sol1Dsc}
            </div>
          </div>

          <div className="lg:col-start-9 lg:col-span-4 col-start-1 col-end-13">
            <div className="text-[22px] md:text-2xl lg:text-3xl mb-3 flex lg:font-semibold">
              {item.fields.sol2Title}
              <div className="ml-auto ">
                <Link
                  href="/services/[slug]"
                  as={`/services/${item.fields.link2.fields.slug}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-9 h-10 justify-end"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="text-base md:text-lg block lg:mb-3 ">
              {item.fields.sol2Dsc}
            </div>
            <div className="lg:mt-0 lg:border-0 mt-6 border-solid border-b-2 border-white-mkt" />
          </div>
        </div>
      ))}
    </div>
  );
}
