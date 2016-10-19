module.exports = {
	phoneVerfiy(phone) {
		return /^1[34578]\d{9}$/.test(phone) ? true : false;
	},

	compatibleLoadMore(callback) {
		if(this.isWeixin()) {
			setTimeout(() => {
			    $(document).scrollTop($(document).scrollTop() + 70);
			    callback();
			}, 0);
		}else {
			callback();
		}
	},

	isWeixin() {
		var ua = navigator.userAgent.toLowerCase();
		return (ua.match(/MicroMessenger/i)=="micromessenger") ? true : false;
	},
	getQueryString(name) {  
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
        var search = window.location.href.split('?')[1];		
        if(search) {
        	var r = search.match(reg); 
        	if (r != null) return unescape(r[2]);  
        	return null;  
        }else {
        	return null;
        }
        
    },
    // 简易session存储
    session: {
    	set(key, value) {
    		sessionStorage.setItem(key, JSON.stringify(value));
    	},
    	get(key) {
    		return JSON.parse(sessionStorage.getItem(key));
    	},
    	remove(key) {
    		sessionStorage.removeItem(key);
    	}
    }
}