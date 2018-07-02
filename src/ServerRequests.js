var SERVER = true ? "localhost" : "vm-54-246-196-205.rosettavm.com";
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

export function postFilePromise(file, handler){

	// returns a promise with the response json'ed

	return fetch('http://' + SERVER + ':80/web/exercise/' + handler + '.php', {
			method: 'POST',
			headers: {
					'Authorization': sessionStorage.getItem('jwt')
		}, // 'GET', 'PUT', 'DELETE', etc.
			body: file	// Coordinate the body type with 'Content-Type'
		}).then(response =>  
			response.json())
}


function postReq(payload, handler){
	let URL = 'http://' + SERVER + ':80/web/exercise/' + handler + '.php';
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
	let URL = 'http://' + SERVER + ':80/web/exercise/' + handler + ".php?" + queryString;
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

