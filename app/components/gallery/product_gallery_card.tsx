export const ProductGalleryCard = (props: { image: string }) => {
  return (
    <div className="group p-4 flex justify-center items-center w-full h-[210px] md:w-[200px] md:h-[220px] lg:w-[280px] lg:h-[300px] rounded-2xl bg-primary overflow-hidden">
      <img
        src={props.image}
        alt="Produk Ecoprint"
        className="h-full group-hover:scale-110 duration-200 bg-red-500"
      />
    </div>
  );
};
