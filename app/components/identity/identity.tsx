export const Identity = () => {
  return (
    <div className="flex flex-col  lg:flex-row items-center lg:items-start gap-8 lg:gap-10 w-full ">
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4 ">
        <h4 className="font-bold text-center lg:text-left text-[32px] md:text-[40px] lg:text-5xl text-primary">
          Cerita di Balik Gustco
        </h4>
        <p className="font-normal text-center lg:text-left md:text-lg lg:text-xl text-secondaryText">
          Gusto atau August Ecoprint juga dikenal sebagai Citra Anugerah adalah
          UMKM yang menjual dan memberikan pelatihan untuk produk Ecoprint,
          menghadirkan keindahan alam ke dalam setiap karya dengan sentuhan
          kreatif dan keberlanjutan. didirikan pada tahun 2016 oleh Sri Agustin
          yang berawal dari kecintaan pada seni dan lingkungan, sebagai solusi
          fashion yang berkelanjutan. Dengan pengalaman lebih dari 5 tahun di
          bidang ecoprint, Gustco terus berinovasi untuk memberikan produk
          terbaik bagi pelanggan.
        </p>
      </div>
      <div className="w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden ">
        <img src="owner.png" alt="Citra Anugerah Ecoprint" />
      </div>
    </div>
  );
};
