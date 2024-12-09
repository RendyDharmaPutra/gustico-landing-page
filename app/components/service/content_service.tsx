import { Link } from "@remix-run/react";

export const ContentService = () => {
  return (
    <div className="relative z-20 flex flex-col items-center lg:items-start gap-8 w-full lg:w-[660px] ">
      <h4 className="font-bold text-center lg:text-left text-2xl md:text-[32px] lg:text-[40px] leading-tight text-background">
        Kembangkan Keterampilan Baru Bersama Kami
      </h4>
      <p className="font-normal text-center lg:text-left md:text-lg lg:text-xl text-background">
        Raih kesempatan belajar langsung dan temukan produk-produk inovatif
        berbasis bahan organik yang memperkaya hidup Anda
      </p>
      <Link
        target="_blank"
        to={"https://wa.me/+6281233303635"}
        className="px-5 md:px-6 lg:px-[30px] py-3 md:py-3.5 lg:py-4 rounded-full bg-background hover:bg-primary font-medium text-sm md:text-base lg:text-lg text-primary hover:text-background duration-200"
      >
        Jadwalkan Sekarang
      </Link>
    </div>
  );
};
