// 格式化时间字符串
function formatTime(time) {
	let now = new Date(),
		str = '',
		diff = Math.round(now - new Date(time))/1000;

	if(diff >= 1 && diff < 60) {
		// 1秒至60秒之间
		str = `${diff} seconds ago`;
	} else if(diff >= 60 && diff < 3600) {
		// 1分钟至60分钟之间
		str = `${parseInt(diff/60)} miniutes ago`;
	} else if(diff >= 3600 && diff < 86400) {
		// 1小时至24小时之间
		str = `${parseInt(diff/3600)} hours ago`;
	} else {
		str = `${parseInt(diff/3600)} days ago`;
	}
	return str;
}

 // 根据响应请求的自定义Link头部内容，获取翻页信息
function getPaginationUrl(info) {
	let arr = [];
	info.split(',').forEach(function(item, index, array) {
		var result = item.match(/<(.*?)>;[ ]+rel="(.*?)"/);
		arr[result[2]] = result[1];
	});
	return arr;
}

// 格式化数字为以k为单位的字符串
function formatNumber(value) {
	if(!value) {
		return value;
	}

	return parseInt(value) >= 1000 ? (value / 1000).toFixed(1) + 'k' : value;
}

export {
	formatTime,
	formatNumber,
	getPaginationUrl
};