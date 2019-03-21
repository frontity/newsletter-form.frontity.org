import { createOvermind, IConfig } from "overmind";
import { createHook } from "overmind-react";
import * as actions from "./actions";
import * as effects from "./effects";
import state from "./state";

const config = {
  state,
  actions,
  effects
};

declare module "overmind" {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

const overmind = createOvermind(config);

export default createHook(overmind);
