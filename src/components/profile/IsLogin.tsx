import React from "react"
import { CheckLogin } from "../../App"
import NotLogin from "./NotLogin"

function IsLogin() {
	const {isLogin} = React.useContext(CheckLogin)
	if (isLogin) {
		return (
			<div className="col-md-3 col-sm-12 text-right">
				<ul className="nav-icons">
					<li><a href="login.html"><i className="ion-person"></i><div>Hoang nam</div></a></li>
				</ul>
			</div>
		)
	}
	return (
		<NotLogin/>
	)
}
export default IsLogin