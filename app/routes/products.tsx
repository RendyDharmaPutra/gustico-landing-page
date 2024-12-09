import { useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { ContentGallerySkeleton } from "~/components/boundary/skeleton/content_gallery_skeleton";
import { ContentGallery } from "~/components/gallery/content_gallery";
import { HeadlineGallery } from "~/components/gallery/headline_gallery";
import { supabase } from "~/services/supabase";

export async function loader() {
  const products = await supabase.from("product").select("id, image");

  return {
    products,
  };
}

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="p-component py-8 md:py-12 lg:py-16 flex flex-col gap-[56px] w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-background">
      <HeadlineGallery />
      <Suspense fallback={<ContentGallerySkeleton />}>
        <ContentGallery products={products} />
      </Suspense>
    </div>
  );
}
