const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "服务器发生错误，请检查服务器。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const checkError = (error: any) => {
  if (error?.response?.status == "401") {
    console.log("====", error);
  } else if (error?.response?.status == undefined) {
    error.message = "网络异常";
  }
  return error;
};

const checkStatus = async (response: any) => {
  let errorMsg = null;
  // console.log('', response.status);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  try {
    const resp = await response.json();
    errorMsg = resp.message;
  } catch (error) {
    console.log(error);
    // console.log('no respon.json()', 'no respon.json()');
  }
  //@ts-ignore
  const errortext = errorMsg;
  const error = new Error(errortext);
  error.name = `${response.status}`;
  throw error;
};

export async function requestPromise(
  payload = { method: "GET", uri: "", body: {} }
) {
  const { method } = payload;
  if (method === "POST") {
    return Post(payload);
  }
  return Get(payload);
}

export function Get(payload: any) {
  // console.log('global==>>',global.__TOKEN_ACCESS__)
  return fetch(payload.uri, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application",
      // Authorization: `Bearer ${global.__TOKEN_ACCESS__}`,
      // // authorization: `Bearer ${global.__TOKEN_ACCESS__}`,
      // token: `${global.__TOKEN_ACCESS__}`,
    },
  })
    .then(checkStatus)
    .then((response: any) => {
      if (response.ok) {
        return response.json();
      }
      return response.json();
    })
    .then((responseJson) => {
      console.log(`${JSON.stringify(payload)}\n 返回数据:`, responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.log(JSON.stringify(payload), error);
      error = checkError(error);
      throw error;
    });
}

export function Post(payload: any) {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    // Authorization: `Bearer ${global.__TOKEN_ACCESS__}`,
    // // authorization: `Bearer ${global.__TOKEN_ACCESS__}`,
    // token: `${global.__TOKEN_ACCESS__}`,
  };

  return fetch(payload.uri, {
    method: "POST",
    mode: "cors",
    headers: header,
    body: JSON.stringify(payload.body || {}),
  })
    .then(checkStatus)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json();
    })
    .then((responseJson: any) => {
      console.log(`${JSON.stringify(payload)}\n 返回数据:`, responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.log(JSON.stringify(payload), error);
      error = checkError(error);
      throw error;
    });
}

// module.exports = {
//   requestPromise,
// };
