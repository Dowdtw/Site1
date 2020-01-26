window.onload = function() {
			try {
				var url_string = (window.location.href).toLowerCase();
				var url = new URL(url_string);
       				const clickid = url.searchParams.get('clickid');
				console.log(clickid)
				} catch (err) {
				console.log('Issues with Parsing URL Params' + err);
				document.cookie = "irClickId = clickid"
			}
}
	
	
/*function setCookie()

	{
		const myCookie = {};
		
		myCookie.clickid = clickid.value;
		const jsonString = JSON.stringify(myCookie);
		document.cookie = myCookie.click +jsonString;
	}
*/
