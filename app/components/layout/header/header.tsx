import { NavHeadline } from "./nav_headline";
import { NavContent } from "./nav_content";
import { NavMenu } from "./nav_menu";
import useWindow from "~/hooks/useWIndow";
import { useCallback, useEffect, useState } from "react";
import { Presence } from "~/components/motion/presence";

export const Header = () => {
  const isMobile = useWindow();
  const [show, setShow] = useState(false);

  const handleNav = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    isMobile ? setShow(false) : setShow(true);
  }, [isMobile]);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 py-6 p-component flex flex-col md:flex-row justify-between gap-6 shadow-lg bg-background">
      <div className="flex flex-row justify-between ">
        <NavHeadline />
        {isMobile && <NavMenu action={handleNav} />}
      </div>
      {show && (
        <Presence>
          <NavContent />
        </Presence>
      )}
    </div>
  );
};
