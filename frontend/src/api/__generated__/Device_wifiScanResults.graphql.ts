/**
 * @generated SignedSource<<dd3a7594e74516171097f1dc0b714825>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Device_wifiScanResults$data = {
  readonly wifiScanResults: ReadonlyArray<{
    readonly channel: number | null;
    readonly essid: string | null;
    readonly macAddress: string | null;
    readonly rssi: number | null;
    readonly timestamp: string;
  }> | null;
  readonly " $fragmentType": "Device_wifiScanResults";
};
export type Device_wifiScanResults$key = {
  readonly " $data"?: Device_wifiScanResults$data;
  readonly " $fragmentSpreads": FragmentRefs<"Device_wifiScanResults">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Device_wifiScanResults",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "WifiScanResult",
      "kind": "LinkedField",
      "name": "wifiScanResults",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "channel",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "essid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "macAddress",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "rssi",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "timestamp",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Device",
  "abstractKey": null
};

(node as any).hash = "1cce4cb6523924adbe1f5188d91b3208";

export default node;
