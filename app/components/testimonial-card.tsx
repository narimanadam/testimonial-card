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
    <div className="flex w-[21rem] max-w-xs flex-col gap-4 rounded-lg bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
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
          <p className="text-lg font-semibold text-neutral-900">{name}</p>
          <p className="text-sm font-normal text-neutral-600">{handle}</p>
        </div>
      </div>

      <p className="text-base font-normal leading-7 text-neutral-600">
        {quote}
      </p>
    </div>
  );
}
