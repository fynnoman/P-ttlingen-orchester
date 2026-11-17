import Image from "next/image";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import { PHOTO } from "@/lib/data";

type Props = {
  kicker: string;
  title: string;
  lead?: string;
  image?: keyof typeof PHOTO;
};

export default function PageHeader({
  kicker,
  title,
  lead,
  image = "score",
}: Props) {
  const src = PHOTO[image] as string;
  const alt =
    PHOTO[(image + "Alt") as keyof typeof PHOTO] as string | undefined;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={src}
          alt={alt || ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,37,69,0.8) 0%, rgba(11,37,69,0.7) 50%, rgba(11,37,69,0.95) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-32 sm:pt-40 md:pt-52 pb-16 md:pb-28 text-white">
        <Reveal stagger className="max-w-3xl">
          <Kicker tone="white">{kicker}</Kicker>
          <h1 className="mt-5 md:mt-6 text-4xl sm:text-5xl md:text-7xl leading-[1.05] md:leading-[1.02] tracking-tight font-semibold">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {lead}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
