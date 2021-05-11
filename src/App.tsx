import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import Footer from "./Footer";

import { useState } from "react";

const App = () => {
  const [text, updateText] = useState("");

  return (
    <div className="App">
      <div className="interface">
        <Header />
        <div className="io">
          <Input text={text} updateText={updateText} />
          <Output text={text} />
        </div>
        {/* <ColorSelect /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
