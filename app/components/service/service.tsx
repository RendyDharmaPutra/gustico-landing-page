import { ContentService } from "./content_service";

export const Service = () => {
  return (
    <div className="relative p-component py-[40px] md:py-[60px] lg:py-[100px] flex items-center w-full h-[400px] md:h-[500px] lg:h-[700px] ">
      <img
        src="/training_service.jpg"
        alt="Pelatihan Ecoprint"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
      />
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-black via-[#0F3615] to-black/75 opacity-50"></div>
      <ContentService />
    </div>
  );
};
