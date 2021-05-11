type Props = {
  code: number[] | undefined;
};

const TileGroup = (props: Props) => {
  const display =
    props.code &&
    props.code.map((filled: number) => (
      <div className={"unit " + fillClass(filled)}></div>
    ));

  return <>{display}</>;
};

const fillClass = (filled: number): string => {
  if (filled === 0) return "unfilled";
  else return "filled";
};

export default TileGroup;
