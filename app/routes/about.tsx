import { Contacts } from "~/components/contacts/contacts";
import { Identity } from "~/components/identity/identity";

export default function About() {
  return (
    <div className="p-component py-5 md:py-10 lg:py-[60px] flex flex-col gap-8 w-full bg-background">
      <Identity />
      <Contacts />
    </div>
  );
}
