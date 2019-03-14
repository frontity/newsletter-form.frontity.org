import React, { Component } from "react";
import { Grommet, Box } from "grommet";
import frontityTheme from "./theme";
import useStore from "./store";
import Newsletter from "./components/Newsletter";
import Feedback from "./components/Feedback";
import Thanks from "./components/Thanks";

const App = () => {
  const { state } = useStore();
  return (
    <Grommet theme={frontityTheme}>
      <Box fill justify="center" direction="row" wrap>
        <Box gap="large" justify="start" direction="column" width="100%">
          {!state.sent.newsletter && <Newsletter />}
          {state.sent.newsletter && !state.sent.feedback && <Feedback />}
          {state.sent.newsletter && state.sent.feedback && <Thanks />}
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
