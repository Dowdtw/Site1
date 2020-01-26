<script type 'text/javascript'>
window.onload = function(){
	try {
		const url_string = (window.location.href).toLowerCase();
		const url = new URL(url_string);
		const clickid = url.searchParams.get('clickid');
		console.log(clickid)
	} catch (err){
		console.log('issues with parsing url param' + err);
	}
}


</script>
