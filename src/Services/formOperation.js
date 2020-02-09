import {
  apolloClient,
  queryMakeInfo,
  queryModelInfo,
  queryTrimInfo,
  queryEngineInfo
} from "./";
import { NotifyError } from "../Components/Toaster";

export async function fetchMakeValues() {
  try {
    // check the data status code
    const response = await apolloClient().query(queryMakeInfo());
    // We can make better error response here
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    // log error here
    NotifyError("Something went wrong in queryMakeInfo");
  }
}

export async function fetchModelValues(param) {
  try {
    // check the data status code
    const response = await apolloClient().query(queryModelInfo(param));
    // We can make better error response here
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    // log error here
    NotifyError("Something went wrong in queryModelInfo");
  }
}

export async function fetchTrimValues({ make, value }) {
  try {
    // check the data status code
    const response = await apolloClient().query(
      queryTrimInfo({ make, model: value })
    );
    // We can make better error response here
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    // log error here
    NotifyError("Something went wrong in queryTrimInfo");
  }
}

export async function fetchEngineValues(param) {
  // This API does not exist. Will have to ask Zoran later
  try {
    // check the data status code
    const response = await apolloClient().query(queryEngineInfo(param));
    // We can make better error response here
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    // log error here
    NotifyError("Something went wrong in queryEngineInfo");
  }
}
