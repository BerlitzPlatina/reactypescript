import { FC } from "react";
import Home from "../components/home/home";
import Login from "../components/login/login";

export type TypeRoute = {
  path: string,
  component: FC
}
const publicRouters: TypeRoute[] = [
  {
    path: '/', component: Home
  },
  {
    path: '/login', component: Login
  },
]

export {publicRouters};