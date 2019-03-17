import React, { FormEvent } from "react";
import { Box, TextInput, FormField, Button, RadioButton } from "grommet";
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
        <FormField label="Your Name" htmlFor="name">
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
            size="small"
          />
        </FormField>
        <FormField label="What do you use WordPress for?" htmlFor="wp-use">
          <RadioButton
            name="wp-use"
            id="wp-use"
            required
            checked={false}
            label="Personal projects"
          />
          <RadioButton
            name="wp-use"
            id="wp-use"
            required
            checked={false}
            label="Professional projects"
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
