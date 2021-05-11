type Props = {
  text: string;
  updateText: Function;
};

const Input = (props: Props) => {
  return (
    <div>
      <textarea
        name="tone-code-input"
        id="tone-code-input"
        value={props.text}
        onChange={(event) => {
          props.updateText(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
