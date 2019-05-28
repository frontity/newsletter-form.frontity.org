import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Github, Twitter } from "grommet-icons";
import Frontity from "./Icon";

const getQuery = (params: { [key: string]: string }): string =>
  Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");

const shareTweet = (params: { [key: string]: string }) =>
  `https://twitter.com/intent/tweet?${getQuery(params)}`;

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
        Thank you!
      </Heading>
      <Text>
        You’ll be the first to hear about our news and updates. 🚀 Here’s
        what you can do next:
      </Text>
    </Box>
    <Box gap="20px">
      <Box direction="row" gap="medium">
        <Box
          flex={false}
          width="60px"
          height="60px"
          align="center"
          justify="center"
          round="full"
          background="#f7f7f7"
        >
          <Github color="text" size="40px" />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">
            Learn more
          </Heading>
          <Text>
            Take a look at our{" "}
            <Anchor target="_blank" href="https://github.com/frontity">
              Github repository
            </Anchor>
            .
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Box
          flex={false}
          width="60px"
          height="60px"
          align="center"
          justify="center"
          round="full"
          background="#f7f7f7"
        >
          <Frontity color="text" size={30} />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">
            Join our community
          </Heading>
          <Text>
            Come{' '}
            <Anchor target="_blank" href="https://community.frontity.org">
              say hello
            </Anchor>{' '}
            or ask any questions!
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Box
          flex={false}
          width="60px"
          height="60px"
          align="center"
          justify="center"
          round="full"
          background="#f7f7f7"
        >
          <Twitter color="text" size="32px" />
        </Box>
        <Box gap="small">
          <Heading level="3" margin="0">
            Spread the word
          </Heading>
          <Text>
            <Anchor
              target="_blank"
              href={shareTweet({
                text:
                  "⚛ @Frontity is a free and open source framework for building #WordPress themes using #React. Check it out!",
                url: "https://frontity.org/beta",
                hashtags: "FrontityLaunch"
              })}
            >
              Tell the world
            </Anchor>{' '}
            about Frontity!
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Thanks;
