import { FacebookIcon } from "~/components/icons/social/facebook";
import { SocialMediaItem } from "./social_media_item";
import { InstagramIcon } from "~/components/icons/social/instagram";
import { WhatssApp } from "~/components/icons/social/whatsapp";

export const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center md:justify-start items-center gap-1.5 md:gap-2 lg:gap-4 w-full md:w-fit ">
      <SocialMediaItem route="https://facebook.com/citra.anugerah.712">
        <FacebookIcon size="100" />
      </SocialMediaItem>
      <SocialMediaItem route="https://instagram.com/citraanugerah">
        <InstagramIcon size="100" />
      </SocialMediaItem>
      <SocialMediaItem route="https://wa.me/+6281233303635">
        <WhatssApp size="100" />
      </SocialMediaItem>
    </div>
  );
};
