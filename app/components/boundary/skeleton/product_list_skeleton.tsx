import { ProductCardSkeleton } from "./product_card_skeleton";

export const ProductListSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-[42px] w-full ">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};
