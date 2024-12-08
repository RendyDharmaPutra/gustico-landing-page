import { HeadlineProduct } from "./headline_product";
import { ProductList } from "./product_list";

export const Products = () => {
  return (
    <div className=" p-component py-[50px] md:py-[60px] lg:py-[110px] flex flex-col justify-center  gap-[56px] w-full bg-primary">
      <HeadlineProduct />
      <ProductList />
    </div>
  );
};
