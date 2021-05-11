import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import ColorSelect from "./ColorSelect";
import Footer from "./Footer";

import { useState } from "react";

const App = () => {
  const [text, updateText] = useState("");

  return (
    <div className="App">
      <Header />
      <Input text={text} updateText={updateText} />
      <Output text={text} />
      <ColorSelect />
      <Footer />
    </div>
  );
};

export default App;
