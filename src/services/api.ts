import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:5000";

const getRefreshToken = () => {
  return Cookies.get("refreshToken");
};
const setRefreshToken = (token: string) => {
  Cookies.set("refreshToken", token, { expires: 1 });
};
const removeRefreshToken = () => {
  Cookies.remove("refreshToken");
};
const getAccessToken = () => {
  return Cookies.get("accessToken");
};
const setAccessToken = (token: string) => {
  Cookies.set("accessToken", token, { expires: 1 });
};
const removeAccessToken = () => {
  Cookies.remove("accessToken");
};
const forceLogout = () => {
  removeRefreshToken();
  removeAccessToken();
  window.location.href = "/login";
};
const refreshToken = async () => {
  try {
    const token = getRefreshToken();
    const response = await axios.put(`${baseUrl}/refresh-token`, {
      refreshToken: token,
    });
    console.log(response.data.data.access_token);
    setAccessToken(response.data.data.access_token);
  } catch (error: any) {
    console.log(error.response.data.status);
    if (
      error.response.data.status === 401 ||
      error.response.data.status === 400
    ) {
      forceLogout();
      throw error.response.data;
    }
  }
};
const wrapperApi = async (callback: () => Promise<any>) => {
  try {
    return await callback();
  } catch (error: any) {
    if (error?.status === 401) {
      try {
        await refreshToken();
        return await callback();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    throw error;
  }
};
const getRequestWithToken = async (url: string, payload?: any) => {
  try {
    return await wrapperApi(async () => {
      try {
        const token = getAccessToken();
        const response = await axios.get(`${baseUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            ...payload,
          },
        });
        return response.data;
      } catch (error: any) {
        console.log(error);
        throw error.response.data;
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const postRequestWithToken = async (url: string, payload?: any) => {
  try {
    return await wrapperApi(async () => {
      try {
        const token = getAccessToken();
        const response = await axios.post(`${baseUrl}${url}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error: any) {
        console.log(error);
        throw error.response.data;
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const putRequestWithToken = async (url: string, payload?: any) => {
  try {
    return await wrapperApi(async () => {
      try {
        const token = getAccessToken();
        const response = await axios.put(`${baseUrl}${url}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error: any) {
        console.log(error);
        throw error.response.data;
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const deleteRequestWithToken = async (url: string, payload?: any) => {
  try {
    return await wrapperApi(async () => {
      try {
        const token = getAccessToken();
        const response = await axios.delete(`${baseUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            ...payload,
          },
        });
        return response.data;
      } catch (error: any) {
        console.log(error);
        throw error.response.data;
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const postRequest = async (url: string, payload?: any) => {
  try {
    const response = await axios.post(`${baseUrl}${url}`, payload);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
const putRequest = async (url: string, payload?: any) => {
  try {
    const response = await axios.put(`${baseUrl}${url}`, payload);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
const deleteRequest = async (url: string, payload?: any) => {
  try {
    const response = await axios.delete(`${baseUrl}${url}`, {
      params: {
        ...payload,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
const getRequest = async (url: string, payload?: any) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`, {
      params: {
        ...payload,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
export {
  getRequestWithToken,
  postRequestWithToken,
  putRequestWithToken,
  deleteRequestWithToken,
  postRequest,
  putRequest,
  deleteRequest,
  getRequest,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  refreshToken,
  forceLogout,
};
