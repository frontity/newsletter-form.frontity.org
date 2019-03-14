import { createOvermind, IConfig, Action } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";

const state: {
  newsletter: {
    email: string;
    role: string;
  };
  feedback: {
    question1: string;
  };
  sending: {
    newsletter: boolean;
    feedback: boolean;
  };
  sent: {
    newsletter: boolean;
    feedback: boolean;
  };
} = {
  newsletter: {
    email: "",
    role: ""
  },
  feedback: {
    question1: ""
  },
  sending: {
    newsletter: false,
    feedback: false
  },
  sent: {
    newsletter: false,
    feedback: false
  }
};

const config = {
  state,
  actions
};

declare module "overmind" {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

const overmind = createOvermind(config);

export default createHook(overmind);
