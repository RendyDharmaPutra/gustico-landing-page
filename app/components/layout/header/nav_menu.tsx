export const NavMenu = (props: { action: () => void }) => {
  return (
    <button
      onClick={props.action}
      className="flex flex-col md:hidden tems-center justify-center gap-1 w-5 "
    >
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
    </button>
  );
};
