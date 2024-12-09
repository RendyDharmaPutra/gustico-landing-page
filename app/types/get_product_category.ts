import { PostgrestError } from "@supabase/supabase-js";
import { ProductCategory } from "./product_category";

export type GetProductCategory =
  | {
      error: PostgrestError;
      data: null;
      count: null;
      status: number;
      statusText: string;
    }
  | {
      error: null;
      data: ProductCategory[];
      count: number | null;
      status: number;
      statusText: string;
    };
