export default function SvgIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden={true}
      className={`inline-flex w-6 h-6 fill-current select-none ${className}`}
      {...props}
    />
  );
}
