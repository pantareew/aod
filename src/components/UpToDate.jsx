import Button from "./Button";
import Image from "next/image";

export default function UpToDate() {
  return (
    <div className="grid grid-cols-12 gap-4 mx-auto bg-upToDate">
      <div className="col-span-12 h-80 lg:h-full lg:col-span-6 relative">
        <Image src="/sample.png" layout="fill" objectFit="cover" />
      </div>
      <div className="col-start-2 col-end-12 lg:col-start-8 lg:col-end-12 lg:py-10 md:pt-5">
        <h1 className="capitalize text-white text-epilogue font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          stay up to date!
        </h1>
        <p className="my-5 lg:my-10 leading-8">
          Want to hear all of our best tips in digital marketing? Subscribe to
          get interesting emails you will want to be opted in to.{" "}
        </p>
        <div className="flex items-center lg:mb-20 md:mb-16 sm:mb-10 mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="lg:h-full h-16 w-full text-white bg-white bg-opacity-10 rounded-xl py-6 pl-2 xl:pl-5 mr-5 outline outline-2 outline-primary font-kunmbh"
          />
          <Button text="Submit" link="/" />
        </div>
      </div>
    </div>
  );
}
