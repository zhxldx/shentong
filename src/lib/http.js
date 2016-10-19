import Promise from 'promise'
import host from './hostConfig'
module.exports = {
	httpHost: host.httpHost,
	imgHost: host.imgHost,
	getDataList(self, url, param) {
	    return new Promise((resolve) => {
	        self.$http.post(`${this.httpHost}${url}`, param || {})
	        .then((res) => {
	            var body = res.body;
	            if(body.status) {
	            	let currentPage = body.data.page;
	            	let totalPage = body.data.total;
	            	if(currentPage && totalPage) {
	            		currentPage = Number(currentPage);
	            		totalPage = Number(totalPage);
	            		if(currentPage === totalPage) {
	            			body.data.isLoadMoreEnd = true;
	            		}
	            		body.data.currentPage = currentPage;
	            	}
	                resolve(body.data);
	            }else {
	                self.loading(false);
	                self.loadMoreBusy && (self.loadMoreBusy = false);
	                self.toast(body.msg);
	            }
	        })
	        .catch(() => {
	            self.loading(false);
	            self.loadMoreBusy && (self.loadMoreBusy = false);
	            self.toast('请求失败');
	        })
	    });
	},
	handle(self, url, param) {
		return new Promise((resolve) => {
			self.loading(true);
		    self.$http.post(`${this.httpHost}${url}`, param || {})
		    .then((res) => {
		        var body = res.body;
		        if(body.status) {
		        	self.loading(false);
		            resolve(body.data);
		        }else {
		            self.loading(false);
		            self.toast(body.msg);
		        }
		    })
		    .catch(() => {
		        self.loading(false);
		        self.toast('请求失败');
		    })
		});
	}
}