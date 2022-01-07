import "./App.css";
import Video from "./videoComponent.js";
import Image from "./imageComponent.js";
import { useState } from "react";
// import { Button } from "@economist/design-system/common";
import "../node_modules/@economist/design-system/dist/css/common/components/color/color.css";

function App() {
  const [videoEnd, handleVideoEnd] = useState(0);

  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <header>
        <img src="/images/Standard.png" style={{ paddingRight: "10px" }} />
        <img src="/images/WA_2022_Logo.png" style={{ minWidth: "300px" }} />
      </header>
      <div className="vid-container">
        {!videoEnd ? <Video videoEndHandler={handleVideoEnd} /> : <Image />}
      </div>
      <footer>
        <a
          href="https://www.economist.com/the-world-ahead/2021/12/13/the-world-ahead-2022"
          target="_blank"
        >
          Go to Index
        </a>
      </footer>
    </div>
  );
}

export default App;
