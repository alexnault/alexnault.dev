import { cx } from "classix";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: "xs" | "sm" | "md" | "lg";
}

export default function SvgIcon({
  className = "",
  size = "md",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden={true}
      className={cx(
        "inline-flex select-none fill-current",
        size === "lg" && "h-8 w-8",
        size === "md" && "h-6 w-6",
        size === "sm" && "h-5 w-5",
        size === "xs" && "h-4 w-4",
        className
      )}
      {...props}
    />
  );
}
