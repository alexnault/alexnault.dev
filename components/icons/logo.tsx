import SvgIcon from "components/svgicon";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 51.961524" preserveAspectRatio="xMidYMid" {...props}>
      <path
        d="
        M0.000,51.961524
        L30.000,0.000
        L50.000,34.641016
        L30.000,34.641016
        L20.000,51.961524
        Z
        M60.000,51.961524
        L40.000,51.961524
        L70.000,0.000
        L80.000,17.320508
        Z"
      />
    </svg>
  );
}
