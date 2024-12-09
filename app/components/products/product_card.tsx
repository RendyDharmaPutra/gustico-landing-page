import { useCallback, useState } from "react";
import { ProductCategory } from "~/types/product_category";
import { ImageButton } from "./image_button";

export const ProductCard = (props: { product: ProductCategory }) => {
  const images = props.product.product.map((product) => product.image);

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images, currentImage]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images, currentImage]);

  return (
    <div className="flex flex-col gap-4 w-full md:w-[310px] lg:w-[400px] overflow-hidden rounded-xl lg:rounded-2xl bg-background">
      <div className="px-2 pt-8 flex items-center justify-between w-full h-[120px] md:h-[140px] lg:h-40 ">
        <ImageButton type="prev" action={prevImage} />
        <img
          src={props.product.product[currentImage].image}
          alt="Produk Ecoprint"
          className=" bg-cover scale-150 h-full "
        />
        <ImageButton type="next" action={nextImage} />
      </div>
      <div className=" p-3 md:p-4 lg:p-5 flex justify-center  md:justify-start w-full ">
        <h6 className="font-bold md:text-lg lg:text-xl text-primary">
          {props.product.name}
        </h6>
      </div>
    </div>
  );
};
