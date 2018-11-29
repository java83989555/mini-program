var  handle, tableEvent, dataLoad_1;
var args = comn.getArgs();
var companyId = args.id;
var companyName = args.title;

dataLoad_1 = function(params) {
    var p;
    p = params.data;
    return comn.ajax({
        url: interUrl.adminTeam.list,
        data: $.extend({companyId:companyId}, p),
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
        window.mode = 'modify';
        resetDialog();
        $("#detail_modal").modal("show");
        $('#teamForm').values(item);
    },
    "click .delete": function(e, a, item, index) {
        comn.ajax({
            url: interUrl.adminTeam.delete,
            data: {id:item.id},
            success: function(res) {
                if(res.code == 1){
                    tip({
                        content:'删除成功'
                    });
                    $("#table").bootstrapTable("refresh", {url: "..."});
                }else{
                    tip({
                        content:res.msg
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


function resetDialog() {
    if(window.mode == 'add'){
        $("#name").attr('readonly',false);
        $('#detail_modal .modal-header .modal-title').html('新增投资人');

    }
    if(window.mode == 'modify'){
        $("#name").attr('readonly',true);
        $('#detail_modal .modal-header .modal-title').html('修改投资人');

    }
}



$(function() {
    //标题赋值
    $("#flowTitle").html(companyName);

    $('#add-item').on('click', function () {
        window.mode = 'add';
        $("#detail_modal").modal("show");
        $("#companyId").val(companyId);
        $("#companyName").val(companyName);
        resetDialog();
    });

    //add user
    $('#detail_modal').on('click','#btn-save',function () {
        $('#teamForm').validate();
        if( $('#teamForm').valid() == true){
            var data = $('#teamForm').values();
            var url = interUrl.adminTeam.add;
            if(window.mode == 'modify'){
                url = interUrl.adminTeam.update;
            }
            comn.ajax({
                url: url,
                data: data,
                success: function (res) {
                    if(res.code == 1){
                        tip({
                           content:res.data
                        });
                        $('#detail_modal').modal('hide');
                        $("#table").bootstrapTable("refresh", {url: "..."});
                    }else{
                        tip({
                            content:res.msg
                        });
                    }
                }
            });
        }
    });

    $(document).on("click", "#tab-search", function() {
    	$("#table").bootstrapTable("refresh", {url: "..."});
    })




});
