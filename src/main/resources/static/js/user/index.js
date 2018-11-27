var level,status_fmt, handle, tableEvent, dataLoad_1;
var args = comn.getArgs();

dataLoad_1 = function(params) {
    var p;
    p = params.data;
    return comn.ajax({
        url: interUrl.adminUser.list,
        data: $.extend($("#searchForm").values(), p),
        success: function(res) {
            params.success({
                'total': res.data.total,
                'rows': res.data.list
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
    "click .stop": function(e, a, item, index) {
        comn.ajax({
            url: interUrl.adminUser.stop,
            data: {id:item.id},
            success: function(res) {
                if(res.code == 1){
                    tip({
                        content:res.data
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
    "click .start": function(e, a, item, index) {
        comn.ajax({
            url: interUrl.adminUser.start,
            data: {id:item.id},
            success: function(res) {
                if(res.code == 1){
                    tip({
                        content:res.data
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
    "click .delete": function(e, a, item, index) {
        comn.ajax({
            url: interUrl.adminUser.delete,
            data: {id:item.id},
            success: function(res) {
                if(res.code == 1){
                    tip({
                        content:res.data
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
    var html = "";
    if(row.status == 2){
        html = "<li><a class='start'>启用</a></li>"
    }else if(row.status == 1){
        html = "<li><a class='stop'>停用</a></li>"
    }
    return ["<div class='btn-group btn-group-xs'>",
		"<button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>操作",
		  "<span class='caret'></span>",
		  "<span class='sr-only'>下拉切换</span>",
		"</button>",
		"<ul class='dropdown-menu' role='menu'>",
		"<li><a class='update'>修改</a></li>",
        html,
        "<li><a class='delete'>删除</a></li>",
        "</ul>", "</div>"].join("");
};

level = function (value, row, index) {
    if(value == 2){
        return '管理员';
    }else{
        return '普通用户';
    }
};

status_fmt = function (value, row, index) {
    if(value == 2){
        return '已停用';
    }else{
        return '已启用';
    }
};

function resetDialog() {
    if(window.mode == 'add'){
        $("#username").attr('readonly',false);
        $('#detail_modal .modal-header .modal-title').html('新增用户');

    }
    if(window.mode == 'modify'){
        $("#username").attr('readonly',true);
        $(".btn_div").removeClass('hide');
        $(".password_div").addClass('hide');
        $('#detail_modal .modal-header .modal-title').html('修改用户');
    }
}



$(function() {

    $('#detail_modal').on('click','#modify_password',function () {

        $(".password_div").removeClass('hide');
    });

    $('#add-item').on('click', function () {
        window.mode = 'add';
        $("#detail_modal").modal("show");
        $(".btn_div").addClass('hide');
        $(".password_div").removeClass('hide');
        resetDialog();
    });

    //add user
    $('#detail_modal').on('click','#btn-save',function () {
        $('#teamForm').validate();
        if( $('#teamForm').valid() == true){
            var data = $('#teamForm').values();
            var url = interUrl.adminUser.add;
            if(window.mode == 'modify'){
                url = interUrl.adminUser.update;
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
