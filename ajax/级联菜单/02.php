<?php
	//1. 接收客户端发送的省份信息
	$province=$_POST['province'];

	//2. 根据省份信息，提供不同的城市列表信息
	switch($province){
		case '吉林省':
			echo '长春市,吉林市,松原市,四平市,通化市';
			break;
		case '辽宁省':
			echo '沈阳市,大连市,铁岭市,丹东市,锦州市';
			break;
		case '山东省':
			echo '济南市,青岛市,威海市,日照市,德州市';
			break;
	}
?>