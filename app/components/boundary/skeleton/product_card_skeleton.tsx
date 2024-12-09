export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2.5 w-full md:w-[310px] lg:w-[400px] overflow-hidden rounded-xl lg:rounded-2xl bg-background">
      <div className="py-2 flex items-center justify-center w-full h-[120px] md:h-[140px] lg:h-40 "></div>
      <div className=" p-3 md:p-4 lg:p-5 flex justify-center  md:justify-start w-full ">
        <div className="w-full rounded-full h-1"></div>
      </div>
    </div>
  );
};
