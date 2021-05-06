import SvgIcon from "components/svgicon";

export default function DarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
    </SvgIcon>
  );
}
