import Image from "next/image";
import { Navbar, Button } from "@/components";

export default function SectionBanner({ content }) {
  const { title, description, image } = content.fields;
  return (
    <>
      <div className="relative h-[75vh]">
        <div className="absolute inset-0 bg-upToDate opacity-70" />
        <Image
          className="w-screen h-full object-cover"
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />

        <div className="absolute inset-0 flex items-center justify-center text-center mt-12 sm:mt-0 ">
          <div className="font-epilogue tracking-wider">
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold capitalize my-8">
              {title}
            </div>
            <div className="text-base sm:text-lg md:text-xl mx-10 sm:mx-14 md:mx-16 lg:mx-24 leading-14 sm:leading-10">
              {description}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-10">
          <Navbar />
        </div>
      </div>
    </>
  );
}
