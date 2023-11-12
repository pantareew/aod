import ProjCard from "./ProjCard";
import Button from "./Button";

export default function Projects({ content, demo }) {
  return (
    <div className="my-20">
      <h4 className="font-epilogue text-center text-primary uppercase font-bold tracking-widest text-lg ">
        recent projects
      </h4>
      <h1 className="capitalize text-center text-gray-900 font-epilogue xl:text-6xl sm:text-5xl text-4xl font-semibold leading-[72px] my-8">
        wordpress and shopify <span className="block">specialists</span>
      </h1>
      {demo && (
        <div className="flex justify-end my-10">
          <Button
            text="All Projects"
            link="/projects"
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
      )}
      <div>
        {demo ? (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-16 md:grid-cols-1">
            {content.slice(0, 3).map((projItem) => (
              <ProjCard key={projItem.sys.id} content={projItem} />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-16 md:grid-cols-1">
            {content.map((projItem) => (
              <ProjCard key={projItem.sys.id} content={projItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
