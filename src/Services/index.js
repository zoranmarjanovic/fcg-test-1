import { apolloClient } from "./GraphqlInterface/client";

import {
  queryCarInfo,
  queryMakeInfo,
  queryModelInfo,
  queryTrimInfo,
  queryEngineInfo
} from "./GraphqlInterface/queries";

import { mutateCarInfo } from "./GraphqlInterface/mutation";

export {
  queryCarInfo,
  apolloClient,
  mutateCarInfo,
  queryMakeInfo,
  queryModelInfo,
  queryTrimInfo,
  queryEngineInfo
};
