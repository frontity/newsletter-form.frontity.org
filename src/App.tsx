import React, { Component } from "react";
import { Grommet, Box } from "grommet";
import frontityTheme from "./theme";
import Form from "./components/Form";

const App = () => (
  <Grommet theme={frontityTheme}>
    <Box fill justify="center" direction="row" wrap>
      <Box gap="large" justify="start" direction="column" width="100%">
        <Form />
      </Box>
    </Box>
  </Grommet>
);

export default App;
