import TeamCard from "./TeamCard";
export default function Team({ content }) {
  return (
    <div className="mb-28">
      <h4 className="font-epilogue text-center text-primary uppercase font-bold tracking-widest text-lg">
        professional people
      </h4>
      <h1 className="capitalize text-center text-gray-900 font-epilogue text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[72px] my-8">
        meet our team members
      </h1>

      <TeamCard content={content} />
    </div>
  );
}
