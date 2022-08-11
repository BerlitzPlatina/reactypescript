import { Dispatch, FC, SetStateAction } from "react";
import Home from "../components/home/home";
import Login from "../components/login/login";
interface AddTodoProps { 
  setToken?: Dispatch<SetStateAction<undefined>>
}
export type TypeRoute = {
  path: string,
  component: FC<AddTodoProps>
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