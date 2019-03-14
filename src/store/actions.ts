import { Action } from "overmind";

export const setNewsletterProp: Action<{
  name: "email" | "role";
  value: string;
}> = ({ state }, { name, value }) => {
  state.newsletter[name] = value;
};

export const setFeedbackProp: Action<{
  name: "question1";
  value: string;
}> = ({ state }, { name, value }) => {
  state.feedback[name] = value;
};

export const sendNewsletter: Action = async ({ state }) => {
  state.sending.newsletter = true;
  const res = await fetch(
    "https://hook.integromat.com/oo3wukwvderm5721fhhq12x3whqrpa2e",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.newsletter)
    }
  );
  state.sending.newsletter = false;
  state.sent.newsletter = true;
};

export const sendFeedback: Action = async ({ state }) => {
  state.sending.feedback = true;
  const res = await fetch(
    "https://hook.integromat.com/8rj7y4krrbqkcpr9tmtyfhk629wp9q8h",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.feedback)
    }
  );
  state.sending.feedback = false;
  state.sent.feedback = true;
};
