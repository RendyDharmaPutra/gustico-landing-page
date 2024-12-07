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
    <div className="py-6 p-mobile md:p-tablet lg:p-desktop flex flex-col md:flex-row justify-between gap-6 bg-background">
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
