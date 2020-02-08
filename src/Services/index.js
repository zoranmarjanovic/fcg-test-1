import { apolloClient } from "./GraphqlInterface/client";

import {
  queryCarInfo,
  queryMakeInfo,
  queryModelInfo,
  queryTrimInfo,
  queryEngineInfo,
  queryTasks
} from "./GraphqlInterface/queries";

import {
  mutateCarInfo,
  createCarTask,
  updateCarTask
} from "./GraphqlInterface/mutation";

export {
  queryCarInfo,
  apolloClient,
  mutateCarInfo,
  queryMakeInfo,
  queryModelInfo,
  queryTrimInfo,
  queryEngineInfo,
  queryTasks,
  createCarTask,
  updateCarTask
};
