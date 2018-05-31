import React from 'react'
import GuestPage from './GuestPage'
import { withRouter } from "react-router-dom";

const Logout = (props) => {
	sessionStorage.clear();
	props.history.replace("/");
	return null;
}

export default withRouter(Logout)