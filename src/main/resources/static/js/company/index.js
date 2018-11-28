var  handle,subStr, tableEvent, dataLoad_1;

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


subStr = function (value, row, index) {
	if(value && value.length>35){
		return value.substring(0,35)+' ......';
	}
	return value;
};





$(function() {

    $(document).on("click", "#tab-search", function() {
    	$("#table").bootstrapTable("refresh", {url: "..."});
    })
    $("#uploadfile").click(function() {
        var filename = $("#filename").val();
        if (filename == "") {
            alert("请选择文件！");
            return false;
        }
        ajaxFileUpload();
    });

    $("#download").click(function(){
        location.href=interUrl.basic+interUrl.adminExcel.export;
    });

    $("#filename").fileinput({
        showRemove:false,
        showPreview: false,
        showUpload : false,
        language : 'zh',
        allowFileExtensions : ['xls','xlsx']
    });
});

function ajaxFileUpload() {
    $("#formid").ajaxSubmit({
        type : "POST",
        url : interUrl.basic+interUrl.adminExcel.import,
        dataType : 'json',
        success : function(data) {
            if (data.code == 1) {
                tip({
                    content: "导入成功!"
                });
                $("#importModal").modal('hide');
                $("#table").bootstrapTable("refresh", {
                    url : "..."
                });

            }else{
                $('#msg_dialog_content').html(data.msg);
                $("#msg_dialog").modal('show');
            }
        }
    });
}