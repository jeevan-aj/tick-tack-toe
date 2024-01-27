interface Props {
  value: string;
  handleFunc: () => void;
}

export default function Square({ value, handleFunc }: Props) {
  return (
    <button
      className={"square py-4  btn btn-secondary bg-primary"}
      onClick={handleFunc}
    >
      {value}
    </button>
  );
}


