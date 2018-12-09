'use strict';

function status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

function json(response) {
	return response.json();
}

fetch('https://api.github.com/users/ksufinski').then(status).then(json).then(function (data) {
	document.body.style.background = 'url(' + data.avatar_url + ") no-repeat fixed center";
	document.body.style.backgroundSize = '150px';
});