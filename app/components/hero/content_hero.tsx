import { CtaHero } from "./cta_hero";

export const ContentHero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center lg:items-start gap-8 w-full lg:w-[664px] ">
      <h3 className="font-bold text-center lg:text-left text-4xl md:text-5xl lg:text-[64px] text-background">
        Harmoni Alam dalam Gaya
      </h3>
      <p className="font-medium text-center lg:text-left text-xl md:text-2xl text-background">
        Busana berbahan alami untuk menciptakan dampak positif pada lingkungan
      </p>
      <CtaHero />
    </div>
  );
};
