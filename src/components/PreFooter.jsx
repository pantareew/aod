import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function PreFooter({ content }) {
  const { tel, profile, fb, linkedin, ig } = content.fields;
  return (
    <div className="bg-primary">
      <div className="grid grid-cols-12 py-5 ">
        <div className="col-start-2 col-end-12 sm:col-start-2 sm:col-end-4 2xl:col-start-8 2xl:col-end-10 lg:col-start-7 lg:col-end-9 md:col-start-5 md:col-end-8 sm:ml-auto flex justify-self-center sm:justify-self-end">
          <img
            className="rounded-full"
            src={"https:" + profile.fields.file.url}
            width={profile.fields.file.details.image.width}
            height={profile.fields.file.details.image.height}
            style={{
              objectFit: "cover",
              height: "50px",
              width: "50px",
              objectPosition: "center",
            }}
          />
          <div className="font-epilogue ml-5">
            <p>Need help?</p>
            <h6 className=" text-xl font-semibold tracking-widest">{tel}</h6>
          </div>
        </div>

        <div className="sm:justify-self-end justify-self-center mt-5 sm:mt-0 col-start-2 col-end-12 sm:col-start-8 sm:col-end-12 md:col-start-8 md:col-end-12 lg:col-start-9 lg:col-end-12 xl:col-start-10 xl:col-end-12 2xl:col-start-10 2xl:col-end-12 text-xl font-semibold flex items-center ">
          <div className="flex items-center sm:ml-auto">
            <h6>Follow Us: </h6>
            <div className="flex ml-2 items-center">
              <Link href={fb} className="mr-2">
                <FontAwesomeIcon icon={faSquareFacebook} className="w-7" />
              </Link>
              <Link href={linkedin} className="mx-1">
                <FontAwesomeIcon icon={faLinkedin} className="w-7" />
              </Link>
              <Link href={ig} className="ml-2">
                <FontAwesomeIcon icon={faSquareInstagram} className="w-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
