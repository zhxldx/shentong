import Promise from 'promise'
import host from './hostConfig'
let queryString  = require("querystring");
module.exports = {
	httpHost: host.httpHost,
	imgHost: host.imgHost,
	querystring(param) {
		return param ? ('?' + queryString.stringify(param)) : '';
	},
	getData(self, url, param) {
		self.loading(true);
		let data = this.querystring(param);
	    return new Promise((resolve) => {
	        self.$http.get(`${this.httpHost}${url}${data}`)
	        .then((res) => {
	            let body = res.body;	            
	            (body.code == 1) ? resolve(body.data) : self.toast(body.msg);
	            self.loading(false);
	        })
	        .catch(() => {
	            this.error(self);
	        })
	    });
	},
	loadMore(self, url, param) {
		if(self.loadMoreEnd) return;
		self.loadMoreBusy = true;
		let data = this.querystring(param);
	    return new Promise((resolve) => {
	        self.$http.get(`${this.httpHost}${url}${data}`)
	        .then((res) => {
	            let body = res.body;
	            if(body.code == 1) {
	            	if(body.data.length) {
	            		self.page = Number(body.page);
	            		resolve(body.data);
	            	}else {
	            		self.loadMoreEnd = true
	            	}
	            }else {
	            	self.toast(body.msg);
	            }
	            self.loadMoreBusy = false;
	        })
	        .catch(() => {
	        	this.error(self);
	        })
	    });
	},
	handle(self, url, param) {
		self.loading(true);
		return new Promise((resolve) => {
		    self.$http.post(`${this.httpHost}${url}`, param || {})
		    .then((res) => {
		        let body = res.body;
		        (body.code == 1) ? resolve(body.data) : self.toast(body.msg);
		        self.loading(false);
		    })
		    .catch(() => {
		        this.error(self);
		    })
		});
	},
	refreshUserInfo(self, userId, locache) {
		return new Promise((resolve) => {
			let data = this.querystring({
				userId: userId
			});
	        self.$http.get(`${this.httpHost}user/getUserInfo${data}`)
	        .then((res) => {
	            let body = res.body;
	            if(body.code == 1) {
	            	locache.set('STuserInfo', body.data, 10000);
	            }	            
	        })
	    });
	},
	error(self) {
		self.loadMoreBusy = false;
		self.loading(false);
		self.toast('请求失败');
	}
}