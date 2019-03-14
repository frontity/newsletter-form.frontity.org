import { createOvermind, IConfig, Action } from "overmind";
import { createHook } from "overmind-react";

type State = {
  email: string;
  role: string;
  subscribing: boolean;
};

const state: State = {
  email: "",
  role: "",
  subscribing: false
};

const setProp: Action<{ name: "email" | "role"; value: string }> = (
  { state },
  { name, value }
) => {
  state[name] = value;
};

const subscribe: Action = async ({ state }) => {
  state.subscribing = true;
  const res = await fetch(
    "https://hook.integromat.com/oo3wukwvderm5721fhhq12x3whqrpa2e",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        role: state.role
      })
    }
  );
  state.subscribing = false;
};

const config = {
  state,
  actions: {
    setProp,
    subscribe
  }
};

declare module "overmind" {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

const overmind = createOvermind(config);

export default createHook(overmind);
