export function makePostRequest(request, handler){
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
	console.log(JSON.stringify(payload));
	var fetchResponse = fetch(URL, {
		method: 'POST',
		headers:{
			'Accept': 'application/json',
    		'Content-Type': 'application/json',
    		'Authorization': sessionStorage.getItem('jwt')
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

export function makeGetRequest(queryString, handler){
	let promise = new Promise(function(resolve,reject){
		var resp = getReq(queryString, handler);
		if(resp){
			 resolve(resp);
		}else{
			 reject("Something went wrong. Try again later!");
		}
	});
	return promise;

}

function getReq(queryString, handler){
	let URL = 'http://localhost:80/web/exercise/' + handler + ".php?" + queryString;
	//console.log(JSON.stringify(payload));
	var fetchResponse = fetch(URL, {
		method: 'GET',
		headers:{
			'Accept': 'application/json',
    		'Content-Type': 'application/json',
    		'Authorization': sessionStorage.getItem('jwt')
		}
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

