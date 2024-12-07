import { NavItem } from "./nav_item";

export const NavContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 ">
      <NavItem name="Beranda" route="/" />
      <NavItem name="Produk" route="/products" />
      <NavItem name="Tentang" route="/about" />
    </div>
  );
};
