type Props = {
  className?: string;
};

export default function Divider(props: Props) {
  return (
    <hr
      className={`border-0 bg-gray-200 ${props.className}`}
      style={{ width: 1 }}
    />
  );
}
