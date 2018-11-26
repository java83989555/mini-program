var  handle, tableEvent, dataLoad_1;
var args = comn.getArgs();
var companyId = args.id;
var companyName = args.title;

dataLoad_1 = function(params) {
    var p;
    p = params.data;
    return comn.ajax({
        url: interUrl.adminCompany.detail,
        data: $.extend({id:companyId}, p),
        success: function(res) {
            params.success({
                'total': res.data.count,
                'rows': res.data.data
            });
            params.complete();
            return typeof callback === "function" ? callback(res) : void 0;
        }
    });
};



tableEvent = {
    "click .update": function(e, a, item, index) {
        $("#detail_modal").modal("show");
    },
    "click .delete": function(e, a, item, index) {
        comn.ajax({
            url: interUrl.adminTeam.delete,
            data: {id:item.id},
            success: function(res) {
                if(code == 1){
                    tip({
                        content:'删除成功'
                    });
                }else{
                    tip({
                        content:res.message
                    });
                }
            }
        });
    },
};

handle = function (value, row, index) {
    return ["<div class='btn-group btn-group-xs'>",
		"<button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>操作",
		  "<span class='caret'></span>",
		  "<span class='sr-only'>下拉切换</span>",
		"</button>",
		"<ul class='dropdown-menu' role='menu'>",
		"<li><a class='update'>修改</a></li>",
        "<li><a class='delete'>删除</a></li>",
        "</ul>", "</div>"].join("");
};






$(function() {

    $("#flowTitle").html(companyName);
    $(document).on("click", "#tab-search", function() {
    	$("#table").bootstrapTable("refresh", {url: "..."});
    })


});
