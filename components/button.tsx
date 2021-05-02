interface Props extends React.ComponentProps<"button"> {}

export default function Button({
  type = "button",
  className = "",
  // color = "blue",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
