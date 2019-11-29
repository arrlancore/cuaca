import React from "react";
import Axios from "axios";

const baseApi = "https://api.openweathermap.org";
const apiKey = "6b621ed01142e8ea42ab6ee500739925";

const getApiConfig = requestName => {
  if (requestName === "getCuaca") {
    return {
      url: `${baseApi}/data/2.5/forecast`,
      method: "get"
    };
  }
};

export const dataApi = async options => {
  const { name, params } = options;
  try {
    const response = await Axios.request({
      params: { ...params, appid: apiKey },
      ...getApiConfig(name)
    });
    return { data: response.data };
  } catch (error) {
    console.log("TCL: error", error);
    console.log("TCL: dataApi -> error", error.message);
    return { error: error.message };
  }
};
