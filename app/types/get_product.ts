import { PostgrestError } from "@supabase/supabase-js";
import { Product } from "./product";

export type GetProduct =
  | {
      error: PostgrestError;
      data: null;
      count: null;
      status: number;
      statusText: string;
    }
  | {
      error: null;
      data: Product[];
      count: number | null;
      status: number;
      statusText: string;
    };
