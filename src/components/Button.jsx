import Link from "next/link";
export default function Button({ text, link, icon }) {
  return (
    <>
      <Link
        className="flex items-center justify-center bg-primary border-solid border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary font-semibold py-5 px-6 rounded-[5px] font-epilogue font-semibold"
        href={link}
      >
        {text}
        <span className="ml-2">{icon}</span>
      </Link>
    </>
  );
}
