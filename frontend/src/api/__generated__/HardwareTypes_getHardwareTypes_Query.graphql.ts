/**
 * @generated SignedSource<<20e09363c185fc031bc93b0872a6e8f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HardwareTypes_getHardwareTypes_Query$variables = {};
export type HardwareTypes_getHardwareTypes_Query$data = {
  readonly hardwareTypes: ReadonlyArray<{
    readonly id: string;
    readonly handle: string;
    readonly name: string;
    readonly partNumbers: ReadonlyArray<string>;
  }>;
};
export type HardwareTypes_getHardwareTypes_Query = {
  variables: HardwareTypes_getHardwareTypes_Query$variables;
  response: HardwareTypes_getHardwareTypes_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "HardwareType",
    "kind": "LinkedField",
    "name": "hardwareTypes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "handle",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "partNumbers",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HardwareTypes_getHardwareTypes_Query",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HardwareTypes_getHardwareTypes_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b2084bd669d643260f364ad6c1d169f5",
    "id": null,
    "metadata": {},
    "name": "HardwareTypes_getHardwareTypes_Query",
    "operationKind": "query",
    "text": "query HardwareTypes_getHardwareTypes_Query {\n  hardwareTypes {\n    id\n    handle\n    name\n    partNumbers\n  }\n}\n"
  }
};
})();

(node as any).hash = "103f9c006c0363a846b154d95be47563";

export default node;
