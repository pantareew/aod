import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function TopBanner({ content }) {
  const { tel, fb, linkedin, ig, email } = content.fields;
  return (
    <div className="bg-primary py-2">
      <div className="grid grid-cols-12 ">
        <div className=" col-start-1 col-end-2 ml-auto">
          <Link href="/">
            <Image src="/brand.png" width={65} height={20} />
          </Link>
        </div>

        <div className="col-start-2 col-end-4 ml-auto pl-2  flex items-center">
          <div className="mx-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white", width: "20" }}
            />
          </div>
          <p className="font-kumbh">{email}</p>
        </div>
        <div className="col-start-4 col-end-6 xl:ml-[75px] 2xl:ml-10 flex items-center  ">
          <div className="mr-2">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "white", width: "20" }}
            />
          </div>
          <p className="font-kumbh tracking-wider">{tel}</p>
        </div>
        <div className="xl:col-start-7 xl:col-end-11 2xl:col-start-6 2xl:col-end-10 flex items-center ">
          <Link
            href="/get-in-touch"
            className="font-kumbh tracking-wider flex items-center"
          >
            Get a FREE Google ads or SEO report
            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-5" />
          </Link>
        </div>
        <div className="col-end-12 ml-auto flex items-center ">
          <Link href={fb} className="mx-3">
            <FontAwesomeIcon icon={faSquareFacebook} style={{ width: 30 }} />
          </Link>
          <Link href={linkedin} className="mx-3">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "white", width: 30 }}
            />
          </Link>
          <Link href={ig} className="ml-3">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ color: "white", width: 30 }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
