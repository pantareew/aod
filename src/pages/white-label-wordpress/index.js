import { client } from "@/lib/contentful";
import {
  Hero,
  Navbar,
  Featured,
  LogoBanner,
  Projects,
  Blog,
  UpToDate,
  TopBanner,
  PreFooter,
  Footer,
  Copyright,
} from "@/components";

export async function getStaticProps() {
  const hero = await client.getEntries({ content_type: "hero" });
  const featured = await client.getEntries({ content_type: "featured" });
  const projects = await client.getEntries({ content_type: "projects" });

  const blog = await client.getEntries({ content_type: "blog" });

  const contact = await client.getEntries({ content_type: "contact" });
  return {
    props: {
      hero: hero.items,
      featured: featured.items,
      proj: projects.items,

      blog: blog.items,
      contact: contact.items,
    },
  };
}
export default function page({ hero, featured, proj, blog, contact }) {
  return (
    <div>
      <div className="hidden xl:block ">
        {contact.map((info) => (
          <TopBanner key={info.sys.id} content={info} />
        ))}
      </div>
      <div className="w-full absolute z-10">
        <Navbar />
      </div>
      <div>
        {hero
          .filter((element) => element.fields.kicker === "agency specialists")
          .map((heroItem) => (
            <Hero key={heroItem.sys.id} content={heroItem} />
          ))}
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="my-24 col-start-2 col-span-10">
          {featured
            .filter(
              (featuredElements) =>
                featuredElements.fields.kicker === "white label agency"
            )
            .map((featuredElements) => (
              <Featured
                key={featuredElements.sys.id}
                content={featuredElements}
              />
            ))}
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-1 col-span-12">
          <LogoBanner />
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-2 col-span-10">
          <Projects content={proj} demo={false} />
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-2 col-span-10 my-10">
          <Blog content={blog} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-start-1 col-span-12">
          <UpToDate />
          {contact.map((info) => (
            <PreFooter key={info.sys.id} content={info} />
          ))}
          {contact.map((info) => (
            <Footer key={info.sys.id} content={info} />
          ))}
          <Copyright />
        </div>
      </div>
    </div>
  );
}
