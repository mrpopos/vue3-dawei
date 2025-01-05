import client from "@/http/request";
import { IUserInfo, IUserLogin, ILoginResponse } from "./types";

export function login(data: IUserLogin) {
  return client.post<ILoginResponse<IUserInfo>>("/login", data);
}
