import { BenefitList } from "./benefits_list";
import { HeadlineBenefits } from "./headline_benefits";

export const Benefits = () => {
  return (
    <div className="py-14 md:py-[60px] lg:py-[110px] p-component flex flex-col justify-center gap-[42px] gmd:gap-12 lg:gap-14 w-full bg-background">
      <HeadlineBenefits />
      <BenefitList />
    </div>
  );
};
