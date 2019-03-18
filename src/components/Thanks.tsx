import React from "react";
import { Box, Heading, Text, Button } from "grommet";

const Thanks = () => (
  <Box
    gap="small"
    pad="40px"
    round="xsmall"
    align="stretch"
    elevation="small"
    background="white"
  >
    <Heading>Big Thanks!</Heading>
    <Text>We will send you an email when the alpha is ready 💪🤗</Text>
    <Button primary color="brand" label="Join our community" />
  </Box>
);

export default Thanks;
