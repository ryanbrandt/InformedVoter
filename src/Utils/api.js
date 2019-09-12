import { create } from "apisauce";
import { FEC_API_URL, API_URL, FEC_API_KEY } from "../local";

/**
 * apisauce wrappers
 */
export const fecApi = create({
  baseURL: FEC_API_URL,
  headers: {
    accept: "application/json",
  },
});

fecApi.addRequestTransform(request => {
  request.params.api_key = FEC_API_KEY;
});

export const api = create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
  },
});

/**
 * Rest wrappers
 */
export async function doGet(api, url) {
  const payload = {};
  try {
    await api.get(url).then(res => {
      if (res.ok) {
        payload.data = res.data;
      } else {
        payload.problem = res.problem;
      }
    });
  } catch (e) {
    console.log(`Exception in HTTP GET for ${url}`);
    payload.problem = e;
  }
  return payload;
}

export async function doPost(api, url, body) {
  const payload = {};
  try {
    await api.post(url, body).then(res => {
      if (res.ok) {
        payload.data = res.data;
      } else {
        payload.problem = res.problem;
      }
    });
  } catch (e) {
    console.log(`Exception in HTTP POST for ${url}`);
    payload.problem = e;
  }
  return payload;
}

/**
 * Rest utilities
 */

/**
 * @param {Object} params object of variable nesting containing API params
 * @param {Object} filteredParams object containing filtered params without nesting
 * Recurisvely filters null properties and removes nesting
 */
function filterNullParams(params, filteredParams) {
  Object.keys(params).forEach(key => {
    if (params[key] instanceof Object) {
      return filterNullParams(params[key], filteredParams);
    }
    if (params[key] !== null) {
      filteredParams[`${key}`] = params[key];
    }
  });
}

/**
 * @param {String} url endpoint to fetch from
 * @param {Object} params params object from state
 * @returns original endpoint url with query parameters appended
 */
export function getUrlWithParams(url, params) {
  const filteredParams = {};
  filterNullParams(params, filteredParams);
  const filteredParamsLen = Object.keys(filteredParams).length;
  const urlWithParams =
    filteredParamsLen === 0
      ? url
      : `${url}?${Object.keys(filteredParams)
          .map((key, i) => {
            if (i !== filteredParamsLen - 1) {
              return `${key}=${filteredParams[key]}&`;
            }
            return `${key}=${filteredParams[key]}`;
          })
          .join("")}`;
  return urlWithParams;
}
