import React from "react";
import { Box, Heading, Text, Button } from "grommet";

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
      <Heading margin="0">Big Thanks!</Heading>
      <Text>We will send you an email when the alpha is ready 💪🤗</Text>
    </Box>
    <Button primary color="brand" label="Join our community" />
  </Box>
);

export default Thanks;
