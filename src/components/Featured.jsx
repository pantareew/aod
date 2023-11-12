import Image from "next/image";

export default function Featured({ content }) {
  const { kicker, heading, description, image, listItems } = content.fields;

  return (
    <div className="grid grid-cols-12 xl:gap-14">
      <div className="h-[50vh] col-start-3 col-end-11 relative  xl:col-start-1 xl:col-end-6 xl:h-full">
        <Image
          className="rounded-tr-[11%] rounded-bl-[11%] lg:rounded-tr-[150px] lg:rounded-bl-[150px] absolute 2xl:left-10 xl:left-8 lg:left-14 xl:top-6 lg:top-4 md:top-0  md:left-12 h-full object-cover md:w-4/5"
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
        <div className=" w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 532 605"
            fill="none"
            preserveAspectRatio="none"
            height="100%"
            width="100%"
          >
            <path
              d="M0 584.243V20.6502C0 6.20916 14.8366 -3.47201 28.0547 2.34389L519.893 218.75C534.133 225.015 536.082 244.424 523.373 253.395L31.5338 600.582C18.2856 609.934 0 600.459 0 584.243Z"
              fill="url(#paint0_linear_3519_509)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3519_509"
                x1="276.136"
                y1="-10"
                x2="276.136"
                y2="622.841"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F44730" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F44730" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative mt-2 col-start-1  col-end-13  xl:col-start-6 xl:col-end-13  p-6">
        <h4 className="uppercase text-secondary font-epilogue font-bold tracking-widest lg:text-lg sm:text-sm text-xs my-3">
          {kicker}
        </h4>
        <h1 className="capitalize text-gray-900 font-epilogue xl:text-6xl lg:text-5xl sm:text-4xl text-3xl lg:leading-[60px] font-semibold xl:leading-[72px]">
          {heading}
        </h1>
        <p className="font-kumbh text-gray lg:text-xl md:text-lg text-sm xl:my-12 sm:my-5 leading-8">
          {description}
        </p>
        {listItems.map((item, index) => (
          <div key={index} className="flex my-6">
            <input
              type="checkbox"
              checked
              className="accent-primary sm:h-5 sm:w-6 h-4 w-5"
            />
            <span className="mx-3 text-gray-900 font-kumbh sm:text-base text-sm">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
