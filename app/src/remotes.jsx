import * as React from "react";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";
import {
  registerRemotes,
  loadRemote,
} from "@module-federation/enhanced/runtime";

registerRemotes([
  {
    entry: process.env.DECIDE_URL,
    name: "decide",
    type: "module",
  },
  {
    entry: process.env.CHECKOUT_URL,
    name: "checkout",
    type: "global",
  },
  {
    entry: process.env.EXPLORE_URL,
    name: "explore",
    type: "global",
  },
]);

window.fromReact = (loadLifecycle, mountParcel) =>
  React.lazy(() =>
    loadLifecycle().then(({ default: config }) => ({
      default: (props) => (
        <Parcel mountParcel={mountParcel} config={config} {...props} />
      ),
    }))
  );

window.getComponent = (id, converter = window.fromReact) =>
  converter(() => loadRemote(id), mountRootParcel);
