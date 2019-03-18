import React, { ChangeEvent } from "react";
import { FormField, RadioButtonGroup } from "grommet";
import useStore from "../store";

const Question = ({ index }: { index: number }) => {
  const { state, actions } = useStore();
  const { label, name, answer, options } = state.afterNewsletter.questions[
    index
  ];
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