import EXIF from './exif'
var Orientation = null;
var canvasWidth = null;
var canvasHeight = null;
var config = {
	changeWidth: true, //默认改变宽度 如不需要配置为false 如果设置为false且图片太大的话，会导致base64编码太长 手机端后台上传会有问题
	changedWidth: 900, //默认改变后宽度为900 可更改 一般设置为1000左右 

	compression: false, //默认不压缩 如需要配置为true
	compressionRatio: 0.8, //默认压缩比例 可更改

	uploading: function(){}, //开始上传回调函数
	complete: function(){}, //上传完成回调函数 
	error: function(){}
};
function CanvasUpload(fileObj, c){
	c && setConfig(c);
	upload(fileObj);
}
// root.CULD = CanvasUpload;
function setConfig(c){
	for(var item in config){
		c[item] && (config[item] = c[item]);
	}
}
function upload(fileObj){
	config.uploading();
	var file = fileObj.files[0];
	if (!/^(image\/jpeg|image\/png)$/i.test(file.type)){   
		config.error('图片格式错误!');
		return; 
	}
	EXIF.getData(file, function() {  
	    EXIF.getAllTags(this);   
	    Orientation = EXIF.getTag(this, 'Orientation');
	});
	file && loadImgToCanvas(file);
}
function loadImgToCanvas(file){
	var canvas = document.createElement("canvas"); 
	var img = new Image();
	img.onload = function(){
		var imgWidth = this.naturalWidth || this.width;
		var imgHight = this.naturalHeight || this.height;
		if(Orientation && Orientation != 1){
			switch(Orientation){  
                case 6://需要顺时针（向左）90度旋转  
                    setCanvasWidth(imgWidth, imgHight ,true);
                    rotateImg(this,'left', canvas);  
                    break;  
                case 8://需要逆时针（向右）90度旋转   
                    setCanvasWidth(imgWidth, imgHight ,true);
                    rotateImg(this,'right', canvas);  
                    break;  
                case 3://需要180度旋转 
                	setCanvasWidth(imgWidth, imgHight); 
                    rotateImg(this,'right', canvas); 
                    rotateImg(this,'right', canvas);  
                    break;  
            }    
		}else{
			setCanvasWidth(imgWidth, imgHight);
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
			var ctx = canvas.getContext('2d'); 
			ctx.drawImage(this, 0, 0, canvasWidth, canvasHeight);
		}
		var base64 = getBase64Data(canvas);
		config.complete(base64);
	}
	img.src = getObjectURL(file);
}

function getBase64Data(canvas){
	if(config.compression){
		return canvas.toDataURL('image/jpeg', config.compressionRatio);
	}else{
		return canvas.toDataURL('image/jpeg');
	}
}

function setCanvasWidth(imgWidth, imgHight, rotate){
	var changedWidth = config.changedWidth;
	canvasWidth = imgWidth;
	canvasHeight = imgHight;
	if(config.changeWidth){
		if(rotate){
			if(imgHight > changedWidth){
				canvasHeight = changedWidth;
				canvasWidth = imgWidth * changedWidth/imgHight;
			}
		}else{
			if(imgWidth > changedWidth){
				canvasWidth = changedWidth;
				canvasHeight = imgHight * changedWidth/imgWidth;
			}
		}
	}
}
	function getObjectURL(file) {
		var url = '';
		if (window.createObjectURL != undefined) {
			url = window.createObjectURL(file);
		} else if (window.URL != undefined) {
			url = window.URL.createObjectURL(file);
		} else if (window.webkitURL != undefined) {
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	}
function rotateImg(img, direction,canvas) {   
	var width = canvasWidth;
	var height = canvasHeight;
    var min_step = 0;    
    var max_step = 3;         
    var step = 2;    
    if (step == null) {    
        step = min_step;    
    }    
    if (direction == 'right') {    
        step++;      
        step > max_step && (step = min_step);    
    } else {    
        step--;    
        step < min_step && (step = max_step);    
    }    
    //旋转角度以弧度值为参数    
    var degree = step * 90 * Math.PI / 180;    
    var ctx = canvas.getContext('2d');    
    switch (step) {    
        case 0:       
            ctx.drawImage(img, 0, 0, width, height);    
            break;    
        case 1:    
            canvas.width = height;    
            canvas.height = width;    
            ctx.rotate(degree);    
            ctx.drawImage(img, 0, -height, width, height);    
            break;    
        case 2:    
            canvas.width = width;    
            canvas.height = height;    
            ctx.rotate(degree);    
            ctx.drawImage(img, -width, -height, width ,height);    
            break;    
        case 3:    
            canvas.width = height;    
            canvas.height = width;    
            ctx.rotate(degree);    
            ctx.drawImage(img, -width, 0, width, height);    
            break;    
    }    
} 
module.exports = CanvasUpload;