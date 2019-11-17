function ajax(type, url, data, success) {
	var xhr = null;

	try {
		xhr = new XMLHttpRequest();
	} catch (error) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	var type = type.toUpperCase();

	// 用于清除缓存
	var random = Math.random();

	//解析为字符串形式
	if (typeof data == 'object') {
		var str = '';
		for (var key in data) {
			str += key + '=' + data[key] + '&';
		}
		data = str.slice(0, -1);
	}

	if (type === 'GET') {
		if (data) {
			url += '?' + data;
		} else {
			url += '?t=' + random;
		}
	}

	xhr.open(type, url, true);

	if (type === 'GET') {
		xhr.send();
	} else {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success && success(xhr.responseText);
			} else {
				console.log('出错了，错误码：' + xhr.status);
			}
		}
	}
}