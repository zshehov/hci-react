
export const verify = function	verify(event)  {
		var user = this.state.user;
		var password = this.state.password;
		var verifyPass= this.state.repeatPassword;

		if(!verifyUser(user)){

			return false;
		}

		if(!verifyPassword(password)){
			
			return false;
		}

		if(verifyPass!=password){
			
			this.setState({ error : "*Passwords don't match" });
			//setError("*Passwords don't match");
			return false;

		}else{
			
			return true;

		}
		
	}

	function verifyUser(user){
		var response = false;
		if(user.match("^([A-Za-z0-9]|\_){3,10}$")){
			response = true;
		}else if(user.length<3){

			this.setState({ error : '*User name too short' });
			//setError('*User name too short',response);

		}else if(user.length>10){

			this.setState({ error : '*User name too long' });
			//setError('*User name too long',response);

		}else if(user.match('[^A-Za-z0-9_]')){

			this.setState({ error : '*User name can contain only alphanumeric symbols and _' });
			//setError("*User name can contain only alphanumeric symbols and '_'",response);

		}
		
		return response;

	}

	function verifyPassword(password){
		var response = false;
		if(password.length<6 ){
			response = false;
			this.setState({ error : '*Password too short' });
			//setError('*Password too short',response);

		}
		else if( password.search("[A-Z]+")<0 || password.search("[a-z]+")<0 || password.search("[0-9]+")<0){

			this.setState({ error : '*Password too weak. Must contain upperCase letter and number.' });
			//setError('*Password too weak. Must contain upperCase letter and number.',response);
		}
		else{
			response = true;
		}
		
		return response;
	}
