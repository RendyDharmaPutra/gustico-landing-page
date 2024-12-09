import { Link } from "@remix-run/react";

export const CtaHero = () => {
  return (
    <div className="flex flex-row gap-3 md:gap-3.5 lg:gap-4  ">
      <Link
        target="_blank"
        to={"https://wa.me/+6281233303635"}
        className="p-4 flex justify-center items-center h-10 md:h-11 lg:h-12 rounded-full border border-background hover:bg-background font-medium text-sm md:text-base text-background hover:text-primary duration-200"
      >
        Hubungi Kami
      </Link>
      <Link
        to={"#benefits"}
        className="p-4 flex justify-center items-center h-10 md:h-11 lg:h-12 rounded-full bg-background hover:bg-primary font-medium text-sm md:text-base text-primary hover:text-background duration-200"
      >
        Jelajahi Lebih Lanjut
      </Link>
    </div>
  );
};
