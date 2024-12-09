import { useLoaderData } from "@remix-run/react";
import { Benefits } from "~/components/benefits/benefits";
import { Hero } from "~/components/hero/hero";
import { Products } from "~/components/products/products";
import { Service } from "~/components/service/service";
import { supabase } from "~/services/supabase";

export async function loader() {
  const products = await supabase
    .from("product_category")
    .select("id, name, product( image )")
    .order("id");

  return { products };
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <Benefits />
      <Products products={products} />
      <Service />
    </>
  );
}
