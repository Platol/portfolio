$(function () {
	//顶部广告
	(function () {
		$('#top span').click(function () {
			$('#top').fadeOut(1000);
		})
	})();

	//头部工具栏
	(function () {
		$('#header_bar li').has('.has-con').hover(function () {
			$(this).children().eq(0).css({
				'backgroundColor': '#fff',
				'borderColor': '#cbcbcb'
			});
			$(this).children().eq(1).show();
		}, function () {
			$(this).children().eq(0).css({
				'backgroundColor': '',
				'borderColor': ''
			});
			$(this).children().eq(1).hide();
		})
	})();

	//搜索框
	(function () {
		$('.txt').focus(function () {
			if ($(this).val() == '新品首发送空净') {
				$(this).val('');
			}
		})
		$('.txt').blur(function () {
			if ($(this).val() == '') {
				$(this).val('新品首发送空净');
			}
		})
	})();

	//购物车
	(function () {
		$('#shopping').hover(function () {
			$('#my-shopping').css({
				'height': '35px',
				'borderBottom': 'none'
			})
			$('#my-shopping-list').show();
		}, function () {
			$('#my-shopping').css({
				'height': '33px',
				'borderBottom': '1px solid #cbcbcb'
			})
			$('#my-shopping-list').hide();
		})
	})();

	//banner
	(function () {
		var arrSrc = [
			'img/banner/01.jpg',
			'img/banner/02.jpg',
			'img/banner/03.jpg',
			'img/banner/04.jpg',
			'img/banner/05.jpg',
			'img/banner/06.jpg'
		];
		var str = '';
		var timer = null;
		var n = 0;

		for (var i = 0; i < arrSrc.length; i++) {
			str += '<a href=""><img src="' + arrSrc[i] + '"></a>';
			$('<li>').appendTo($('#banner ul'));
		}
		$('#banner p').css({ 'width': arrSrc.length * 790 }).html(str);
		$('#banner ul').css({ 'left': ($('#banner').width() - $('#banner ul').outerWidth()) / 2 }).find('li:eq(0)').css({ 'background': '#df1322' });

		timer = setInterval(playPlus, 5000);

		$('#banner').hover(function () {
			$('#banner .btn').css({ 'display': 'block' });
			clearInterval(timer);
		}, function () {
			$('#banner .btn').css({ 'display': 'none' });
			timer = setInterval(playPlus, 5000);
		});

		$('#banner .rb').click(playPlus);

		$('#banner .lb').click(function () {
			n--;
			n == -1 ? n = arrSrc.length - 1 : n;
			bannerSlide();
		});

		$('#banner ul li').mouseover(function () {
			n = $(this).index();
			bannerSlide();
		});

		function bannerSlide() {
			$('#banner p').animate({ 'left': -790 * n }, 500, 'linear');
			$('#banner ul li').each(function (i, elem) {
				$(elem).css({ 'background': '#fefefe' });
			}).eq(n).css({ 'background': '#df1322' });
		}

		function playPlus() {
			n++;
			n %= arrSrc.length;
			bannerSlide();
		}

	})();

	//右侧信息栏
	(function () {
		$('#i_mid ul:eq(1)').css({ 'display': 'none' });

		$('#i_mid span').mouseover(function () {
			$('#i_mid i').animate({
				'left': $(this).position().left
			}, 300);
			$('#i_mid ul').css({ 'display': 'none' }).eq($(this).index()).css({ 'display': 'block' });
		});

	})();

	//秒杀-倒计时
	(function () {
		var aStrong = $('#seckill .time strong');
		var t = 600;

		function timeDown() {
			var h = Math.floor(t % 86400 / 3600);
			var m = Math.floor(t % 86400 % 3600 / 60);
			var s = t % 60;

			aStrong[0].innerHTML = addZero(h);
			aStrong[1].innerHTML = addZero(m);
			aStrong[2].innerHTML = addZero(s);
			t--;
			if (t < 0) { clearInterval(timer); }
		}

		timeDown();
		var timer = setInterval(timeDown, 1000);

		function addZero(num) {
			return num < 10 ? '0' + num : '' + num;
		}
	})();

	//秒杀-抢购商品
	(function () {
		var data = [
			[
				{
					'src': 'img/seckill/001.jpg',
					'title': 'alovivi 玫瑰柔润精华水500ml（大粉水 爽肤水 滋润保湿水 嫩',
					'price': 9.90,
					'oldPrice': '￥89.00'
				},
				{
					'src': 'img/seckill/002.jpg',
					'title': '金玉满阳澄湖大闸蟹礼券1588型 公4.0两 母3.0两 4对8只',
					'price': 198.00,
					'oldPrice': '￥558.00'
				},
				{
					'src': 'img/seckill/003.jpg',
					'title': '清风（APP）卷纸 原木纯品 3层270段卫生纸*27卷（整箱销',
					'price': 42.80,
					'oldPrice': '￥49.00'
				},
				{
					'src': 'img/seckill/004.jpg',
					'title': '百家好世旋转拖把桶拖布双驱动好神拖免手洗地拖墩布【共6拖',
					'price': 59.00,
					'oldPrice': '￥168.00'
				},
				{
					'src': 'img/seckill/005.jpg',
					'title': 'alovivi 玫瑰柔润精华水500ml（大粉水 爽肤水 滋润保湿水 嫩',
					'price': 2999.00,
					'oldPrice': '￥3699.00'
				},
				{
					'src': 'img/seckill/006.jpg',
					'title': '九牧（JOMOO） 36190 升降花洒淋浴花洒套装',
					'price': 629.00,
					'oldPrice': '￥1399.00'
				},
				{
					'src': 'img/seckill/007.jpg',
					'title': '德国进口啤酒 凯尔特人(Barbarossa)小麦啤酒 500ml*24整箱',
					'price': 89.00,
					'oldPrice': '￥312.00'
				},
				{
					'src': 'img/seckill/008.jpg',
					'title': '创维（Skyworth）50V6E 50英寸18核金属边框4K超高清智能',
					'price': 2798.00,
					'oldPrice': '￥3499.00'
				},
				{
					'src': 'img/seckill/009.jpg',
					'title': '舒适达 （sensodyne） 抗敏感牙膏 护理套装（多效牙膏120g',
					'price': 59.00,
					'oldPrice': '￥142.00'
				},
				{
					'src': 'img/seckill/010.jpg',
					'title': '酷比魔方 iwork10旗舰本 10.1英寸二合一平板电脑 双系统(正',
					'price': 968.00,
					'oldPrice': '￥9699.00'
				}
			],
			[
				{
					'src': 'img/seckill/011.jpg',
					'title': 'alovivi 玫瑰柔润精华水500ml（大粉水 爽肤水 滋润保湿水 嫩',
					'price': 9.90,
					'oldPrice': '￥89.00'
				},
				{
					'src': 'img/seckill/012.jpg',
					'title': '金玉满阳澄湖大闸蟹礼券1588型 公4.0两 母3.0两 4对8只',
					'price': 198.00,
					'oldPrice': '￥558.00'
				},
				{
					'src': 'img/seckill/013.jpg',
					'title': '清风（APP）卷纸 原木纯品 3层270段卫生纸*27卷（整箱销',
					'price': 42.80,
					'oldPrice': '￥49.00'
				},
				{
					'src': 'img/seckill/014.jpg',
					'title': '百家好世旋转拖把桶拖布双驱动好神拖免手洗地拖墩布【共6拖',
					'price': 59.00,
					'oldPrice': '￥168.00'
				},
				{
					'src': 'img/seckill/015.jpg',
					'title': 'alovivi 玫瑰柔润精华水500ml（大粉水 爽肤水 滋润保湿水 嫩',
					'price': 2999.00,
					'oldPrice': '￥3699.00'
				},
				{
					'src': 'img/seckill/016.jpg',
					'title': '九牧（JOMOO） 36190 升降花洒淋浴花洒套装',
					'price': 629.00,
					'oldPrice': '￥1399.00'
				},
				{
					'src': 'img/seckill/017.jpg',
					'title': '德国进口啤酒 凯尔特人(Barbarossa)小麦啤酒 500ml*24整箱',
					'price': 89.00,
					'oldPrice': '￥312.00'
				},
				{
					'src': 'img/seckill/018.jpg',
					'title': '创维（Skyworth）50V6E 50英寸18核金属边框4K超高清智能',
					'price': 2798.00,
					'oldPrice': '￥3499.00'
				},
				{
					'src': 'img/seckill/019.jpg',
					'title': '舒适达 （sensodyne） 抗敏感牙膏 护理套装（多效牙膏120g',
					'price': 59.00,
					'oldPrice': '￥142.00'
				},
				{
					'src': 'img/seckill/020.jpg',
					'title': '酷比魔方 iwork10旗舰本 10.1英寸二合一平板电脑 双系统(正',
					'price': 968.00,
					'oldPrice': '￥9699.00'
				}
			]
		];
		var str = '';
		var n = 0;

		$('#seckill .container').hover(function () {
			$('#seckill .container .btn').css({ 'display': 'block' });
		}, function () {
			$('#seckill .container .btn').css({ 'display': 'none' });
		})

		for (var i = 0; i < data.length; i++) {
			var oUl = $('<ul>');
			for (var j = 0; j < data[i].length; j++) {
				str += '<li><a href="" class="img"><img src="' + data[i][j].src + '"></a><a href="" class="img-title">' + data[i][j].title + '</a><h4><i>￥</i><strong>' + data[i][j].price + '</strong><span>' + data[i][j].oldPrice + '</span></h4></li>';
			}
			oUl.html(str);
			$('#seckill .slide-content').append(oUl);
			str = '';
		}

		$('#seckill .slide-content li').each(function (i) {
			if (i % 5 == 4) {
				$(this).css({
					'width': 170,
					'borderRight': 'none'
				});
			}
		})

		$('#seckill .slide-content .img').hover(function () {
			$(this).animate({
				'paddingTop': 10,
				'paddingBottom': 8
			}, 200);
		}, function () {
			$(this).animate({
				'paddingTop': 18,
				'paddingBottom': 0
			}, 200);
		});

		$('#seckill .container .br').click(function () {
			n++;
			n %= 4;
			$('#seckill .slide-content').animate({
				'left': -1000 * n
			}, 500);

		});

		$('#seckill .container .bl').click(function () {
			n--;
			n == -1 ? n = 3 : n;
			$('#seckill .slide-content').animate({
				'left': -1000 * n
			}, 500);
		});

	})();

	//秒杀-广告
	(function () {
		var aA = $('#seckill .fade-ad a');
		var aLi = $('#seckill .fade-ad li');
		var n = 0;

		aA.eq(1).fadeOut(0);
		aLi.eq(0).css({ 'background': '#df1322' });

		var timer = setInterval(autoFade, 5000);

		$('#seckill .fade-ad').hover(function () {
			clearInterval(timer);
		}, function () {
			timer = setInterval(autoFade, 5000);
		})

		$('#seckill .fade-ad li').mouseover(function () {
			n = $(this).index();
			adFade(aA, aLi);
		})

		function autoFade() {
			n++;
			n %= 2;
			adFade(aA, aLi);
		}

		function adFade(elems1, elems2) {
			elems1.fadeOut(200).eq(n).fadeIn(1000);
			elems2.css({ 'background': '#332a2c' }).eq(n).css({ 'background': '#df1322' });
		}
	})();





















})