import React, { ChangeEvent, FormEvent } from "react";
import {
  Box,
  TextInput,
  FormField,
  Button,
  CheckBox,
  Text,
  Anchor
} from "grommet";
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
          <FormField label="Email address" htmlFor="email">
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
          <FormField label="Role / Job position" htmlFor="role">
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
        <Box gap="small">
          <CheckBox
            label={
              <Text size="small">
                I agree to the <Anchor>Privacy Policy</Anchor>
              </Text>
            }
            id="has-agreed"
            required
            checked={state.newsletter.hasAgreed}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              actions.setNewsletterProp({
                name: "hasAgreed",
                value: e.target.checked
              });
            }}
          />
          <Box align="stretch" elevation="small" round="8px">
            <Button
              primary
              color="brand"
              label="keep me in the loop!"
              disabled={state.sending.newsletter}
              icon={<Icon />}
              type="submit"
            />
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Newsletter;
