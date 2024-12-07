import { SocialMedia } from "./social_media";

export const MainFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 w-full h-[72px] md:h-8 lg:h-[50px] ">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-primary">
        Gustco
      </h1>
      <SocialMedia />
    </div>
  );
};
