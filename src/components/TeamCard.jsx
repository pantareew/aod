import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function TeamCard({ content }) {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-16 ">
      {content.map((item) => (
        <div
          key={item.sys.id}
          className="relative p-5 rounded-[20px] bg-upToDate hover:bg-primary group "
        >
          <Image
            className="h-60 object-cover w-full rounded-[20px]"
            src={"https:" + item.fields.image.fields.file.url}
            width={item.fields.image.fields.file.details.image.width}
            height={item.fields.image.fields.file.details.image.height}
          />

          <div className="px-6 py-4 text-center">
            <p className="text-gray my-2 group-hover:text-white">
              {item.fields.role}
            </p>
            <div className="font-semibold text-2xl font-epilogue my-2">
              {item.fields.name}
            </div>
          </div>
          {item.fields.linkedin && (
            <Link
              href={item.fields.linkedin}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  color: "#f35162",
                  backgroundColor: "white",
                  width: 30,
                }}
              />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
