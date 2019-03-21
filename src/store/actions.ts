import { Action } from "overmind";

export const setNewsletterProp: Action<{
  name: "email" | "role";
  value: string;
}> = ({ state }, { name, value }) => {
  state.newsletter[name] = value;
};

export const setAfterNewsletterProp: Action<{
  name: "name";
  value: string;
}> = ({ state }, { name, value }) => {
  state.afterNewsletter[name] = value;
};

export const setAnswer: Action<{
  name: string;
  answer: string;
}> = ({ state }, { name, answer }) => {
  state.afterNewsletter.answers[name] = answer;
};

export const sendNewsletter: Action = async ({ state, effects }) => {
  state.sending.newsletter = true;
  effects.dataLayer.push({
    event: "newsletter",
    ...state.newsletter
  });
  state.sending.newsletter = false;
  state.sent.newsletter = true;
};

export const sendAfterNewsletter: Action = async ({ state, effects }) => {
  const { name, answers } = state.afterNewsletter;
  state.sending.afterNewsletter = true;
  effects.dataLayer.push({
    event: "after-newsletter",
    name,
    answers,
  });
  state.sending.afterNewsletter = false;
  state.sent.afterNewsletter = true;
};
