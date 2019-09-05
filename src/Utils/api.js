import { create } from "apisauce";
import { FEC_API_URL, API_URL, FEC_API_KEY } from "../local";

/**
 * Singleton apisauce objects
 */
export const fecApi = create({
  baseURL: FEC_API_URL,
  headers: {
    accept: "application/json"
  }
});

fecApi.addRequestTransform(request => {
  request.params["api_key"] = FEC_API_KEY;
});

export const api = create({
  baseURL: API_URL,
  headers: {
    accept: "application/json"
  }
});

/**
 * Rest functions
 */
export async function doGet(api, url) {
  let payload = {};
  await api.get(url).then(res => {
    if (res.ok) {
      payload.data = res.data;
    } else {
      payload.problem = res.problem;
    }
  });
  return payload;
}

/**
 * Rest utils
 */
export function getUrlWithParams(url, params) {
  let filteredParams = {};
  filterNullParams(params, filteredParams);
  const filteredParamsLen = Object.keys(filteredParams).length;
  const urlWithParams =
    filteredParamsLen === 0
      ? url
      : `${url}?${Object.keys(filteredParams)
          .map((key, i) => {
            if (i !== filteredParamsLen - 1)
              return `${key}=${filteredParams[key]}&`;
            return `${key}=${filteredParams[key]}`;
          })
          .join("")}`;
  return urlWithParams;
}

/**
 * @param {Object} params object of variable nesting containing API params
 * @param {Object} filteredParams object containing filtered params without nesting
 * Recurisvely filters null properties and removes nesting
 */
function filterNullParams(params, filteredParams) {
  Object.keys(params).forEach(key => {
    if (params[key] instanceof Object)
      return filterNullParams(params[key], filteredParams);
    if (params[key] !== null) filteredParams[`${key}`] = params[key];
  });
}
