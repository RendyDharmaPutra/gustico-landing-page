import { useCallback, useEffect, useState } from "react";

const getIsMobile = () => {
  if (typeof window === "undefined") return false;

  return window.innerWidth <= 768;
};

export default function useWindow() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  const onResize = useCallback(() => {
    setIsMobile(getIsMobile());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
