import { ProductGalleryCardSkeleton } from "./product_gallery_card_skeleton";

export const ContentGallerySkeleton = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-2 gap-y-6 lg:gap-y-12 w-full ">
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
      <ProductGalleryCardSkeleton />
    </div>
  );
};
