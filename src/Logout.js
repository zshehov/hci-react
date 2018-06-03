import { withRouter } from "react-router-dom";

const Logout = (props) => {
	console.log("Logging out");
	sessionStorage.clear();
	props.history.replace("/");
	return null;
}

export default withRouter(Logout)