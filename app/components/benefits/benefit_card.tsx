import { Icon } from "../icon";
import { BenefitCardContent } from "./benefit_card_content";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-6 w-full md:w-1/3 lg:w-1/4 ">
      <Icon path={props.icon} />
      <BenefitCardContent title={props.title} description={props.description} />
    </div>
  );
};
