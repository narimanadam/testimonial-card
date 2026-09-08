import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  handle: string;
  quote: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function TestimonialCard({
  name,
  handle,
  quote,
  imageSrc = "/testimonial-thumbnail.png",
  imageAlt = "testimonial thumbnail",
}: TestimonialCardProps) {
  return (
    <div className="flex w-full max-w-85 h-58.25 flex-col gap-4 rounded-lg bg-white p-6 shadow-[0px_1px_2px_-1px_rgb(0_0_0/0.10),0px_1px_3px_0_rgb(0_0_0/0.10)]">
      <div className="flex items-center gap-4">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={imageSrc}
          alt={imageAlt}
          width={48}
          height={48}
          priority
        />

        <div className="flex flex-col">
          <span className="text-lg font-semibold text-justify text-neutral-900 leading-7 pb-px">{name}</span>
          <span className="text-sm font-normal text-neutral-600 leading-5">{handle}</span>
        </div>
      </div>

      <span className="text-base font-normal text-neutral-600 leading-6">
        {quote}
      </span>
    </div>
  );
}
