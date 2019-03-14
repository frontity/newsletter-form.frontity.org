import React, { FormEvent } from "react";
import { Box, TextInput, FormField, Button } from "grommet";
import Icon from "./Icon";
import useStore from "../store";

const Form = () => {
  const { state, actions } = useStore();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.subscribe();
  };
  return (
    <form id="form-autodemos" onSubmit={onSubmit}>
      <Box
        gap="small"
        pad="40px"
        round="xsmall"
        align="stretch"
        elevation="small"
        background="white"
      >
        <FormField label="YOUR EMAIL ADDRESS" htmlFor="email">
          <TextInput
            id="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder="name@example.com"
            value={state.email}
            onChange={e => {
              actions.setProp({ name: "email", value: e.target.value });
            }}
            size="small"
          />
        </FormField>
        <FormField label="YOUR ROLE" htmlFor="role">
          <TextInput
            id="role"
            required
            placeholder="E.g. WordPress Developer"
            value={state.role}
            onChange={e => {
              actions.setProp({ name: "role", value: e.target.value });
            }}
            size="small"
          />
        </FormField>
        <Box align="stretch" elevation="small" round="8px">
          <Button
            primary
            color="brand"
            label="keep me updated!"
            disabled={state.subscribing}
            icon={<Icon />}
            type="submit"
          />
        </Box>
      </Box>
    </form>
  );
};

export default Form;
