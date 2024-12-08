import type { MetaFunction } from "@remix-run/node";
import { Benefits } from "~/components/benefits/benefits";
import { Hero } from "~/components/hero/hero";
import { Products } from "~/components/products/products";
import { Service } from "~/components/service/service";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <Service />
    </>
  );
}
