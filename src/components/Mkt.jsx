import MktElement from "./MktElement";

export default function Mkt({ content }) {
  return (
    <div className="bg-primary">
      <h1 className="text-center mx-7 text-4xl md:text-5xl font-semibold py-20">
        Conversion based marketing
      </h1>
      <div className=" grid grid-cols-12">
        <div className="col-start-2 col-span-10">
          <MktElement content={content} />
        </div>
      </div>
    </div>
  );
}
