type IconProps = {
  path: string;
};

export const Icon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#2A8B39"
      className="w-[30px] md:w-10 lg:w-[50px] h-[30px] md:h-10 lg:h-[50px]"
    >
      <path d={props.path} />
    </svg>
  );
};
