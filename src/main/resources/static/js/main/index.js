// alert(comn.user.uid);
var option_1, option_2, option_3, option_4, option_sign, option_bankPay, option_rotary, yuan1, method, args = comn.getArgs(), moduleType, t, level, uId;
// method = args["method"]; console.log(method);

yuan1 = null;



option_1 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // orient: 'vertical',
        // x: 'right',
        // icon: "bar",
        data: ['客户数量', '贷款额']
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            name: '发起日期',
            boundaryGap: true,
            axisLabel: {
                interval: 0,
                rotate: 45
            },
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '客户数量'
        },
        {
            type: 'value',
            name: '贷款额'
        }
    ],
    series: [
        {
            'name': '客户数量',
            'type': 'line',
            data: []
        }, {
            'name': '贷款额',
            'type': 'line',
            yAxisIndex: 1,
            data: []
        }
    ]
};


option_3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['办理中', '审批中', '付款中', '未放款']
    },
    calculable: true,
    series: [
        {
            'name': '数据显示',
            'type': 'pie',
            'itemStyle': {
                'normal': {
                    'label': {
                        'show': true
                    },
                    'labelLine': {
                        'show': true
                    }
                },
                'emphasis': {
                    'label': {
                        'formatter': '{c}',
                        'show': true,
                        'position': 'center',
                        'textStyle': {
                            'fontSize': 30,
                            'fontWeight': 'bold'
                        }
                    }
                }
            },
            radius: ['50%', '70%'],
            data: []
        }
    ]
};

option_4 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // orient: 'vertical',
        // x: 'right',
        data: ['数量', '贷款额(元)']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        name: '车商',
        boundaryGap: true,
        axisLabel: {
            interval: 0,
            rotate: 45,
            formatter: function (value, index) {
                if (value != undefined) {
                    var str = value.split(" ");
                    if (str[0].length > 10) {
                        return str[0].substring(0, 10) + "...";
                    } else {
                        return str[0];
                    }

                }
            }
        },
        data: []
    }],
    grid: { // 控制图的大小，调整下面这些值就可以，
        bottom: 105
    },
    yAxis: [
        {
            type: 'value',
            name: '数量'
        },
        {
            type: 'value',
            name: '贷款额'
        }
    ],
    series: [
        {
            'name': '数量',
            'type': 'bar',
            data: []
        }, {
            'name': '贷款额(元)',
            'type': 'bar',
            yAxisIndex: 1,
            data: []
        }
    ]
};


var chart1, chart2, chart3, chart4, switchDate_1, switchDate_2, switchDate_3, switchDate_4, switchDate_sign, switchDate_un, switchDate_bankPay, switchDate_rotary, switchDate_sign2, switchDate_un2, switchDate_bankPay2, switchDate_rotary2;
function levelReport() {
    if(level == '10' || level == '20'){    //个人级 默认主级
    $("#branchCompany,#groupCompany").hide();
    $("#personal").show();
    // 首页报表全部显示
    switchDate_1(interUrl.report.statisticByMonth, nowMonth, 1);
    switchDate_2(interUrl.report.unPledgeStatistic, 1);
    switchDate_3(interUrl.report.flowStatusStatistic, 1);
    switchDate_4(interUrl.report.dealerCompanystatistic, nowMonth, 1);
    }else if(level == '30'){    //分公司级
    $("#personal,#groupCompany").hide();
    $("#branchCompany").show();
    switchDate_sign(interUrl.report.loanSignStatistic, nowMonth, 2);
    switchDate_un(interUrl.report.unPledgeStatistic, 2);
    switchDate_bankPay(interUrl.report.bankPayStatistic, nowMonth, 2);
    switchDate_rotary(interUrl.report.loanAmmountRotaryStatistic, year, 2);
    }else if(level == '40'){   //集团级
      $("#personal,#branchCompany").hide();
    $("#groupCompany").show();
    switchDate_sign2(interUrl.report.loanSignStatistic, nowMonth, 3);
    switchDate_un2(interUrl.report.unPledgeStatistic, 3);
    switchDate_bankPay2(interUrl.report.bankPayStatistic, nowMonth, 3);
    switchDate_rotary2(interUrl.report.loanAmmountRotaryStatistic, year, 3);
    }else if(level == '50'){
      $("#branchCompany,#groupCompany, #personal").hide();
    }
}
function loadReport() {
    $.ajax({
        url: interUrl.basic + interUrl.adminUser.sessionGet,
        type: "POST",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            if (data.code === 30000) {
                //return location.href = "/loan/index.html";
            } else if (data.code === 20000) {
                /*$("#dialogTip").nameValues({
                 content: data.message
                 });*/
                //return $("#dialogTip").modal("show");
            } else {
                user = data.data;
                uId = user.uid;
                level = user.level;
                levelReport();
            }
        }
    });
}
switchDate_1 = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chart1.clear();
            option_1.xAxis[0].data = res.data.fullDay;
            option_1.series[0].data = res.data.num;
            option_1.series[1].data = res.data.ammountSum;
            return chart1.setOption(option_1);
        }
    });
};
//switchDate_1(interUrl.report.statisticByMonth,nowMonth,1);
switchDate_2 = function (url, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            var totalNum, numArr, index;
            numArr = res.data.num;
            totalNum = res.data.totalNum;
            var signNum = [];
            var total = 0;
            index = res.data.index;
            chart2.clear();
            for (var i = 0; i < index.length; i++) {
                if (index[i] == 0) {
                    signNum.push({"name": '0-15天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 1) {
                    signNum.push({"name": '15-30天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 2) {
                    signNum.push({"name": '30-45天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 3) {
                    signNum.push({"name": '45-60天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 4) {
                    signNum.push({"name": '60天以上', "value": [totalNum[i], numArr[i]]});
                }
                total += totalNum[i];
            }
            ;
            option_2.series[0].data = signNum;
            option_2.title.subtext = total;
            return chart2.setOption(option_2);
        }
    });
};
//switchDate_2(interUrl.report.unPledgeStatistic,1);
switchDate_3 = function (url, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            var arr, index;
            arr = res.data.num;
            var signNum = [];
            index = res.data.index;
            chart3.clear();
            for (var i = 0; i < index.length; i++) {
                if (index[i] == 0) {
                    signNum.push({"name": '办理中', "value": arr[i]});
                } else if (index[i] == 1) {
                    signNum.push({"name": '审批中', "value": arr[i]});
                } else if (index[i] == 2) {
                    signNum.push({"name": '付款中', "value": arr[i]});
                } else if (index[i] == 3) {
                    signNum.push({"name": '未放款', "value": arr[i]});
                }
            }
            ;
            option_3.series[0].data = signNum;
            return chart3.setOption(option_3);
        }
    });
};
//switchDate_3(interUrl.report.flowStatusStatistic,1);
switchDate_4 = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chart4.clear();
            option_4.xAxis[0].data = res.data.name;
            option_4.series[0].data = res.data.num;
            option_4.series[1].data = res.data.ammountSum;
            return chart4.setOption(option_4);
        }
    });
};
//switchDate_4(interUrl.report.dealerCompanystatistic,nowMonth,1);

switchDate_sign = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartB1.clear();
            option_sign.xAxis[0].data = res.data.fullDay;
            option_sign.series[0].data = res.data.num;
            option_sign.series[1].data = res.data.ammountSum;
            window.fullDay = res.data.fullDay;
            return chartB1.setOption(option_sign);
        }
    });
};
switchDate_un = function (url, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            var totalNum, numArr, index;
            numArr = res.data.num;
            totalNum = res.data.totalNum;
            var signNum = [];
            index = res.data.index;
            var total = 0;
            chartB2.clear();
            for (var i = 0; i < index.length; i++) {
                if (index[i] == 0) {
                    signNum.push({"name": '0-15天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 1) {
                    signNum.push({"name": '15-30天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 2) {
                    signNum.push({"name": '30-45天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 3) {
                    signNum.push({"name": '45-60天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 4) {
                    signNum.push({"name": '60天以上', "value": [totalNum[i], numArr[i]]});
                }
                total += totalNum[i];
            }
            ;
            option_2.series[0].data = signNum;
            option_2.title.subtext = total;
            return chartB2.setOption(option_2);
        }
    });
};
switchDate_bankPay = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartB3.clear();
            option_bankPay.xAxis[0].data = res.data.fullDay;
            option_bankPay.series[0].data = res.data.num;
            option_bankPay.series[1].data = res.data.ammountSum;
            window.fullDay = res.data.fullDay;
            return chartB3.setOption(option_bankPay);
        }
    });
};

switchDate_rotary = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            year: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartB4.clear();
            option_rotary.xAxis[0].data = res.data.day;
            option_rotary.series[0].data = res.data.timelineCompanyPayAndBankPaySum;
            option_rotary.series[1].data = res.data.timelineCompanyPayAndContractReceiveSum;
            option_rotary.series[2].data = res.data.timelineContractReceiveAndBankPaySum;
            window.fullDay = res.data.day;
            return chartB4.setOption(option_rotary);
        }
    });
};
switchDate_sign2 = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartG1.clear();
            option_sign.xAxis[0].data = res.data.fullDay;
            option_sign.series[0].data = res.data.num;
            option_sign.series[1].data = res.data.ammountSum;
            window.fullDay = res.data.fullDay;
            return chartG1.setOption(option_sign);
        }
    });
};
switchDate_un2 = function (url, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            var totalNum, numArr, index;
            numArr = res.data.num;
            totalNum = res.data.totalNum;
            var signNum = [];
            var total = 0;
            index = res.data.index;
            chartG2.clear();
            for (var i = 0; i < index.length; i++) {
                if (index[i] == 0) {
                    signNum.push({"name": '0-15天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 1) {
                    signNum.push({"name": '15-30天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 2) {
                    signNum.push({"name": '30-45天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 3) {
                    signNum.push({"name": '45-60天', "value": [totalNum[i], numArr[i]]});
                } else if (index[i] == 4) {
                    signNum.push({"name": '60天以上', "value": [totalNum[i], numArr[i]]});
                }
                total += totalNum[i];
            }
            ;
            option_2.series[0].data = signNum;
            option_2.title.subtext = total;
            return chartG2.setOption(option_2);
        }
    });
};
switchDate_bankPay2 = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            yearMonth: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartG3.clear();
            option_bankPay.xAxis[0].data = res.data.fullDay;
            option_bankPay.series[0].data = res.data.num;
            option_bankPay.series[1].data = res.data.ammountSum;
            window.fullDay = res.data.fullDay;
            return chartG3.setOption(option_bankPay);
        }
    });
};

switchDate_rotary2 = function (url, date, moduleType) {
    return comn.ajax({
        url: url,
        data: {
            year: date,
            moduleType: moduleType,
            uId: uId
        },
        success: function (res) {
            chartG4.clear();
            option_rotary.xAxis[0].data = res.data.day;
            option_rotary.series[0].data = res.data.timelineCompanyPayAndBankPaySum;
            option_rotary.series[1].data = res.data.timelineCompanyPayAndContractReceiveSum;
            option_rotary.series[2].data = res.data.timelineContractReceiveAndBankPaySum;
            window.fullDay = res.data.day;
            return chartG4.setOption(option_rotary);
        }
    });
};

$(function () {
    t = args['t'];

    if (t == "mobile") {
        uId = args["uId"];
        level = args["level"];
        //levelReport();
    } else {
        //loadReport();
    }



    $("#curDate0").text(nowMonth);
    $("#curDate0").prev(".minus").click(function () {
        var _text, date, o, text;
        text = $("#curDate0").text().trim();
        o = moment(text, "YYYY年MM月");
        date = o.subtract(1, 'M');
        _text = date.format("YYYY-MM");
        // switchDate_1(date.format("YYYY-MM"));
        switchDate_1(interUrl.report.statisticByMonth, _text, 1);
        return $("#curDate0").text(_text);

    });
    $("#curDate0").next(".plus").click(function () {
        var _text, date, o, text;
        text = $("#curDate0").text().trim();
        o = moment(text, "YYYY年MM月");
        date = o.add(1, 'M');
        _text = date.format("YYYY-MM");
        switchDate_1(interUrl.report.statisticByMonth, _text, 1);
        return $("#curDate0").text(_text);
    });



    // 链接跳转事件
    $("#show1").on("click", function (data) {
        if (t == 'mobile') {
            return;
            window.location.href = "business.html?moduleType=1&uId=" + uId + "&t=" + t;
        } else {
            return comn.addTab({
                title: "业务量分析",
                href: "./Modal/main/index/business.html?moduleType=1&uId=" + uId + "&t=" + t
            });
        }

    });





});
