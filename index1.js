const queryStringParams = window.location.search;
const lowerCase = queryStringParams.toLowerCase();
const myClickId = lowerCase.get('clickid')


console.log(myClickId);


/*
const encodeClickId = encodeURIComponent(clickIdFromURL);
const nowString = string(encodeClickId)

localStorage.setItem(clickId, clickIdFromURL);

document.cookie = (`irclickid = ${nowString}`);*/

	

