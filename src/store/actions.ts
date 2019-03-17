import { Action } from "overmind";

type DataLayer = {
  event: string;
  [key: string]: string;
};

declare global {
  interface Window {
    dataLayer: DataLayer[];
  }
}

const dataLayer = window.dataLayer || [];

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
  dataLayer.push({
    event: "newsletter",
    ...state.newsletter
  });
  state.sending.newsletter = false;
  state.sent.newsletter = true;
};

export const sendAfterNewsletter: Action = async ({ state }) => {
  state.sending.afterNewsletter = true;
  const res = await fetch(
    "https://hook.integromat.com/8rj7y4krrbqkcpr9tmtyfhk629wp9q8h",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.afterNewsletter)
    }
  );
  dataLayer.push({
    event: "after-newsletter",
    ...state.afterNewsletter
  });
  state.sending.afterNewsletter = false;
  state.sent.afterNewsletter = true;
};
