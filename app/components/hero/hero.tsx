import { ContentHero } from "./content_hero";

export const Hero = () => {
  return (
    <div className="relative py-5 p-component flex items-center h-[50vh] md:h-[80vh] lg:h-[90vh] bg-primary">
      <img
        src="/hero_image.jpg"
        alt="Pelatihan Ecoprint"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
      />
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-black via-[#0b270f]/75 to-black/75 opacity-60"></div>
      <ContentHero />
    </div>
  );
};
