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


export function makeRequest(request, handler){
	let promise = new Promise(function(resolve,reject){
		var resp = postReq(request, handler);
		if(resp){
			 resolve(resp);
		}else{
			 reject("Something went wrong. Try again later!");
		}
	});
	return promise;

}
export function makeGetRequest(request, handler){
	let promise = new Promise(function(resolve,reject){
		var resp = postReq(request, handler);
		if(resp){
			 resolve(resp);
		}else{
			 reject("Something went wrong. Try again later!");
		}
	});
	return promise;

}

function postReq(payload, handler){
	let URL = 'http://localhost:80/web/exercise/' + handler + '.php';
	alert(JSON.stringify(payload));
	var fetchResponse = fetch(URL, {
		method: 'POST',
		headers:{
			'Accept': 'application/json',
    		'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	}).then(
		(response) => {
			if(response.ok){
				return response.json();
			}
			else{
				return '';
			}
		});
	return fetchResponse;
}
function postGetReq(payload, handler){
	let URL = 'http://localhost:80/web/exercise/' + handler ;
	alert(JSON.stringify(payload));
	var fetchResponse = fetch(URL, {
		method: 'GET',
		headers:{
			'Accept': 'application/json',
    		'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	}).then(
		(response) => {
			if(response.ok){
				return response.json();
			}
			else{
				return '';
			}
		});
	return fetchResponse;
}

