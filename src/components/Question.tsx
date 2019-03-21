import React, { ChangeEvent } from "react";
import { FormField, RadioButtonGroup } from "grommet";
import useStore from "../store";

const Question = ({ name }: { name: string }) => {
  const { state, actions } = useStore();
  const { label, options } = state.afterNewsletter.questions[name];
  const answer = state.afterNewsletter.answers[name];
  return (
    <FormField label={label} htmlFor={name} required>
      <RadioButtonGroup
        name={name}
        options={options}
        value={answer}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          actions.setAnswer({ name, answer: event.target.value })
        }
      />
    </FormField>
  );
};

export default Question;
