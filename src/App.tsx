import React, { Component } from "react";
import { Grommet, Box } from "grommet";
import frontityTheme from "./theme";
import useStore from "./store";
import Newsletter from "./components/Newsletter";
import AfterNewsletter from "./components/AfterNewsletter";
import Thanks from "./components/Thanks";

const App = () => {
  const { state } = useStore();
  return (
    <Grommet theme={frontityTheme}>
      <Box fill justify="center" direction="row" wrap>
        <Box gap="large" justify="start" direction="column" width="100%">
          {!state.sent.newsletter && <Newsletter />}
          {state.sent.newsletter && !state.sent.afterNewsletter && (
            <AfterNewsletter />
          )}
          {state.sent.newsletter && state.sent.afterNewsletter && <Thanks />}
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
