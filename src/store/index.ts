import { createOvermind, IConfig, Action } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";

const state: {
  newsletter: {
    email: string;
    role: string;
  };
  afterNewsletter: {
    name: string;
  };
  sending: {
    newsletter: boolean;
    afterNewsletter: boolean;
  };
  sent: {
    newsletter: boolean;
    afterNewsletter: boolean;
  };
} = {
  newsletter: {
    email: "",
    role: ""
  },
  afterNewsletter: {
    name: ""
  },
  sending: {
    newsletter: false,
    afterNewsletter: false
  },
  sent: {
    newsletter: false,
    afterNewsletter: false
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
