var angle, cache, cardType,  imgArrString, initMenu, swp, swpImage, user, recordDocQuery, allImg, imgIds, toVal;

recordDocQuery = null;

imgIds = [];

swp = null;

user = null;

imgArrString = "";

angle = 0;

allImg = [];

retprotUrl = [];

cache = {};
var comn1 = {};
comn1 = {
	user: window.parent.user,
	cache: window.parent.cache,
	addTab: function(o) {
		if (o.href) {
			return window.parent.menuItemClick.call(o);
		}
	},
	getArgs: function() {
		var args, i, item, items, name, qs, value;
		qs = (location.search.length > 0 ? location.search.substring(1) : "");
		items = (qs.length ? qs.split("&") : []);
		args = {};
		i = 0;
		while (i < items.length) {
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if (name.length) {
				args[name] = value;
			}
			i++;
		}
		return args;
	}
};


$.fn.nameValues = function() {
	var arg;
	arg = arguments[0];
	return $(this).find("[data-name]").each(function(index, item) {
		var key, keySwitch, value;
		key = $(this).data("name");
		keySwitch = $(this).data("formatter");
		if (keySwitch) {
			value = window[keySwitch](arg[key]) || "";
		}
		if (key) {
			return $(item).html(value || arg[key] || "");
		}
	});
};

var a = function toggle() {
	var flag = true;
	function get() {
		return flag = !flag; 
	}
	return get; 
}();

toggleTopNav = function(){
	$("#topNav").toggleClass("hide")
	var o = {};
	if(a()){
		o['height'] = "calc(100% - 110px)";
	}else{
		o['height'] = "calc(100% - 0px)";
	}
	$("#content-main").css(o); 
}

// swpImage = function(o) {
// 	if(o.title){ $("#dirTitle").text(o.title); }
// 	return $.ajax({
// 		url: interUrl.basic + interUrl.gr.getPhoto,
// 		type: 'POST',
// 		data: {
// 			loanApplyId: o.loanApplyId,
// 			dirId: o.dirId,
// 			fileNamespace: o.fileNamespace,
// 			releventFlow: o['releventFlow'],
// 			releventFlowNode: o['releventFlowNode']
// 		},
// 		success: function(res) {
// 			  var arr = [], _index = 0, ref = res.data.loanDocumentList, results = [];
// 			  for (k = j = 0, len = ref.length; j < len; k = ++j) {
// 				i = ref[k];
// 				arr.push(i.filePath);
// 				if (i.id === o.id) {
// 				  results.push(_index = k);
// 				} else {
// 				  results.push(void 0);
// 				}
// 			  }
// 			  allImg = res.data.loanDocumentList;
// 			  switchImage(arr, _index, 1);
// 			  recordDocQuery = function(ids) {
// 				  var obj = {}, ids = ids.split(",");
// 				  for(var i=0; i< allImg.length; i++){
// 					  for(var j=0; j< ids.length; j++){
// 						  if(allImg[i].id == ids[j]){
// 							  if(!obj[allImg[i].dirId]){obj[allImg[i].dirId] = []};
// 							  obj[allImg[i].dirId].push(ids[j]);
// 						  }
// 					  }
// 				  }
// 				  for(item in obj){
// 					  $.ajax({
// 						  url: interUrl.basic + interUrl.gr.recordDocQueryHistory,
// 						  type: "post",
// 						  data: {
// 							  loanApplyId: o.loanApplyId,
// 							  dirId: item,
// 							  fileNamespace: o.fileNamespace,
// 							  releventFlow: o['releventFlow'],
// 							  releventFlowNode: o['releventFlowNode'],
// 							  docIds: obj[item].join(",")
// 						  },
// 						  success: function(res){
// 							  if(res.code == 20000){return comn.tip({content: res.message || "<code>" + o.url + "</code><br /> 接口异常！！！"})};
// 							  if(typeof(o.callback == "function")){
// 								  imgIds = [];
// 								  o.callback(ids.join(","));
// 							  }
// 						  }
// 					  });
//
//
// 				  }
//
// 			  }
// 			if(res.data.loanDocumentList[_index].hasRead == 1){ imgIds.push(res.data.loanDocumentList[_index].id); }
// 			toVal = function(dirId){
// 				var dirId = dirId || allImg[_index].dirId;
// 				$("#guarantor")[0].innerHTML = "暂无数据!";
// 				if(res.data && res.data.photoInfo && res.data.photoInfo[dirId].Guarantor_Info){
// 					$.each(res.data.photoInfo[dirId].Guarantor_Info, function(i, item){
// 						$("#guarantor").append($("#guarantorTPL").html()).children().eq(i).nameValues(item);
// 					});
// 				}
// 				if (res.data.photoInfo && res.data.photoInfo[dirId].Customer_Info) {
// 					$(".customer").show().nameValues(res.data.photoInfo[dirId].Customer_Info);
// 				}else{
// 					$(".customer").hide();
// 				}
// 				if (res.data.photoInfo && res.data.photoInfo[dirId].Spouse_Info) {
// 					$(".spouse").show().nameValues(res.data.photoInfo[dirId].Spouse_Info);
// 				}else{
// 					$(".spouse").hide();
// 				}
// 				if ((ref2 = res.data.photoInfo) != null ? ref2.Credit_Info : void 0) {
// 					$(".coBank").show().nameValues(res.data.photoInfo[dirId].Credit_Info);
// 				} else {
// 					$(".coBank").hide();
// 				}
// 			}
// 			toVal();
//
//
// 		}
// 	});
// };

function switchImage(arr, _index, type){
	if(type == 1){
		$("#picInfo")[0].className = "col-md-8";
		$("#picImage")[0].className = "col-md-16"
	}else{
		$("#picInfo")[0].className = "hide";
		$("#picImage")[0].className = "col-md-24"
	}
	$("#imageSwitch").modal("show")
	$.openPhotoGallery(arr, _index);
}

function curImg(index) { 
	if(index){
		$("#curImg").text(index) 
	}else{
		return parseInt($("#curImg").text());
	}
}
function totalImg(total) { $("#totalImg").text(total); }

initMenu = function(data) {
	var itemLi, menu, ulNav;
	ulNav = ['second', 'third'];
	itemLi = function(o, level, k) {
		var ref;
		if (! ((ref = o.sysMenuList) != null ? ref.length: void 0) > 0) {
			return ["<li><a class='J_menuItem' href='" + o.url + "' data-index='" + o.id + "'>" 
			        + o.menuName 
			        +"</a>"
			        + (o.menuName == '预警消息' ? '<i class="tip_num_in" id="tipNumElmIn"></i>' : '')
			        
			        ].join("");
		} else {
			return ["<li>" 
			        + "<a>" 
			        + ("<i class='fa iconfont " + o.logoTag + "'></i>") 
			        + ("<span class='nav-label'>" + o.menuName + "</span>") 
			        + "<span class='fa arrow'></span>" 
			        + (o.menuName == '消息通知' ? '<i class="tip_num" id="tipNumElm"></i>' : '')
			        +"</a>" + menu(o.sysMenuList, level + 1, k) + "</li>"].join("");
			//return ["<li>" + "<a>" + ("<i class='fa iconfont " + o.logoTag + "'></i>") + ("<span class='nav-label'>" + o.menuName + "</span>") + "<span class='fa arrow'></span>" + "</a>" + menu(o.sysMenuList, level + 1, k) + "</li>"].join("");
		}
	};
	menu = function(arr, level) {
		var a, i, k, len, o;
		a = [];

		if(arr[arr.length-1]['sysMenuList']){
			$.each(arr[arr.length-1]['sysMenuList'], function(i, item){
				if(item.url.indexOf("?") != -1){
					url = item.url.split("?")[0];
				}else{
					url = item.url;
				}
				retprotUrl.push(url); 
			});
		}
		if (level !== 0) {
			a.push("<ul class='nav nav-" + ulNav[level - 1] + "-level collapse'>");
		}
		if (arr.length > 0) {
			for (k = i = 0, len = arr.length; i < len; k = ++i) {
				o = arr[k];
				a.push(itemLi(o, level, k));
			}
		}
		if (level !== 0) {
			a.push("</ul>");
		}
		return a.join("");
	};
	$("#side-menu").append(menu(data, 0));
	$("#side-menu").metisMenu();
	return $(".sidebar-collapse").slimScroll({
		height: "100%",
		railOpacity: .9,
		alwaysVisible: ! 1
	});
};






$(function() {



	if(document.location.href == "http://ht-cd.cheguo.com/view/main.html") document.title = '非资管贷前';
	$("#imageSwitch").on("hide.bs.modal", function(){ 
		if(imgIds && imgIds.length > 0){
			recordDocQuery(imgIds.join(",")); 
		}
	});
	$(".nav-header img").attr("src",  'images/logo.png');
	$("#content-main").removeClass("styleCR");

	$.ajax({
		url: interUrl.basic + interUrl.adminUser.sessionGet,
		dataType: "json",
		success: function(data) {
			if (typeof data === "string") {
				data = JSON.parse(data);
			}
			if (data.code === 1001 || data.code ===1000) {
				return location.href = "./index.html";
			} else if (data.code === 1) {
                user = data.data;
                return $("#userName").text(data.data.realname);
			} else {
                $("#dialogTip").nameValues({
                    content: data.message
                });
                return $("#dialogTip").modal("show");
			}
		}
	});
	$.ajax({
		url: interUrl.basic + interUrl.adminUser.menu,
		dataType: "json",
		success: function(data) {
			if (typeof data === "string") {
				data = JSON.parse(data);
			}
			if (data.code === 1000 || data.code === 1001) {
				return location.href = "./index.html";
			} else if (data.code === 1) {
                initMenu(data.data);

			} else {
                $("#dialogTip").nameValues({
                    content: data.message
                });
                return $("#dialogTip").modal("show");
			}
		}
	});

	$(".J_tabExit").click(function() {
		return $("#logOut").modal("show");
	});
	
	

	
	
	return $("#exitSure").click(function() {
		$.ajax({
			url: interUrl.basic + interUrl.adminUser.logout,
			dataType: "json",
			success: function(data) {
			  if (typeof data === "string") {
				data = JSON.parse(data);
			  }
			  if(data.code == 1000 || data.code == 1001 || data.code == 1){
					location.href = "./index.html";
			  }
			}
		  }); 
	});
	// 报表菜单加载
	var hrefs = $("#side-menu").find("li"); 
	for (var i = hrefs.length - 1; i >= 0; i--) {
		var href= hrefs[i].sysMenuList('a').attr('href');
		console.log(href+"<br>");
	};
	$("#side-menu .nav-header").attr('href', 'main/index/index.html?methods='+href);

});
$('body').on('click','.nav-close',function(){
	if($(this).parent().hasClass('close')){
		$(this).parent().removeClass('close');
		$('.navbar-default.navbar-static-side').css({width:'200px',overflowX:'hidden'});
		$('#page-wrapper').css({marginLeft:'200px'});
	}else{
		$(this).parent().addClass('close');
		$('.navbar-default.navbar-static-side').css({width:0,overflowX:'hidden'});
		$('#page-wrapper').css({marginLeft:'45px'});

	}
})
