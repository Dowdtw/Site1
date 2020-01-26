const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const clickIdFromURL = urlParams.get('ClickId');
console.log(clickIdFromURL);
const encodeClickId = encodeURIComponent(clickIdFromURL);
const nowString = string(encodeClickId)

localStorage.setItem(clickId, clickIdFromURL);

document.cookie = (`irclickid = ${nowString}`);

	

