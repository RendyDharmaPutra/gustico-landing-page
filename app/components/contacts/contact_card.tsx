import { Link } from "@remix-run/react";

type ContactCardProps = {
  type: string;
  path: string;
  link: string;
  name: string;
  value: string;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <Link
      to={props.link}
      target="_blank"
      className="px-4 md:px-5 lg:px-6 py-3 lg:py-4 flex flex-row items-center gap-3 lg:gap-[14px] w-full md:w-fit rounded-lg hover:shadow-sm hover:bg-background duration-200"
    >
      <div className="w-8 lg:w-12 h-8 lg:h-12 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2A8B39"
          viewBox={`0 0 ${props.type} 512`}
        >
          <path d={props.path} />
        </svg>
      </div>
      <div className="flex flex-col gap-2 ">
        <h6 className="font-medium text-sm md:text-base lg:text-lg text-primary">
          {props.name}
        </h6>
        <p className="font-normal text-sm lg:text-base text-secondaryText">
          {props.value}
        </p>
      </div>
    </Link>
  );
};
