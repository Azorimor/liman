import { hot } from "react-hot-loader";
import React from "react";
import { Button } from "@material-ui/core";

function App() {
  return (
    <>
      <Button color="primary">Hello World</Button>
    </>
  );
}

// export default App;
export default hot(module)(App);
