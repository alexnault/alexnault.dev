import SvgIcon, { SvgIconProps } from "components/svgicon";

export default function HeartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </SvgIcon>
  );
}
