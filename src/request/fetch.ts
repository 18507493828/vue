import { address } from "./index";
//@ts-ignore
import { requestPromise } from "./request";
// POST

export function LoginApp(payload: any) {
  const uri = `${address}users/login`;
  return requestPromise({ uri, method: "POST", body: payload });
}

//   GET
export async function getOperateByUserId() {
  const uri = `${address}mock/v1/private/app-user-api/wx-api/repair-record-list?pageNum=1&pageSize=10`;
  return requestPromise({ uri, method: "GET", body: {} });
}
