import { client } from "@/lib/contentful";
import Image from "next/image";
import {
  TopBanner,
  SectionBanner,
  Footer,
  Copyright,
  ServiceList,
} from "@/components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
const richtext_options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Image
          className="lg:float-right lg:ml-5 lg:w-1/3 object-cover max-h-80 mt-2 2xl:mb-10 xl:mb-0 mb-0 lg:mb-5 w-full"
          src={"https:" + node.data.target.fields.file.url}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
        />
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className="text-gray-800 font-epilogue font-bold text-2xl sm:text-3xl my-5">
          {children}
        </h1>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="text-primary no-underline" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h1 className="text-gray-900 font-epilogue font-bold text-xl sm:text-2xl py-5">
          {children}
        </h1>
      );
    },
  },
};

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "services" });
  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const SectionBanner = await client.getEntries({
    content_type: "sectionBanner",
  });
  const contact = await client.getEntries({ content_type: "contact" });
  const services = await client.getEntries({ content_type: "services" });
  const { items } = await client.getEntries({
    content_type: "services",
    "fields.slug": params.slug,
  });
  return {
    props: {
      sectionBanner: SectionBanner.items,
      contact: contact.items,
      services: services.items,
      details: items[0],
    },
  };
}

export default function Services({
  sectionBanner,
  contact,
  services,
  details,
}) {
  const [listbar, setListbar] = useState(false);
  const listBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listBarRef.current && !listBarRef.current.contains(event.target)) {
        setListbar(false);
      }
    };

    // Add the event listener when the listbar is open
    if (listbar) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [listbar]);

  return (
    <div className="relative">
      <div className="xl:hidden">
        {listbar && (
          <div className="h-full absolute px-2 sm:px-16 py-10  bg-white z-20">
            <ServiceList content={services} contact={contact} />
          </div>
        )}
      </div>

      <div className={`${listbar ? "blur-sm contrast-75" : "opacity-100"}`}>
        <div className="hidden xl:block ">
          {contact.map((info) => (
            <TopBanner key={info.sys.id} content={info} />
          ))}
        </div>
        <div className="sectionBanner">
          {sectionBanner
            .filter((element) => element.fields.title === "Our Services")
            .map((element) => (
              <SectionBanner key={element.sys.id} content={element} />
            ))}
        </div>

        <div className="my-20 grid grid-cols-12">
          {/*Large Screen */}
          <div className="hidden xl:col-start-2 xl:block xl:col-end-5 ">
            <ServiceList content={services} contact={contact} />
          </div>
          {/*Smaller Screen */}
          <div className="col-start-2 col-end-2 block xl:hidden  ">
            <FontAwesomeIcon
              icon={faBars}
              className="w-8 md:w-9 lg:w-10 text-primary"
              onClick={() => setListbar(!listbar)}
              ref={listBarRef}
            />
          </div>
          <div className="col-start-4 sm:col-start-3 xl:col-start-6 col-end-12  text-gray-800 font-kumbh leading-8">
            <div className="mainImage">
              {details.fields.mainImage && (
                <Image
                  src={"https:" + details.fields.mainImage.fields.file.url}
                  width={
                    details.fields.mainImage.fields.file.details.image.width
                  }
                  height={
                    details.fields.mainImage.fields.file.details.image.height
                  }
                />
              )}
            </div>

            <div className="mainDetails mb-10 text-sm  leading-8 font-kumbh">
              {documentToReactComponents(
                details.fields.serviceDetails,
                richtext_options
              )}
            </div>
          </div>
          <div className="col-start-4 sm:col-start-3 col-end-12 lg:col-end-7 xl:col-start-6 xl:col-end-9 ">
            <div className="featureElement flex items-center">
              {details.fields.serviceFeature1 && (
                <div className="feature1 flex items-center bg-gray-100 lg:mr-5 mb-10 lg:mb-0 pb-5 px-5 font-kumbh text-gray-800 h-52 w-full text-sm sm:text-base">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 sm:w-14"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M48.9117 21.2497C45.4585 21.2497 42.6492 18.4459 42.6492 14.9998C42.6492 11.5538 45.4585 8.75 48.9117 8.75C52.3645 8.75 55.1738 11.5538 55.1738 14.9998C55.1738 18.4459 52.3645 21.2497 48.9117 21.2497ZM48.9117 11.2498C46.8399 11.2498 45.1544 12.9321 45.1544 14.9998C45.1544 17.0676 46.8399 18.7498 48.9117 18.7498C50.9829 18.7498 52.669 17.0676 52.669 14.9998C52.669 12.9321 50.9829 11.2498 48.9117 11.2498ZM36.3871 59.9998C36.2215 59.9998 36.0536 59.9687 35.8936 59.8987C35.2574 59.6264 34.9629 58.8911 35.2358 58.2571L38.9931 49.5075C39.0896 49.2825 39.2501 49.0908 39.4548 48.9561C39.6594 48.8214 39.8993 48.7497 40.1444 48.7498H48.9117C50.9829 48.7498 52.669 47.0676 52.669 44.9998V28.7497C52.669 27.3709 51.5454 26.2498 50.1638 26.2498H48.9117C48.0325 26.2498 47.232 26.8299 46.1538 28.2549C44.9438 29.8497 41.2714 34.35 41.1163 34.5399C40.9985 34.6836 40.8502 34.7994 40.6822 34.879C40.5141 34.9586 40.3304 34.9999 40.1444 35H33.8823C33.1908 35 32.6297 35.5598 32.6297 36.2497V38.75C32.6297 39.4412 32.0697 39.9997 31.3771 39.9997C31.2127 39.9999 31.0498 39.9676 30.8978 39.9049C30.7458 39.8422 30.6077 39.7501 30.4914 39.634C30.3751 39.518 30.2828 39.3801 30.22 39.2284C30.1571 39.0767 30.1248 38.9142 30.125 38.75V36.2497C30.125 34.1825 31.8105 32.4997 33.8823 32.4997H39.5482C40.5352 31.2862 43.1954 28.0122 44.1544 26.746C45.2131 25.3512 46.7083 23.75 48.9117 23.75H50.1638C52.9268 23.75 55.1738 25.9921 55.1738 28.7497V44.9998C55.1738 48.4459 52.3645 51.2497 48.9117 51.2497H40.9696L37.5379 59.2422C37.3351 59.716 36.8728 59.9998 36.3871 59.9998Z"
                        fill="#F35162"
                      />
                      <path
                        d="M31.3768 60C31.2465 60 31.1126 59.9789 30.981 59.935C30.326 59.7176 29.9705 59.0099 30.1898 58.3539L34.3425 45.9173C35.0227 43.8748 36.9339 42.5002 39.0946 42.5002H42.6488V38.7502C42.6487 38.5859 42.681 38.4233 42.7439 38.2716C42.8068 38.1199 42.8991 37.982 43.0154 37.8659C43.1317 37.7498 43.2699 37.6577 43.4219 37.5949C43.5739 37.5321 43.7369 37.4999 43.9014 37.5C44.0659 37.4999 44.2289 37.5321 44.3809 37.5949C44.5329 37.6577 44.6711 37.7498 44.7874 37.8659C44.9037 37.982 44.996 38.1199 45.0589 38.2716C45.1218 38.4233 45.1541 38.5859 45.154 38.7502V43.7498C45.1541 43.9141 45.1218 44.0767 45.0589 44.2284C44.996 44.3801 44.9037 44.518 44.7874 44.6341C44.6711 44.7502 44.5329 44.8423 44.3809 44.9051C44.2289 44.9679 44.0659 45.0001 43.9014 45H39.0946C38.0149 45 37.0592 45.6861 36.7197 46.7074L32.5656 59.1449C32.4823 59.3938 32.3226 59.6102 32.1093 59.7637C31.896 59.9171 31.6397 59.9998 31.3768 60Z"
                        fill="#F35162"
                      />
                      <path
                        d="M43.897 39.9996C43.6263 40 43.3629 39.9122 43.1467 39.7497C42.5931 39.3359 42.4807 38.5521 42.8963 38.001L46.6536 33.0009C47.0682 32.4484 47.8548 32.3371 48.4062 32.751C48.9592 33.1647 49.0721 33.9484 48.6565 34.4996L44.8992 39.4997C44.6547 39.8275 44.2792 39.9996 43.897 39.9996ZM23.8591 38.75H26.3643V59.9998H23.8591V38.75ZM3.82031 38.75H6.32505V59.9998H3.82031V38.75Z"
                        fill="#F35162"
                      />
                      <path
                        d="M43.898 39.9998H1.31463C0.6234 39.9998 0.0625 39.4413 0.0625 38.7502C0.0625 38.059 0.623283 37.5 1.31463 37.5H43.898C44.0625 37.4999 44.2254 37.5321 44.3775 37.5949C44.5295 37.6577 44.6676 37.7498 44.784 37.8659C44.9003 37.982 44.9926 38.1199 45.0555 38.2716C45.1184 38.4233 45.1507 38.5859 45.1506 38.7502C45.1506 39.4413 44.5905 39.9998 43.898 39.9998ZM11.3345 22.5C5.11964 22.5 0.0625 17.4527 0.0625 11.25C0.0625 5.04727 5.11964 0 11.3345 0C17.5489 0 22.6065 5.04727 22.6065 11.25C22.6065 17.4527 17.5489 22.5 11.3345 22.5ZM11.3345 2.49984C6.49976 2.49984 2.56724 6.42516 2.56724 11.25C2.56724 16.0748 6.49976 20.0002 11.3345 20.0002C16.1688 20.0002 20.1013 16.0748 20.1013 11.25C20.1013 6.42516 16.1688 2.49984 11.3345 2.49984Z"
                        fill="#F35162"
                      />
                      <path
                        d="M16.3443 12.5003H11.3348C10.6432 12.5003 10.0822 11.94 10.0822 11.2502V7.50016C10.0822 6.81027 10.6431 6.25 11.3348 6.25C12.0261 6.25 12.587 6.81027 12.587 7.50016V10H16.3443C17.0359 10 17.5969 10.5603 17.5969 11.2502C17.5969 11.94 17.036 12.5003 16.3443 12.5003ZM11.3348 40C11.1703 40.0003 11.0073 39.9681 10.8553 39.9052C10.7033 39.8424 10.5653 39.7501 10.4491 39.6338L0.429732 29.6339C0.254438 29.4591 0.135036 29.2363 0.0866311 28.9937C0.0382257 28.7512 0.0629913 28.4997 0.157795 28.2712C0.252925 28.0431 0.413562 27.8481 0.619476 27.711C0.825389 27.5738 1.06737 27.5005 1.31494 27.5003H18.8495C19.0139 27.5001 19.1768 27.5324 19.3287 27.5953C19.4806 27.6581 19.6186 27.7503 19.7347 27.8665L25.9968 34.1164C26.1132 34.2323 26.2056 34.3701 26.2687 34.5217C26.3317 34.6733 26.3642 34.8359 26.3642 35.0001C26.3642 35.1643 26.3317 35.3268 26.2687 35.4785C26.2056 35.6301 26.1132 35.7678 25.9968 35.8838C25.8806 36 25.7426 36.0922 25.5907 36.1551C25.4387 36.2181 25.2758 36.2504 25.1113 36.2504C24.9468 36.2504 24.784 36.2181 24.632 36.1551C24.4801 36.0922 24.3421 36 24.2259 35.8838L18.3307 30.0002H4.33842L12.22 37.8664C12.3365 37.9823 12.4289 38.1201 12.4919 38.2717C12.555 38.4233 12.5874 38.5859 12.5874 38.7501C12.5874 38.9142 12.555 39.0768 12.4919 39.2285C12.4289 39.3801 12.3365 39.5178 12.22 39.6338C12.1039 39.7501 11.966 39.8423 11.814 39.9052C11.6621 39.968 11.4993 40.0002 11.3348 40Z"
                        fill="#F35162"
                      />
                    </svg>
                  </div>

                  <div className="ml-5">
                    {documentToReactComponents(
                      details.fields.serviceFeature1,
                      richtext_options
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-start-4 sm:col-start-3 lg:col-start-8 col-end-12 xl:col-start-9 xl:col-end-12 ">
            {details.fields.serviceFeature2 && (
              <div className="feature2 flex items-center bg-gray-100 pb-5 px-5 font-kumbh text-gray-800 h-52 w-full text-sm sm:text-base">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 sm:w-14"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3533_37022)">
                      <path
                        d="M31.3898 15.6522C27.7891 15.6522 24.8594 12.7264 24.8594 9.13059V6.52157C24.8594 2.92573 27.7891 0 31.3898 0C34.9906 0 37.9203 2.92573 37.9203 6.52157V9.13059C37.9203 12.7264 34.9906 15.6522 31.3898 15.6522ZM31.3898 2.60853C29.2292 2.60853 27.4715 4.36451 27.4715 6.52157V9.13059C27.4715 11.2877 29.2292 13.0436 31.3898 13.0436C33.5503 13.0436 35.3082 11.2877 35.3082 9.13059V6.52157C35.3082 4.36451 33.5503 2.60853 31.3898 2.60853Z"
                        fill="#F35162"
                      />
                      <path
                        d="M35.3121 28.6961H27.4706C23.0624 28.6946 20.1404 25.8277 20.019 25.705C19.8976 25.584 19.8013 25.4403 19.7356 25.2821C19.6699 25.1239 19.6362 24.9543 19.6363 24.7831V20.2634C19.6363 19.3883 20.071 18.5767 20.8001 18.0929L27.4731 13.6501V13.0439H30.0851V14.348C30.0851 14.7837 29.8671 15.1905 29.504 15.4332L22.2484 20.2634V24.1869C23.0323 24.8051 24.9576 26.0871 27.4716 26.0871H35.3121C37.8501 26.0871 39.7571 24.8117 40.5344 24.1907V20.2634L33.2788 15.4332C33.1001 15.3139 32.9536 15.1525 32.8523 14.9632C32.7509 14.7739 32.6978 14.5626 32.6977 14.348V13.0439H35.3098V13.6501L41.9828 18.0929C42.7117 18.5796 43.1465 19.3907 43.1465 20.2634V24.7831C43.1465 25.1284 43.0093 25.4614 42.7639 25.705C42.6409 25.8277 39.7203 28.6948 35.3121 28.6961ZM15.7179 46.9568C12.1172 46.9568 9.1875 44.0311 9.1875 40.4352V37.8262C9.1875 34.2304 12.1172 31.3046 15.7179 31.3046C19.3187 31.3046 22.2484 34.2304 22.2484 37.8262V40.4352C22.2484 44.0311 19.3187 46.9568 15.7179 46.9568ZM15.7179 33.9132C13.5573 33.9132 11.7996 35.6691 11.7996 37.8262V40.4352C11.7996 42.5923 13.5573 44.3483 15.7179 44.3483C17.8784 44.3483 19.6363 42.5923 19.6363 40.4352V37.8262C19.6363 35.6691 17.8784 33.9132 15.7179 33.9132Z"
                        fill="#F35162"
                      />
                      <path
                        d="M19.6289 60.0005H11.7874C7.37925 59.999 4.45725 57.1321 4.33578 57.0093C4.21427 56.8885 4.1179 56.7448 4.05223 56.5866C3.98656 56.4283 3.95288 56.2587 3.95313 56.0874V51.5678C3.95313 50.6912 4.38782 49.8797 5.11835 49.3958L11.7899 44.9545V44.3483H14.4019V45.6523C14.4019 46.088 14.1839 46.4949 13.8208 46.7376L6.56521 51.5678V55.4913C7.34913 56.1095 9.27439 57.3905 11.7884 57.3915H19.6289C22.1669 57.3905 24.0739 56.1147 24.8512 55.4966V51.5678L17.5957 46.7376C17.417 46.6183 17.2704 46.4569 17.1691 46.2676C17.0677 46.0783 17.0146 45.867 17.0145 45.6523V44.3483H19.6266V44.9545L26.301 49.3972C26.659 49.6352 26.9525 49.9579 27.1553 50.3366C27.3581 50.7154 27.4639 51.1383 27.4633 51.5678V56.0874C27.4633 56.4342 27.3261 56.7657 27.0807 57.0093C26.9592 57.1321 24.0362 59.9991 19.6289 60.0005ZM47.0552 46.9569C43.4544 46.9569 40.5247 44.0311 40.5247 40.4353V37.8263C40.5247 34.2304 43.4544 31.3047 47.0552 31.3047C50.6559 31.3047 53.5856 34.2304 53.5856 37.8263V40.4353C53.5856 44.0311 50.6559 46.9569 47.0552 46.9569ZM47.0552 33.9132C44.8946 33.9132 43.1368 35.6692 43.1368 37.8263V40.4353C43.1368 42.5923 44.8946 44.3483 47.0552 44.3483C49.2157 44.3483 50.9735 42.5923 50.9735 40.4353V37.8263C50.9735 35.6692 49.2157 33.9132 47.0552 33.9132Z"
                        fill="#F35162"
                      />
                      <path
                        d="M50.984 60H43.1425C38.7343 59.9986 35.8138 57.1317 35.6908 57.0089C35.5693 56.888 35.473 56.7443 35.4073 56.5861C35.3416 56.4279 35.3079 56.2583 35.3082 56.087V51.5673C35.3074 51.1371 35.4136 50.7135 35.6172 50.3344C35.8208 49.9553 36.1155 49.6326 36.4748 49.3953L43.1449 44.954V44.3479H45.757V45.6519C45.757 46.0876 45.5389 46.4944 45.1759 46.7372L37.9203 51.5673V55.4909C38.7042 56.1104 40.6295 57.39 43.1425 57.391H50.9841C53.522 57.39 55.429 56.1143 56.2063 55.4961V51.5673L48.9507 46.7372C48.772 46.6179 48.6255 46.4564 48.5241 46.2672C48.4228 46.0779 48.3697 45.8666 48.3696 45.6519V44.3479H50.9817V44.954L57.6546 49.3968C58.0129 49.6346 58.3067 49.9572 58.5097 50.336C58.7128 50.7147 58.8188 51.1377 58.8184 51.5673V56.087C58.8184 56.4338 58.6811 56.7653 58.4357 57.0089C58.3128 57.1317 55.3922 59.9987 50.984 60ZM35.3082 37.8258H37.9203V40.4348H35.3082V37.8258ZM30.0835 37.8258H32.6961V40.4348H30.0835V37.8258ZM24.8594 37.8258H27.4715V40.4348H24.8594V37.8258ZM58.8184 23.4782H56.2063V13.0435C56.2063 10.8859 54.4479 9.1305 52.2879 9.1305H41.8386V6.52148H52.2879C55.8887 6.52148 58.8184 9.44722 58.8184 13.0435V23.4782ZM56.2063 26.0867H58.8184V28.6957H56.2063V26.0867Z"
                        fill="#F35162"
                      />
                      <path
                        d="M45.7489 13.0437C45.4146 13.0437 45.0802 12.9156 44.8256 12.6615L40.9072 8.7485C40.7858 8.62746 40.6895 8.48368 40.6237 8.32541C40.558 8.16714 40.5241 7.99747 40.5241 7.82612C40.5241 7.65477 40.558 7.48511 40.6237 7.32683C40.6895 7.16856 40.7858 7.02479 40.9072 6.90374L44.8256 2.9907C44.9468 2.86951 45.0908 2.77336 45.2492 2.70776C45.4077 2.64216 45.5775 2.6084 45.7491 2.6084C45.9206 2.6084 46.0904 2.64216 46.2489 2.70776C46.4073 2.77336 46.5513 2.86951 46.6725 2.9907C46.794 3.11175 46.8903 3.25552 46.956 3.41379C47.0218 3.57207 47.0556 3.74173 47.0556 3.91308C47.0556 4.08443 47.0218 4.25409 46.956 4.41237C46.8903 4.57064 46.794 4.71441 46.6725 4.83546L43.6778 7.82612L46.6725 10.8168C46.794 10.9378 46.8903 11.0816 46.956 11.2399C47.0218 11.3981 47.0556 11.5678 47.0556 11.7392C47.0556 11.9105 47.0218 12.0802 46.956 12.2385C46.8903 12.3967 46.794 12.5405 46.6725 12.6615C46.5513 12.7828 46.4073 12.8789 46.2488 12.9445C46.0903 13.0101 45.9204 13.0438 45.7489 13.0437ZM6.56521 27.3913H3.95312V13.0437C3.95312 9.44734 6.88284 6.52161 10.4836 6.52161H17.0145V9.13063H10.4836C8.32357 9.13063 6.56521 10.886 6.56521 13.0437V27.3913ZM19.6266 6.52161H22.2387V9.13063H19.6266V6.52161Z"
                        fill="#F35162"
                      />
                      <path
                        d="M5.26417 28.696C4.92989 28.696 4.59548 28.568 4.34054 28.3139L0.422173 24.4008C0.300728 24.2798 0.204378 24.136 0.138639 23.9777C0.0729004 23.8195 0.0390625 23.6498 0.0390625 23.4784C0.0390625 23.3071 0.0729004 23.1374 0.138639 22.9792C0.204378 22.8209 0.300728 22.6771 0.422173 22.5561C0.543388 22.4349 0.687331 22.3388 0.845772 22.2732C1.00421 22.2076 1.17405 22.1738 1.34556 22.1738C1.51707 22.1738 1.68691 22.2076 1.84535 22.2732C2.00379 22.3388 2.14773 22.4349 2.26895 22.5561L5.26405 25.5472L8.25891 22.5561C8.38012 22.4349 8.52407 22.3388 8.68251 22.2732C8.84095 22.2076 9.01078 22.1738 9.18229 22.1738C9.35381 22.1738 9.52364 22.2076 9.68208 22.2732C9.84052 22.3388 9.98447 22.4349 10.1057 22.5561C10.2271 22.6771 10.3235 22.8209 10.3892 22.9792C10.455 23.1374 10.4888 23.3071 10.4888 23.4784C10.4888 23.6498 10.455 23.8195 10.3892 23.9777C10.3235 24.136 10.2271 24.2798 10.1057 24.4008L6.18732 28.3139C6.06619 28.4351 5.92228 28.5313 5.76384 28.5969C5.60541 28.6625 5.43556 28.6961 5.26405 28.696H5.26417Z"
                        fill="#F35162"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3533_37022">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="ml-5">
                  {documentToReactComponents(
                    details.fields.serviceFeature2,
                    richtext_options
                  )}
                </div>
              </div>
            )}
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
      </div>
    </div>
  );
}
