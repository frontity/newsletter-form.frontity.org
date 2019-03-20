import React, { FormEvent } from "react";
import { Box, TextInput, FormField, Button } from "grommet";
import Icon from "./Icon";
import useStore from "../store";

const Newsletter = () => {
  const { state, actions } = useStore();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.sendNewsletter();
  };
  return (
    <form id="newsletter" onSubmit={onSubmit}>
      <Box
        gap="32px"
        pad="large"
        round="xsmall"
        align="stretch"
        elevation="small"
        background="white"
      >
        <Box gap="medium">
          <FormField label="Your email address" htmlFor="email" className="uppercase">
            <TextInput
              id="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              placeholder="name@example.com"
              value={state.newsletter.email}
              onChange={e => {
                actions.setNewsletterProp({
                  name: "email",
                  value: e.target.value
                });
              }}
              size="medium"
            />
          </FormField>
          <FormField label="Your role" htmlFor="role" className="uppercase">
            <TextInput
              id="role"
              required
              placeholder="E.g. WordPress Developer"
              value={state.newsletter.role}
              onChange={e => {
                actions.setNewsletterProp({
                  name: "role",
                  value: e.target.value
                });
              }}
              size="medium"
            />
          </FormField>
        </Box>
        <Box align="stretch" elevation="small" round="8px">
          <Button
            primary
            color="brand"
            label="keep me updated!"
            disabled={state.sending.newsletter}
            icon={<Icon />}
            type="submit"
          />
        </Box>
      </Box>
    </form>
  );
};

export default Newsletter;
