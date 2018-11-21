$(function() {
	$.ajax({
		url: interUrl.basic + interUrl.adminUser.sessionGet,
		dataType: "json",
		success: function(data) {
			if (typeof data === "string") {
				data = JSON.parse(data);
			}
			if (data.code === 1) {
				return location.href = "main.html";
			}
		}
	});
	
	$(".navbar-nav img").attr("src",  "images/login_logo.jpg");
	$("#chedaiImg, #tel").removeClass("hide");

	if ($.cookie('userName') == 'null') {
		var name = '';
	} else {
		var name = $.cookie('userName');
	}
	$("input[name=userName]").val(name);
	var addCookie, delCookie;

	function addCookie(a) {
		$.cookie('userName', a, {
			expires: 1
		});
	};

	function delCookie(b) {
		$.cookie('userName', null);
	};
	
	//回车监听事件，enter登陆
	$(document).on('keyup',function(e){
		if(e.keyCode==13){
			loginEnter();
		}
	});
	
   function loginEnter(){
        $.ajax({
		url: interUrl.basic + interUrl.adminUser.login,
		type: "POST",
		data: $("#loginForm").values(),
		success: function(res) {
			var code = $('.check i').attr('index');
			var userName = $("input[name=userName]").val();
			if (code == 1) {
				delCookie(userName);
			} else if (code == 1) {
				addCookie(userName);
			};
			var o;
			if (typeof res === "string") {
				o = JSON.parse(res);
			} else {
				o = res;
			}
			if (o["code"] === 1) {
				location.href = "main.html";
			} else{
				$('#errInfo').html(res['msg']);
				$("#loginError").modal("show");
			}
		}
	});

};
	
	$("#loginBtn").click(function() {
		loginEnter();
	});

	$("#switch").click(function() { //鐧诲綍浜岀淮鐮佸垏鎹�
		$(this).toggleClass('code');
		var code = $(this).attr('class');
		if (code == 'code') {
			$(".login_box").addClass('hide').next(".codeBox").removeClass('hide');
		} else {
			$(".login_box").removeClass('hide').next(".codeBox").addClass('hide');
		}
	});
	$(".check i").click(function() {
		var code = $(this).attr('class');
		if (code == null || code == '') {
			$(this).addClass('cancel').attr('index', '1');
		} else if (code == 'cancel') {
			$(this).removeClass('cancel').attr('index', '0');
		}
	});
	

});
