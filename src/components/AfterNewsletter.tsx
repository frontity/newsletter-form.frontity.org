import React, { FormEvent } from "react";
import { Box, Text, TextInput, FormField, Button, Heading } from "grommet";
import Icon from "./Icon";
import Question from "./Question";
import useStore from "../store";

const AfterNewsletter = () => {
  const { state, actions } = useStore();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.sendAfterNewsletter();
  };
  return (
    <form id="after-newsletter" onSubmit={onSubmit}>
      <Box
        gap="32px"
        pad="large"
        round="xsmall"
        align="stretch"
        elevation="small"
        background="white"
      >
        <Box gap="small">
          <Heading level="3" margin="0">
            Thanks for your interest in Frontity!
          </Heading>
          <Text>
            Could you tell us a bit more about yourself? Your input will help us
            a lot! 😊
          </Text>
        </Box>
        <Box gap="medium">
          <FormField label="Full Name" htmlFor="name">
            <TextInput
              id="name"
              required
              placeholder="John"
              value={state.afterNewsletter.name}
              onChange={e => {
                actions.setAfterNewsletterProp({
                  name: "name",
                  value: e.target.value
                });
              }}
            />
          </FormField>
          {state.afterNewsletter.questions.map((q, index) => (
            <Question key={q.name} index={index} />
          ))}
        </Box>
        <Box align="stretch" elevation="small" round="8px">
          <Button
            primary
            color="brand"
            label="Finish"
            disabled={state.sending.afterNewsletter}
            icon={<Icon />}
            type="submit"
          />
        </Box>
      </Box>
    </form>
  );
};

export default AfterNewsletter;
