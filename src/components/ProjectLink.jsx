import Link from "next/link";
export default function ProjectLink({ content }) {
  const { title, subtitle, link } = content.fields;
  return (
    <>
      <div className="relative pt-6 pr-6">
        <div className=" flex flex-col items-center justify-center bg-white py-5 px-2 rounded-[20px]">
          <h1 className=" text-gray-900 font-semibold text-xl font-epilogue">
            {title}
          </h1>
          <h2 className=" text-gray font-kumbh">{subtitle}</h2>
        </div>
        <Link href={link} className="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgba(243, 81, 98, 1)"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            className="w-16 h-16 transform rotate-45"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
