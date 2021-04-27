type Props = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export default function Container({
  as: Component = "div",
  className = "",
  children,
}: Props) {
  return (
    <Component
      className={`container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 ${className}`}
    >
      {children}
    </Component>
  );
}
