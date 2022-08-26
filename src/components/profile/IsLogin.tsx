import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react"
import { CheckLogin } from "../../App"
import request from "../../requests/request";
import { IUser } from "../types/user";
import NotLogin from "./NotLogin"

function getDataUserLogin(): Promise<AxiosResponse<IUser, any>> {
  return request(`/me`, {
    method: "GET",
  });
}
function IsLogin() {
	const [user, setUser] = useState<IUser>();
	useEffect(() => {
    getDataUserLogin().then(res => {			
      setUser(res.data)
    })
  }, [])

	if (user) {
		return (
			<div className="col-md-3 col-sm-12 text-right">
				<ul className="nav-icons">
					<li><a href="login.html"><i className="ion-person"></i><div>{user?.name}</div></a></li>
				</ul>
			</div>
		)
	}
	return (
		<NotLogin/>
	)
}
export default IsLogin