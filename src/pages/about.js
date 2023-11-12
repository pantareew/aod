import { client } from "@/lib/contentful";
import {
  FeaturedAbout,
  SectionBanner,
  TopBanner,
  LogoBanner,
  FeaturedPrinciple,
  Team,
  Footer,
  Copyright,
} from "@/components";
export async function getStaticProps() {
  const SectionBanner = await client.getEntries({
    content_type: "sectionBanner",
  });
  const featured = await client.getEntries({ content_type: "featured" });
  const contact = await client.getEntries({ content_type: "contact" });
  const priniciples = await client.getEntries({ content_type: "priniciples" });
  const team = await client.getEntries({ content_type: "teammember" });
  return {
    props: {
      sectionBanner: SectionBanner.items,
      featured: featured.items,
      contact: contact.items,
      priniciples: priniciples.items,
      team: team.items,
    },
  };
}
export default function about({
  sectionBanner,
  featured,
  contact,
  priniciples,
  team,
}) {
  return (
    <>
      <div className="hidden xl:block ">
        {contact.map((info) => (
          <TopBanner key={info.sys.id} content={info} />
        ))}
      </div>

      <div>
        {sectionBanner
          .filter((element) => element.fields.title === "About us")
          .map((element) => (
            <SectionBanner key={element.sys.id} content={element} />
          ))}
      </div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-start-2 col-span-10 my-14">
          {featured
            .filter((element) => element.fields.kicker === "about us")
            .map((element) => (
              <FeaturedAbout key={element.sys.id} content={element} />
            ))}
        </div>
      </div>
      <LogoBanner />
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-start-1 col-span-12 ">
          {priniciples.map((info) => (
            <FeaturedPrinciple key={info.sys.id} content={info} />
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-2 col-span-10">
          <Team content={team} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-start-1 col-span-12">
          {contact.map((info) => (
            <Footer key={info.sys.id} content={info} />
          ))}
          <Copyright />
        </div>
      </div>
    </>
  );
}
