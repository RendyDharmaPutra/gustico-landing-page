import { useContacts } from "~/hooks/useContacts";
import { ContactCard } from "./contact_card";

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <div className="p-6 md:p-8 lg:p-[42px] flex flex-col items-center md:items-start gap-6 md:gap-8 lg:gap-[42px] rounded-2xl bg-primary/10">
      <div className="w-full ">
        <h4 className="font-semibold text-center md:text-left text-2xl md:text-[28px] lg:text-[32px] md:leading-6 text-primary">
          Kontak Kami
        </h4>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-between gap-y-6 w-full ">
        {contacts.map((contact) => (
          <ContactCard
            name={contact.name}
            value={contact.value}
            link={contact.link}
            type={contact.type}
            path={contact.path}
          />
        ))}
      </div>
    </div>
  );
};
