import { FC } from "react";
import Home from "../components/home/home";
import Login from "../components/login/login";

type Route = {
  path: string,
  component: FC
}
const publicRouters: Route[] = [
  {
    path: '/', component: Home
  },
  {
    path: '/login', component: Login
  },
]

export {publicRouters};