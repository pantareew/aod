import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function ContactBox({ content, heading, kicker }) {
  const { tel, email } = content.fields;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className=" col-start-1 col-end-13 w-full ">
        <h4 className="my-5 text-primary text-lg font-semibold font-epilogue uppercase tracking-widest">
          {kicker}
        </h4>
        <h1 className="mb-5 text-gray-900 text-4xl sm:text-5xl 2xl:text-6xl font-bold capitalize font-epilogue">
          {heading}
        </h1>
        <div className="py-5">
          <div className="location">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-6  mr-2 sm:w-7 sm:mr-5 mb-14 text-primary"
              />
              <div className="detail w-full">
                <h2 className="text-xl font-epilogue font-semibold text-gray-900">
                  Location
                </h2>
                <p className="sm:text-xl lg:text-lg 2xl:text-xl font-kumbh my-2 text-gray-800 leading-8">
                  470 St Kilda Rd, Melbourne 3004
                </p>
              </div>
            </div>
          </div>
          <div className="tel">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 sm:w-7 mr-2 sm:mr-4 mb-4 text-primary"
              />
              <div className="detail mt-10">
                <h2 className="text-xl font-epilogue font-semibold text-gray-900">
                  Call Us
                </h2>
                <p className="sm:text-xl lg:text-lg 2xl:text-xl font-kumbh my-2 text-gray-800 leading-8">
                  {tel}
                </p>
              </div>
            </div>
          </div>
          <div className="mail">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 mr-2 sm:w-7 sm:mr-4 mb-3 text-primary"
              />
              <div className="detail mt-10">
                <h2 className="text-xl font-epilogue font-semibold text-gray-900">
                  Email
                </h2>
                <p className="sm:text-xl lg:text-lg 2xl:text-xl font-kumbh my-2 text-gray-800 leading-8">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
