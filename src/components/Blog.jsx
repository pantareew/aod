import BlogCard from "./BlogCard";
import Button from "./Button";

export default function Blog({ content }) {
  return (
    <div className="my-20  ">
      <h1 className="capitalize text-gray-900 font-epilogue xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold sm:leading-[72px] leading-10 my-8">
        the latest and greatest in{" "}
        <span className="block">web and marketing</span>
      </h1>
      <h4 className="font-epilogue text-primary uppercase font-bold tracking-widest xl:text-lg md:text-base text-sm">
        the blog
      </h4>
      <div className="flex justify-end my-10">
        <Button
          text="All Blogs"
          link="/blogs"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        />
      </div>
      <BlogCard content={content} />
    </div>
  );
}
