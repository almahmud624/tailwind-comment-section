/* eslint-disable react/prop-types */
export default function IconButton({ className, children, icon, ...rest }) {
  return (
    <button
      className={`text-primary text-sm font-semibold bg-transparent hover:text-primary/80 transition-all duration-150 flex items-center gap-x-1.5 ${className}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
