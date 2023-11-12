import Image from "next/image";
import { Button } from "@/components";

export default function Hero({ content }) {
  const { kicker, heading, background } = content.fields;

  return (
    <div className=" relative h-screen sm:h-full">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Image
        className="w-screen h-full object-cover"
        src={"https:" + background.fields.file.url}
        width={background.fields.file.details.image.width}
        height={background.fields.file.details.image.height}
      />
      <div className="absolute top-1/4 sm:text-start sm:top-20 md:top-24 lg:top-32 xl:top-40 left-8 sm:left-14">
        <h4 className=" uppercase font-kumbh  sm:mt-5 lg:mt-0 mb-5 sm:mb-4 md:mb-6 lg:mb-10 sm:text-sm lg:text-base ">
          {kicker}
        </h4>

        <h1 className="mr-8 break-words max-w-sm sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl sm:mr-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-5xl sm:text-5xl md:text-[58px] lg:text-[80px] xl:text-8xl 2xl:text-8xl capitalize font-epilogue font-semibold ">
          {heading.split(" ").map((word, index, array) => (
            <span
              key={index}
              className={
                index === array.length - 1
                  ? "text-primary "
                  : "text-white leading-[80px] sm:leading-[55px] md:leading-[65px] lg:leading-[100px] xl:leading-[120px]"
              }
            >
              {word}{" "}
            </span>
          ))}
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 ml-8 sm:ml-14 md:mb-10 lg:mb-20 xl:mb-28 sm:mb-3 mb-5">
        <Button
          text="Let's Grow!"
          link="/get-in-touch"
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
  );
}
