import ProjectLink from "./ProjectLink";
import Image from "next/image";

export default function ProjCard({ content }) {
  const image = content.fields;

  return (
    <div className="relative group flex justify-center items-center">
      <Image
        className="w-full rounded-[20px] object-cover h-96"
        src={"https:" + image.image.fields.file.url}
        width={image.image.fields.file.details.image.width}
        height={image.image.fields.file.details.image.height}
      />
      <div className="absolute bottom-0 ml-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity">
        <ProjectLink content={content} />
      </div>
    </div>
  );
}
