import { Suspense } from "react";
import { HeadlineProduct } from "./headline_product";
import { ProductList } from "./product_list";
import { GetProductCategory } from "~/types/get_product_category";
import { ProductListSkeleton } from "../boundary/skeleton/product_list_skeleton";

export const Products = (props: { products: GetProductCategory }) => {
  return (
    <div className=" p-component py-[50px] md:py-[60px] lg:py-[110px] flex flex-col justify-center  gap-[56px] w-full bg-primary">
      <HeadlineProduct />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList products={props.products} />
      </Suspense>
    </div>
  );
};
