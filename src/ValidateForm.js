export function validateData(toValidate, validator){
	let promise = new Promise(function(resolve,reject){
		var resp = postReq(toValidate, validator);
		if(resp){
			 resolve(resp);
		}else{
			 reject("Something went wrong. Try again later!");
		}
	});
	return promise;

}

function postReq(toValidate, validator){
	let URL = 'http://localhost:80/web/exercise/' + validator + '.php';
	alert(JSON.stringify(toValidate));
	var response = fetch(URL, {
		method: 'POST',
		headers:{
			'Accept': 'application/json',
    		'Content-Type': 'application/json'
		},
		body: JSON.stringify(toValidate)
	}).then(
		(response) => {
			if(response.ok){
				return response.json();
			}
			else{
				return '';
			}
		});
	return response;
}

