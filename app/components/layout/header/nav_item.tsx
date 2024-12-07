import { Link } from "@remix-run/react";

type NavItemProps = {
  name: string;
  route: string;
};

export const NavItem = (props: NavItemProps) => {
  return (
    <Link
      to={props.route}
      className="px-4 py-2 rounded-xl md:rounded-full hover:bg-primary/10 duration-200 "
    >
      <p className="font-medium text-sm md:text-base lg:text-lg text-primary">
        {props.name}
      </p>
    </Link>
  );
};
