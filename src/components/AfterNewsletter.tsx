import React, { FormEvent } from "react";
import { Box, TextInput, FormField, Button } from "grommet";
import Icon from "./Icon";
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
        gap="small"
        pad="40px"
        round="xsmall"
        align="stretch"
        elevation="small"
        background="white"
      >
        <FormField label="FEEDBACK QUESTION 1" htmlFor="question1">
          <TextInput
            id="question1"
            required
            placeholder="Answer to question 1"
            value={state.afterNewsletter.question1}
            onChange={e => {
              actions.setAfterNewsletterProp({
                name: "question1",
                value: e.target.value
              });
            }}
            size="small"
          />
        </FormField>
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
