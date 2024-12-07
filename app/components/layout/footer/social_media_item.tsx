import { Link } from "@remix-run/react";

export const SocialMediaItem = (props: {
  route: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={props.route}
      className="p-2 md:1.5 flex justify-center items-center w-9 lg:w-10 h-9 lg:h-10  "
    >
      {props.children}
    </Link>
  );
};
