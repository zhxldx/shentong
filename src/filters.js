import hostConfig from 'lib/hostConfig'


exports.img = function(url) {
	if(typeof url === 'string') {
		if(url.indexOf('wx') > 0) return url;
		return `${hostConfig.imgHost}${url}`;
	}
}

exports.textOverflow = function(text, len) {
	var length = text.length;
	if(length <= len) {
		return text;
	}else {
		return text.substr(0, len) + '...';
	}
}