import { client } from "@/lib/contentful";
import {
  Hero,
  Navbar,
  Featured,
  LogoBanner,
  Projects,
  Mkt,
  Blog,
  FAQ,
  UpToDate,
  PreFooter,
  Footer,
  Copyright,
} from "@/components";

export async function getStaticProps() {
  const hero = await client.getEntries({ content_type: "hero" });
  const featured = await client.getEntries({ content_type: "featured" });
  const projects = await client.getEntries({ content_type: "projects" });
  const mkt = await client.getEntries({ content_type: "mkt" });
  const blog = await client.getEntries({ content_type: "blog" });
  const faq = await client.getEntries({ content_type: "faq" });
  const contact = await client.getEntries({ content_type: "contact" });
  return {
    props: {
      hero: hero.items,
      featured: featured.items,
      proj: projects.items,
      mkt: mkt.items,
      blog: blog.items,
      faq: faq.items,
      contact: contact.items,
    },
  };
}
export default function Home({
  hero,
  featured,
  proj,
  mkt,
  blog,
  faq,
  contact,
}) {
  return (
    <>
      <div className="w-full absolute z-10">
        <Navbar />
      </div>
      <div>
        {hero
          .filter((element) => element.fields.kicker === "Alpha Omega Digital")
          .map((heroItem) => (
            <Hero key={heroItem.sys.id} content={heroItem} />
          ))}
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="my-24 col-start-2 col-span-10">
          {featured
            .filter(
              (featuredElements) =>
                featuredElements.fields.kicker === "in a nutshell"
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
          <Projects content={proj} demo={true} />
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-1 col-span-12">
          <Mkt content={mkt} />
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className="col-start-2 col-span-10">
          <Blog content={blog} />
        </div>
        <div className="col-start-2 col-span-10 mb-20">
          <h1 className=" text-gray-900 font-epilogue text-4xl sm:text-6xl font-semibold leading-[72px] my-0 sm:my-8">
            FAQ&apos;s
          </h1>
          <FAQ content={faq} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-start-1 col-span-12">
          <UpToDate />
          <div>
            {contact.map((info) => (
              <PreFooter key={info.sys.id} content={info} />
            ))}
          </div>
          <div>
            {contact.map((info) => (
              <Footer key={info.sys.id} content={info} />
            ))}
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
}
