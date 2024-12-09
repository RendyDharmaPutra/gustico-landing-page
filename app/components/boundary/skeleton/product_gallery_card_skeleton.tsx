export const ProductGalleryCardSkeleton = () => {
  return (
    <div className="group p-4 flex justify-center items-center w-[190px] h-[210px] md:w-[200px] md:h-[220px] lg:w-[280px] lg:h-[300px] rounded-2xl bg-primary overflow-hidden">
      <div className="h-full group-hover:scale-110 duration-200"></div>
    </div>
  );
};
