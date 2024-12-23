export const ImageButton = (props: {
  type: "next" | "prev";
  action: () => void;
}) => {
  const path =
    props.type === "next"
      ? "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
      : "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z";

  return (
    <button
      onClick={props.action}
      className=" px-1 py-1 rounded-full active:bg-TertiaryText/20 duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="#2A8B39"
        className="w-6 h-6 "
      >
        <path d={path} />
      </svg>
    </button>
  );
};
