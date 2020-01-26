window.onload = function() {
			try {
				var url_string = (window.location.href).toLowerCase();
				var url = new URL(url_string);
       				const clickid = url.searchParams.get('clickid');
				console.log(clickid)
				} catch (err) {
				console.log('Issues with Parsing URL Params' + err);
				
				}

}
	
function set_cookie(name, value){
		const cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
		document.cookie = cookie;
	}

const myCookie = set_cookie(irclickid, click);
	

