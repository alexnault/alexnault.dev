import classnames from "classnames";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
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
        `inline-flex fill-current select-none ${className}`,
        {
          "w-8 h-8": size === "lg",
          "w-6 h-6": size === "md",
          "w-5 h-5": size === "sm",
        }
      )}
      {...props}
    />
  );
}