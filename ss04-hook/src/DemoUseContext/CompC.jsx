import React, { useContext } from "react";
import { themeContext } from "./ParentContext";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid
        incidunt ipsa officia vel aspernatur. Nam ex deserunt vero tempora
        atque, non qui itaque, cum commodi obcaecati mollitia expedita
        voluptatibus.
      </p>
    </div>
  );
}

export default CompC;
