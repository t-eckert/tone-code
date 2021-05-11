import TileGroup from "./TileGroup";

type Props = {
  text: string;
};

const TONE_CODE: Map<string, number[]> = new Map([
  ["a", [0, 1]],
  ["b", [1, 0, 0, 0]],
  ["c", [1, 1, 1]],
  ["d", [1, 0, 0]],
  ["e", [0]],
  ["f", [0, 0, 1, 0]],
  ["g", [0, 0, 0, 0]],
  ["h", [1, 1, 0]],
  ["i", [0, 0]],
  ["j", [0, 1, 1, 1]],
  ["k", [0, 1, 0, 0]],
  ["l", [1, 0, 1]],
  ["m", [0, 1, 1]],
  ["n", [1, 0]],
  ["o", [1, 1]],
  ["p", [0, 1, 1, 0]],
  ["q", [1, 1, 0, 1]],
  ["r", [0, 1, 0]],
  ["s", [0, 0, 0]],
  ["t", [1]],
  ["u", [0, 0, 1]],
  ["v", [0, 0, 0, 1]],
  ["w", [1, 0, 1, 0]],
  ["x", [1, 0, 0, 1]],
  ["y", [1, 0, 1, 1]],
  ["z", [1, 1, 0, 0]],
]);

const Output = (props: Props) => (
  <section className="output">
    {translateText(props.text).map((code: number[] | undefined) => (
      <TileGroup code={code}></TileGroup>
    ))}
  </section>
);

const translateText = (text: string): (number[] | undefined)[] =>
  text.split("").map((char: string) => TONE_CODE.get(char.toLowerCase()));

export default Output;
