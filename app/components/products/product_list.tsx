import { ProductCard } from "./product_card";
import { GetProductCategory } from "~/types/get_product_category";

export const ProductList = (props: { products: GetProductCategory }) => {
  const data = props.products.data;

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-[42px] w-full ">
      {data
        ?.filter((product) => product.product.length > 0)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
