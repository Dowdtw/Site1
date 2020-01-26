const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const clickId = urlParams.get('clickid')

function set_cookie(name, value){
		const cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
		document.cookie = cookie;
	}

const myCookie = set_cookie("irclickid", clickId);
	

