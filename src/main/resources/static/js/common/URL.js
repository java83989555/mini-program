var interUrl = {
        mockList: "",
        basic: "/",
        adminUser:{
            login:"admin/user/login",
            logout:"admin/user/logout",
            sessionGet:"admin/user/sessionGet",
            list:"admin/user/list",
            add:"admin/user/add",
            update:"admin/user/update",
            start:"admin/user/start",
            stop:"admin/user/stop",
            delete:"admin/user/delete",
            menu:"admin/user/menu"

        },
        adminCompany:{
            list:"admin/company/list",
            detail:"admin/company/detail",
            add:"admin/company/add",
            update:"admin/company/update",
            delete:"admin/company/delete"
        },
        adminTeam:{
            add:"admin/team/add",
            update:"admin/team/update",
            delete:"admin/team/delete"
        }

    };

//判断值是否改变,用法:在input上增加data-check="_字段名;提示信息",在获取旧值的接口里保存window[_字段名]的值,同一window内字段名不重复
$(document).on('blur', "[data-check]", function () {
    var check = $(this).data("check"),
        _key = check.split(";", 2)[0],
        _tip = check.split(";", 2)[1];
    var newValue = $(this).val();
    if (newValue !== "" && newValue !== window[_key]) {
        tip({
            content: _tip
        })
    }
});

zeroMoney = function (value, row, index) {
	if(!value){
		return "0";
	}else{
		return value;
	}
}




moneyFixedTwo=function(value, row, index){
	if(typeof(value)=='undefined'){
		return null;
	}else{
		if(value==0){
			return '0.00';
		}else{
			return value.toFixed(2);
		}	
	}
}

dateFormTen = function (value, row, index) {
    if (value && value.length > 10) {
        return value.substr(0, 10);
    } else {
        return value;
    }
};



formatter_money = function(value, row, index){
    value = value+"";
    if(value.length == 0){
        return value;
    }else{
        var dimeIndex = value.indexOf('.');
        var dollar = value;
        var dime = '.00';
        if(-1 != dimeIndex){
            dime = value.substring(dimeIndex, value.length);
            dollar = value.substring(0, dimeIndex);
        }
        if(dollar.length < 3){
            return dollar + dime;
        }
        var mod = dollar.length % 3;
        var money = (mod == 0 ? '' : (dollar.substring(0, mod)));
        for(var i = 0; i < Math.floor(dollar.length / 3); i++){
            if ((mod == 0) && (i == 0)){
                money += dollar.substring(mod + 3 * i, mod + 3 * i + 3);
            } else{
                money += ',' + dollar.substring(mod + 3 * i, mod + 3 * i + 3);
            }
        }
        return money + dime;
    }
}


//当前月，年
var date, year, month, nowMonth;
date = new Date();
year = date.getFullYear();
month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
nowMonth = year + "-" + month;

// 日期格式化插件
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

//确认提交或退回模态框
var sureModal = '<div class="modal fade" id="sureModal">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    '<h4 class="modal-title">提示信息</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<p class="tipText"></p>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-primary" id="sureOption">确定</button>' +
    '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>' +
    '</div></div></div></div>';

function oppSureModal(text) {
    if ($("#sureModal").length > 0) {
        $("#sureModal").modal("show");
        $("#sureModal").find(".tipText").text(text);
    } else {
        $("body").append(sureModal);
        $("#sureModal").find(".tipText").text(text);
        $("#sureModal").modal("show");
    }
}

$.fn.extend({

    getToday: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        today = y + "-" + m + "-" + d;
        $(this).val(today);
    },
    getTodayH:function(){
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var h = (date.getHours()+100+'').slice(1);
        var mm = (date.getMinutes()+100+'').slice(1);
        today = y + "-" + m + "-" + d+' '+h+":"+mm+':00';
        $(this).val(today);
    },
    getMonthDay1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        today = y + "-" + m + "-" + "01";
        $(this).val(today);
    },
    getLastMonthDay1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        today = y + "-" + m + "-" + "01";
        $(this).val(today);
    },
    getYear1Day1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate();
        today = (y + 1) + "-" + m + "-" + (d - 1);
        $(this).val(today);
    },
    //当年第一月
    getMonthFirst: function () {
        var date = new Date();
        var MonthFirst = date.getFullYear();
        $(this).val(MonthFirst + "-01");
    },
    //当月
    getMonthCur: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var MonthFirstDay = new Date(date.getFullYear(), currentMonth, 1).format('yyyy-MM');
        $(this).val(MonthFirstDay);
    },
    //当月第一天
    getMonthDayFirst: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var MonthFirstDay = new Date(date.getFullYear(), currentMonth, 1).format('yyyy-MM-dd');
        $(this).val(MonthFirstDay);
    },
    //获取向后向前的日期
    getDayCul:function(day){
        var date = new Date();
        var time=date.getTime()+day*24*3600*1000;
        var MonthFirstDay = new Date(time).format('yyyy-MM-dd');
        $(this).val(MonthFirstDay);
    },
    //当月最后一天
    getMonthDayLast: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = ++currentMonth;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        var today = new Date(nextMonthFirstDay - oneDay).format('yyyy-MM-dd');
        $(this).val(today);
    },
    getPayDate: function(){
        var _this=this;
        var weekArr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        var data=new Date();
        var year=data.getFullYear();
        var month=data.getMonth();
        var day=data.getDate();
        var week=data.getDay();
        setInterval(function(){
            var date=new Date();
            var hours=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            hours=hours<10?"0"+hours:hours;
            min=min<10?"0"+min:min;
            sec=sec<10?"0"+sec:sec;
            $(_this).html(year+'-'+(month+1)+'-'+day+'&nbsp;&nbsp;'+weekArr[week]+'</br>'+hours+':'+min+':'+sec)
        },1000)
    },


    setPostLoanTerm:function(){
        var arr=[];
        for(var i=1;i<=36;i++){
            arr.push("<option value="+i+">"+i+"期</option>");
        }
        return $(this).append(arr.join(""));
    }
});



//校验规则新增
if(jQuery.validator){
    jQuery.validator.addMethod("isMoney", function(value, element) {
        var money =/^(([1-9]\d*)|0)(\.\d{1,2})?$/;
        return this.optional(element) || (money.test(value));
    }, "请填写正确的金额");
    jQuery.validator.addMethod("isMoney8", function(value, element) {
        var money =/^(([1-9]\d{0,7})|0)(\.\d{1,2})?$/;
        return this.optional(element) || (money.test(value));
    }, "请填写正确的金额");
    jQuery.validator.addMethod("bankCount", function(value, element) {
        var count =/^[0-9]+$/;
        return this.optional(element) || (count.test(value));
    }, "请填写正确的账号");
    //jQuery.validator.addMethod("adrLimit", function(value, element) {
    //    var adrInput=$(element).parents('.form-group').prev().find('input');
    //    adrInput.each(function(){
    //        value+=$(this).val()
    //    })
    //    var limit=50;
    //    return this.optional(element) || (value.length<limit);
    //}, "长度不能超过 50 个字符");
}