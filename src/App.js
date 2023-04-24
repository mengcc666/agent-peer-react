import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const element = useRoutes(routes)
  return (
    <div>
      {element} {/*展示区*/}
    </div>
  );
}

export default App;
