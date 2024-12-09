import { CtaHero } from "./cta_hero";

export const ContentHero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center lg:items-start gap-8 w-full lg:w-[800px] ">
      <h3 className="font-bold text-center lg:text-left text-4xl md:text-5xl lg:text-[64px] lg:leading-tight text-background">
        Transformasi Busana dengan Sentuhan Alam
      </h3>
      <p className="font-normal text-center lg:text-left text-xl md:text-2xl text-background">
        Hadirkan keindahan dan keberlanjutan melalui ecoprint. Temukan produk
        dan pelatihan yang memadukan seni, keunikan, dan tanggung jawab
        lingkungan
      </p>
      <CtaHero />
    </div>
  );
};
