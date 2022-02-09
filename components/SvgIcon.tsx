import classnames from "classnames";

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
      className={classnames(
        "inline-flex select-none fill-current",
        {
          "h-8 w-8": size === "lg",
          "h-6 w-6": size === "md",
          "h-5 w-5": size === "sm",
          "h-4 w-4": size === "xs",
        },
        className
      )}
      {...props}
    />
  );
}
