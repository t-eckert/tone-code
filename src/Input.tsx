type Props = {
  text: string;
  updateText: Function;
};

const Input = (props: Props) => {
  return (
    <section className="input">
      <textarea
        name="tone-code-input"
        id="tone-code-input"
        placeholder="Type here to create Tone Code"
        value={props.text}
        onChange={(event) => {
          props.updateText(event.target.value);
        }}
      />
    </section>
  );
};

export default Input;
