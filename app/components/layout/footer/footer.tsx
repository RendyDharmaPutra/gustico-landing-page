import { CopyRight } from "./copyright";
import { MainFooter } from "./main_footer";

export const Footer = () => {
  return (
    <div className="py-5 p-component flex flex-col gap-3 md:gap-3.5 lg:gap-4 w-full bg-background">
      <MainFooter />
      <CopyRight />
    </div>
  );
};
