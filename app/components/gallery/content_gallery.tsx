import { GetProduct } from "~/types/get_product";
import { ProductGalleryCard } from "./product_gallery_card";

export const ContentGallery = (props: { products: GetProduct }) => {
  const data = props.products.data;

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-x-2 gap-y-6 lg:gap-y-12 w-full ">
      {data?.map((product) => (
        <ProductGalleryCard key={product.id} image={product.image} />
      ))}
    </div>
  );
};
