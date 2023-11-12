import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ content }) {
  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 text-white-mkt font-inter">
        {content.map((item) => (
          <Link
            key={item.sys.id}
            href={"/" + item.fields.title.toLowerCase().replace(/ /g, "-")}
            className="bg-white hover:bg-primary rounded-3xl px-5 group shadow-xl"
          >
            <Image
              className="rounded-[20px] h-80 my-5 w-full object-cover"
              src={"https:" + item.fields.image.fields.file.url}
              width={item.fields.image.fields.file.details.image.width}
              height={item.fields.image.fields.file.details.image.height}
            />
            <div className="text-xl md:text-2xl text-gray-900 group-hover:text-white font-epilogue font-semibold">
              {item.fields.title}
            </div>
            <div className="text-base md:text-lg text-gray my-5 group-hover:text-white">
              {item.fields.description}
            </div>
            <h4 className="text-sm md:text-base capitalize my-5 text-gray-900 font-epilogue font-semibold group-hover:text-white">
              read more
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
