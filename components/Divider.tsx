type Props = {
  className?: string;
};

export default function Divider(props: Props) {
  return (
    <hr
      className={`bg-gray-200 border-0 ${props.className}`}
      style={{ width: 1 }}
    />
  );
}
