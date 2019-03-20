import React from "react";
import { Box, Heading, Text, Button } from "grommet";
import { Github, Twitter } from "grommet-icons";
import Frontity from "./Icon";

const Thanks = () => (
  <Box
    gap="32px"
    pad="40px"
    round="xsmall"
    align="stretch"
    elevation="small"
    background="white"
  >
    <Box gap="10px">
      <Heading level="2" margin="0">
        Many thanks for taking the time to answer!
      </Heading>
      <Text>
        You’ll be the first to hear about our news and updates, including the
        alpha version. 💪🤗
      </Text>
      <Text>Here’s what you can do next:</Text>
    </Box>
    <Box gap="20px">
      <Box direction="row" gap="medium">
        <Box flex={false} width="60px" height="60px" align="center" justify="center" round="full" background="#f7f7f7">
          <Github color="#1f38c5" size="40px" />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">Learn more</Heading>
          <Text>Take a look at our Github repository.</Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Box flex={false} width="60px" height="60px" align="center" justify="center" round="full" background="#f7f7f7">
          <Frontity color="#1f38c5" size={30} />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">Get involved</Heading>
          <Text>come say hello to the forum, introduce yourself or ask any questions!</Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Box flex={false} width="60px" height="60px" align="center" justify="center" round="full" background="#f7f7f7">
          <Twitter color="#1f38c5" size="32px" />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">Tweet about us</Heading>
          <Text>Help us spread the word!</Text>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Thanks;
