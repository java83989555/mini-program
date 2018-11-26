var  handle, tableEvent, dataLoad_1;

dataLoad_1 = function(params) {
    var p;
    p = params.data;
    return comn.ajax({
        url: interUrl.adminCompany.list,
        data: $.extend($("#searchForm").values(), p),
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
    "click .show": function(e, a, item, index) {
        comn.addTab({
            title: "投资人",
            href:"company/detail.html?type=show&id=" + item.id+"&title="+item.name
        });
    }
};

handle = function (value, row, index) {
    return ["<div class='btn-group btn-group-xs'>",
		"<button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>操作",
		  "<span class='caret'></span>",
		  "<span class='sr-only'>下拉切换</span>",
		"</button>",
		"<ul class='dropdown-menu' role='menu'>",
		"<li><a class='show'>投资人列表</a></li>"
		,"</ul>", "</div>"].join("");
};






$(function() {

    $(document).on("click", "#tab-search", function() {
    	$("#table").bootstrapTable("refresh", {url: "..."});
    })


});
