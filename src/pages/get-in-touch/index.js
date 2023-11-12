import { client } from "@/lib/contentful";
import {
  SectionBanner,
  TopBanner,
  Footer,
  Copyright,
  ContactBox,
  Form,
  Map,
} from "@/components";
export async function getStaticProps() {
  const SectionBanner = await client.getEntries({
    content_type: "sectionBanner",
  });
  const contact = await client.getEntries({ content_type: "contact" });
  return {
    props: {
      sectionBanner: SectionBanner.items,
      contact: contact.items,
    },
  };
}
export default function contact({ contact, sectionBanner }) {
  return (
    <div>
      <div className="hidden xl:block ">
        {contact.map((info) => (
          <TopBanner key={info.sys.id} content={info} />
        ))}
      </div>
      <div>
        {sectionBanner
          .filter((element) => element.fields.title === "contact us")
          .map((element) => (
            <SectionBanner key={element.sys.id} content={element} />
          ))}
      </div>
      <div className=" grid grid-cols-12 my-20">
        <div className=" col-start-2 2xl:col-end-5 xl:col-end-5 col-end-12   ">
          {contact.map((info) => (
            <ContactBox
              key={info.sys.id}
              content={info}
              heading="get in touch with us"
              kicker="contact us"
            />
          ))}
        </div>
        <div className=" 2xl:col-start-6 col-end-12 xl:col-start-6 col-start-2   ">
          <Form />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-start-1 col-span-12">
          <Map />
          {contact.map((info) => (
            <Footer key={info.sys.id} content={info} />
          ))}
          <Copyright />
        </div>
      </div>
    </div>
  );
}
