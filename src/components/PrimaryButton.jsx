/* eslint-disable react/prop-types */
export default function PrimaryButton({ className, children, ...rest }) {
  return (
    <button
      className={`text-white text-sm font-semibold bg-primary px-5 py-2.5 rounded-md hover:bg-primary/80 hover:text-white transition-all duration-150 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
