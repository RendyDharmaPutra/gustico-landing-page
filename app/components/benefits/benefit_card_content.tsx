type BenefitCardContentProps = {
  title: string;
  description: string;
};

export const BenefitCardContent = (props: BenefitCardContentProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full ">
      <h5 className="font-semibold text-center text-lg md:text-xl lg:text-2xl text-primary">
        {props.title}
      </h5>
      <p className="font-normal text-center text-sm md:text-base lg:text-lg text-secondaryText">
        {props.description}
      </p>
    </div>
  );
};
