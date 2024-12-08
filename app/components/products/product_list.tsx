import { ProductCard } from "./product_card";

export const ProductList = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-[42px] w-full ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
