export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
