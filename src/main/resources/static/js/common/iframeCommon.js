var comn, queryParams, ref, tableData, tip;

comn = {};

tip = null;

(function() {
  tip = function(o) {
    var base;
    return typeof (base = window.parent.comn).tip === "function" ? base.tip(o) : void 0;
  };
  return comn = {
    user: window.parent.user,
    cache: window.parent.cache,
    table: {
      "undefinedText": "--",
      "classes": "table-striped table-hover table",
      "pagination": true,
      "sidePagination": "server",
      "queryParams": "queryParams",
      "paginationFirstText": "第一页",
      "paginationPreText": "上一页",
      "paginationNextText": "下一页",
      "paginationLastText": "最后一页",
      "clickToSelect": true,
      "height": "450"
    },
    toUrl: function(o) {
      var base;
      if (o.url.indexOf(".html") > -1) {
        return typeof (base = window.parent).toUrl === "function" ? base.toUrl(o.url) : void 0;
      }
    },
	closeTab: function(){
		window.parent.closeTab();
	},
    addTab: function(o) {
      if (o.href) {
        return window.parent.menuItemClick.call(o);
      }
    },
	accAdd: function(arg1, arg2){ //js精度问题(加法) 
		var r1,r2,m; 
		try{
			r1=arg1.toString().split(".")[1].length
		}catch(e){r1=0} 
		try{
			r2=arg2.toString().split(".")[1].length
		}catch(e){r2=0} 
		m=Math.pow(10,Math.max(r1,r2)) 
		return (arg1*m+arg2*m)/m 
	},
    //数字金额千分位显示
    toThousands:function toThousands(num){
    if(num){
      var newNum=num.toString();
      if(newNum.indexOf(".")!= -1){
        return newNum.replace(/(\d)(?=(?:\d{3})+\.)/g,'$1,');
      }else{
        return newNum.replace(/(\d)(?=(?:\d{3})+$)/g,'$1,');
      }
    }
  },
	accSub: function(arg1, arg2){ //js精度问题(减法) 
		var r1,r2,m,n; 
		try{
			r1=arg1.toString().split(".")[1].length
		}catch(e){r1=0} 
		try{
			r2=arg2.toString().split(".")[1].length
		}catch(e){r2=0} 
		m=Math.pow(10,Math.max(r1,r2)); 
		//last modify by deeka 
		//动态控制精度长度 
		n=(r1>=r2)?r1:r2; 
		return ((arg1*m-arg2*m)/m).toFixed(n); 
	},
	accMul: function(arg1, arg2){  //js精度问题(乘法) 
		var m=0,s1=arg1.toString(),s2=arg2.toString(); 
		try{m+=s1.split(".")[1].length}catch(e){} 
		try{m+=s2.split(".")[1].length}catch(e){} 
		return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m); 
	},
	accDiv: function(arg1, arg2){  //js精度问题(除法) 
		var t1=0,t2=0,r1,r2; 
		try{t1=arg1.toString().split(".")[1].length}catch(e){} 
		try{t2=arg2.toString().split(".")[1].length}catch(e){} 
		with(Math){ 
			r1=Number(arg1.toString().replace(".","")) 
				r2=Number(arg2.toString().replace(".","")) 
				return (r1/r2)*pow(10,t2-t1); 
		} 
	},
    ajax: function(o) {
      var _this, mask;
      mask = layer.load();
      _this = this;
      if (o.url) {
        return $.ajax({
          url: interUrl.basic + o.url,
          type: o.type || "POST",
          dataType: "json",
          async: o.async || true,
          data: o.data || {},
          complete: function(jqXHR, textStatus) {
            return layer.close(mask);
          },
          success: function(data) {
            if(data.code===20001){
              if(typeof backerror =='function'){
                backerror(data);
              }
            }
            else if (data.code === 20000) {
              return tip({
                content: data.message || "<code>" + o.url + "</code><br /> 接口异常！！！"
              });
            } else if (data.code === 30000) {
              return window.parent.location.href = "../../index.html";
            } else {
              if (typeof data === "string") {
                data = JSON.parse(data);
              }
              return typeof o.success === "function" ? o.success(data) : void 0;
            }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            return typeof o.error === "function" ? o.error(textStatus) : void 0;
          }
        });
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
    },
	/*
	 *省市区三级联动,传递参数
	 *{type: "car", level: [{
	 *    el: $("#carBrandID")  渲染对象
	 *    key: code  选中值
	 *    target: $("#id") 中文赋值对象
	 *},{
	 *    el: $("#carMakeID")
	 *    key: code
	 *    target: $("#id")
	 *},{
	 *    el: $("#carModelID")
	 *    key: code
	 *}]}
	 */
    linkage: function(o) {
      var o0, o1, o2;
      if (o.type === "car") {
        o0 = o.level[0];
        o1 = o.level[1];
        o2 = o.level[2];
        if (o1.key) {
          o1.el.getCarList(o0.key, o1.key).unbind("change").change(function() {
            if (o1.target) {
              o1.target.val($(this).find("option:selected").text());
            }
            o2.el.val("");
            if (this.value) {
              return o2.el.getCarModel(this.value);
            }
          });
        }
        if (o2.key) {
          o2.el.getCarModel(o1.key, o2.key).unbind("change").change(function() {
            if (o1.target) {
              return o2.target.val($(this).find("option:selected").text());
            }
          });
        }
        return o0.el.getBrand(o0.key || "").unbind("change").change(function() {
          if (o0.target) {
            o0.target.val($(this).find("option:selected").text());
          }
          if (this.value) {
            o2.el.val("");
            return o1.el.getCarList(this.value).unbind("change").change(function() {
              if (o1.target) {
                o1.target.val($(this).find("option:selected").text());
              }
              if (this.value) {
                return o2.el.getCarModel(this.value).unbind("change").change(function() {
                  if (o2.target) {
                    return o2.target.val($(this).find("option:selected").text());
                  }
                });
              }
            });
          }
        });
      }
    }
  };
})();

$.fn.extend({

	getOrgList: function(orgId,ele) {
			comn.ajax({
			      url: interUrl.mockList || interUrl.purchase.orgOrStockList,
			      success: (function(_this) {
			        return function(res) {
			          var o;
			          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
			            var j, len, ref, results;
			            ref = res.data;
			            results = [];
			            if(ref.length==1){
			            	results.push("<option value='" + ref[0].id + "' selected='selected'>" + ref[0].name + "</option>");
			            	if(ele){
			            		$(ele).getStockList(ref[0].id);
			            	}
			            }else {
			            	for (j = 0, len = ref.length; j < len; j++) {
			  	              o = ref[j];
			  	              if(orgId && orgId == o.id){
			  	            	  results.push("<option value='" + o.id + "' selected='selected'>" + o.name + "</option>");
			  	              }else {
			  	            	  results.push("<option value='" + o.id + "'>" + o.name + "</option>");
			  	              }
			  	            }
						}
			            return results;
			          })()).join(""));//.val(value || "").change();
			        };
			      })(this)
			    });
	    return this;
	  },
      getOrgZ:function(orgId,disabled,fn){
        comn.ajax({
          url: interUrl.mockList || interUrl.customer.getOrgOrGroup,
          success: (function(_this) {
            return function(res) {
              var o;
               $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                    var j, len, ref, results;
                    ref = res.data;
                    results = [];
                    if(ref.length==1){
                      results.push("<option value='" + ref[0].id + "' selected='selected'>" + ref[0].name + "</option>");
                    }else {
                      for (j = 0, len = ref.length; j < len; j++) {
                        o = ref[j];
                        if(orgId && orgId == o.id){
                          results.push("<option value='" + o.id + "' selected='selected'>" + o.name + "</option>");
                        }else {
                          results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                        }
                      }
                    }
                    return results;
                  })()).join("")).attr('disabled',disabled);//.val(value || "").change();
              if(fn){
                fn();
              }
            };
          })(this)
        });
        return this;
      },
	  getStockList: function(companyId,stockId) {
			if(companyId){
				comn.ajax({
				      url: interUrl.mockList || interUrl.purchase.orgOrStockList,
				      data:{companyId:companyId},
				      success: (function(_this) {
				        return function(res) {
				          var o;
				          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
				            var j, len, ref, results;
				            ref = res.data;
				            results = [];
				            if(ref.length==1){
				            	results.push("<option value='" + ref[0].id + "' selected='selected'>" + ref[0].name + "</option>");
				            }else {
				            	for (j = 0, len = ref.length; j < len; j++) {
				  	              o = ref[j];
				  	              if(stockId && stockId == o.id){
				  	            	 results.push("<option value='" + o.id + "' selected='selected'>" + o.name + "</option>");
				  	              }else{
				  	            	 results.push("<option value='" + o.id + "'>" + o.name + "</option>");
				  	              }
				  	            }
							}
				            return results;
				          })()).join(""));//.val(value || "").change();
				        };
				      })(this)
				    });
			}
	  },
  nameValues: function() {
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
  },
  getProvince: function(value, callback) {
    comn.ajax({
      url: interUrl.common.getProvince,
      success: (function(_this) {
        return function(res) {
          var o;
          $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.areacode + "'>" + o.province + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
		  if (typeof(callback) == "function"){callback()};
        };
      })(this)
    });
    return this;
  },
  getCity: function(provinceCode, value) {
    if (provinceCode) {
      comn.ajax({
        url: interUrl.common.getCity,
        data: {
          areacode: provinceCode
        },
        success: (function(_this) {
          return function(res) {
            var o;
            return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
              var j, len, ref, results;
              ref = res.data;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                o = ref[j];
                results.push("<option value='" + o.areacode + "'>" + o.city + "</option>");
              }
              return results;
            })()).join("")).val(value || "");
          };
        })(this)
      });
    }
    return this;
  },
  getArea: function(cityCode, value) {
    if (cityCode) {
      comn.ajax({
        url: interUrl.common.getArea,
        data: {
          areacode: cityCode
        },
        success: (function(_this) {
          return function(res) {
            var o;
            return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
              var j, len, ref, results;
              ref = res.data;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                o = ref[j];
                results.push("<option value='" + o.areacode + "'>" + o.county + "</option>");
              }
              return results;
            })()).join("")).val(value || "");
          };
        })(this)
      });
    }
    return this;
  },
 getCarDealerInfo:function(groupId) {
  	comn.ajax({
  	    url: interUrl.escrowaccount.getCarDealerInfo,
  	    data: {
  	    	groupId: groupId
  	    },
  	    success: (function(_this) {
  	      return function(res) {
  	        var j, len, o, ref, str;
  	        str = "<option value=''>--请选择--</option>";
  	        var defaultValue = $(_this).attr('defaultValue');
  	        ref = res.data;
  	        if(res.data!=null){
  	        	for (j = 0, len = ref.length; j < len; j++) {
  	  	          o = ref[j];
  	  	          str += "<option value='" + o.id + "' "+(defaultValue==o.id?"selected":"")+">" + o.dealerName + "</option>";
  	  	        }
  	        }
  	        return $(_this).html(str);
  	      };
  	    })(this)
  	  });
  	  return this;
  },
  getOrg: function(value) {
    comn.ajax({
      url: interUrl.common.orgList,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data.module;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.name + "</option>");
            }
            return results;
          })()).join("")).val(value || "").change();
        };
      })(this)
    });
    return this;
  },
    getRoleOrg: function(value,menuCode,fn) {
        comn.ajax({
            url: interUrl.common.orgRoleList,
            data: {
                menuCode: menuCode
            },
            success: (function(_this) {
                return function(res) {
                    var o;
                    if(res.data.orgList.length == 1){
                        o = res.data.orgList[0];
                        return $(_this).html("<option selected='selected' value='" + o.id + "'>" + o.name + "</option>");
                    }
                    $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                        var j, len, ref, results;
                        ref = res.data.orgList;
                        results = [];
                        for (j = 0, len = ref.length; j < len; j++) {
                            o = ref[j];
                          results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                        }
                        return results;
                    })()).join(""));
                  if(value){
                    $(_this).val(value);
                  }
                  if(fn){
                    fn(res.data.isHeadCompany);
                  }
                };
            })(this)
        });
        return this;
    },
    getOrgByAuth: function(value,menuCode,fn) {
        comn.ajax({
            url: interUrl.common.orgListByAuth,
            data:{
                menuCode:menuCode
            },
            success: (function(_this) {
                return function(res) {
                    var o;
                    if(res.data.length == 1){
                        return $(_this).html("<option selected='selected' value='" + res.data[0].id + "'>" + res.data[0].name + "</option>");
                    }
                    $(_this).parent().attr("disabled",false);
                     $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "").change();
                    if(fn){
                       fn();
                    }
                };
            })(this)
        });
        return this;
    },
  getRuleList: function(value) {
    comn.ajax({
      url: interUrl.common.ruleList,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.name + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  /*
   1、省获取(改造)
   2、参数1: eg: { code: '选中的code值', value: '选中值的中文名称', callback: '获取数据后回调方法'}
   3、参数2: 标识查看/修改(true/false)
   */
  getProvinceC: function(c, flag) {
    if (flag) {
      $(this).html("<option value='" + c.code + "'>" + (c.value || '') + "</option>");
    } else {
      $(this).getProvince(c.code, c.callback);
    }
    return this;
  },

  /*
   1、市获取(改造)
   2、id 从上一级获取过来的ID值
   3、参数1: eg: { code: '选中的code值', value: '选中值的中文名称'}
   4、参数2: 标识查看/修改(true/false)
   */
  getCityC: function(id, c, flag) {
    if (flag) {
      $(this).html("<option value='" + c.code + "'>" + (c.value || '') + "</option>");
    } else {
      $(this).getCity(id, c.code);
    }
    return this;
  },

  /*
   1、区获取(改造)
   2、参数1: eg: { code: '选中的code值', value: '选中值的中文名称'}
   3、参数2: 标识查看/修改(true/false)
   */
  getAreaC: function(id, c, flag) {
    if (flag) {
      $(this).html("<option value='" + c.code + "'>" + (c.value || '') + "</option>");
    } else {
      $(this).getArea(id, c.code);
    }
    return this;
  },
  /*
  		1、参数1: 标识查看/修改(true/false)
   */
  getBrandC: function(flag, onSale) {
    if (flag == null) {
      flag = true;
    }
    if (!flag) {
      $(this).getBrand(onSale);
    }
    return this;
  },
    /*
     1、车系获取(改造)
     2、参数1: eg: { code: '选中的code值', value: '选中值的中文名称'}
     3、参数2: 标识查看/修改(true/false)
     4、businessTypeId贷款类型
     */ 
    getCarListC: function(id, c, flag,businessTypeId) {
      if (flag == null) {
        flag = true;
      }
      if (!flag) {
        $(this).getCarList(id, c.code,null,businessTypeId);
      }
      return this;
        //if (flag) {
        //    $(this).html("<option value='" + c.code + "'>" + (c.value || '') + "</option>");
        //} else {
        //    $(this).getCarList(id, c.code);
        //}
        //return this;
    },

    /*
     1、车型(改造)
     2、参数1: eg: { code: '选中的code值', value: '选中值的中文名称'}
     3、参数2: 标识查看/修改(true/false)
     */
    getCarModelC: function(id, c, flag) {
      if (flag == null) {
        flag = true;
      }
      if (!flag) {
        $(this).getCarModel(id, c.code);
      }
      return this;
        //if (flag) {
        //    $(this).html("<option value='" + c.code + "'>" + (c.value || '') + "</option>");
        //} else {
        //    $(this).getCarModel(id, c.code);
        //}
        //return this;
    },
  getBrand: function(onSale) {
    var codeItem;
    if ($(this).parent().find(".select-box").length) {
      return;
    }
    codeItem = function(arr) {
      var o;
      return ((function() {
        var j, len, results;
        results = [];
        for (j = 0, len = arr.length; j < len; j++) {
          o = arr[j];
          results.push("<li data-code='" + o.brandid + "'>" + o.brandname + "</li>");
        }
        return results;
      })()).join("");
    };
    comn.ajax({
      url: interUrl.common.brandList,
      data : {
    	  onSale : onSale 
      },
      success: (function(_this) {
        return function(res) {
          var $element, item, j, len, o, ref;
          item = {};
          $element = ["<ul class='select-box hidden'>", "<div class='select-box-list'></div>", "<div class='select-box-letter'>"];
          ref = res.data;
          for (j = 0, len = ref.length; j < len; j++) {
            o = ref[j];
            if (o.cars.length) {
              $element.push("<a href='javascript:;'>" + o.name + "</a>");
              item[o.name] = o.cars;
            }
          }
          $element.push("</div></ul>");

          /*
          				 *  事件绑定
           */
          $(_this).css("background-color", "#FFF").on("click", function() {
            $(".select-box").addClass("hidden");
             $(this).next(".select-box").removeClass("hidden").scrollTop(0);
          }).parent().append($element.join("")).on("click", ".select-box-letter a", function() {
            var htmlCode;
            htmlCode = codeItem(item[$(this).text()]);
             $(this).parents(".select-box").scrollTop(0).find(".select-box-list").html(htmlCode);
          }).find(".select-box-letter").each(function() {
             $(this).find("a").eq(0).trigger("click");
          });
           $("body").on("click", function(e) {
            var flag;
            _this = e.target;
            flag = !$(_this).closest(".input-tip").not(".select-box-letter").length;
            if (flag) {
               $(".select-box").addClass("hidden");
            }
          });
        };
      })(this)
    });
    return this;
  },
	getCarList: function(code, value, onSale,businessTypeId) {
    if (code) {
      comn.ajax({
        url: interUrl.common.carList,
        data: {
              brandcode: code,
              onSale : onSale,
              businessTypeId:businessTypeId
            },
        success: (function(_this) {
          return function(res) {
            //$(_this).val("--请选择--").next().remove();
            var $element, item, i, j, len, o, ref;
            item = {};
            $element = ["<ul class='select-box carListSelect hidden'>"];
            ref = res.data.manuInfo;
            for (i = 0, len = ref.length; i < len; i++) {
              o = ref[i];
              if (o.child.length) {
                $element.push("<li><p>"+ o.parent.brandname +"</p><ul class='select-box-list'>");
                for (j = 0; j < o.child.length; j++) {
                  var ochild = o.child[j];
                  $element.push("<li data-code='" + ochild.brandcode + "'>" + ochild.brandname + "</li>");
                }
                $element.push("</ul></li>");
              }
            }
            /*
             *  事件绑定0
             */
            $(_this).css("background-color", "#FFF").on("click", function() {
              $(".select-box").addClass("hidden");
               $(this).next(".select-box").removeClass("hidden").scrollTop(0);
            }).parent().append($element.join(""));

             $("body").on("click", function(e) {
              var flag;
              _this = e.target;
              flag = !$(_this).closest(".input-tip").not(".select-box-letter").length;
              if (flag) {
                 $(".select-box").addClass("hidden");
              }
            });
          };
        })(this)
      });
      //comn.ajax({
      //  url: interUrl.common.carList,
      //  data: {
      //    brandcode: code
      //  },
      //  success: (function(_this) {
      //    return function(res) {
      //      var o;
      //      return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
      //        var j, len, ref, results;
      //        results = [];
      //        ref = res.data.manuInfo;
      //        for(var i=0; i<ref.length;i++){
      //            var carListName = ref[i].parent.brandname;
      //      	  var carList = ref[i].child;
      //      	  for (j = 0, len = carList.length; j < len; j++) {
      //                o = carList[j];
      //                results.push("<option value='" + o.brandcode + "'>" + carListName +" "+ o.brandname + "</option>");
      //              }
      //        }
      //        return results;
      //      })()).join("")).val(value || "");
      //    };
      //  })(this)
      //});
    }
    return this;
  },
  getCarModel: function(code, value, onSale) {
	if (code) {
      comn.ajax({
        url: interUrl.common.carModels,
        data: {
          brandcode: code,
          onSale : onSale
        },
        success: (function(_this) {
          return function(res) {
            //$(_this).val("--请选择--").next().remove();
            var $element, item, i, j, len, o, ref;
            item = {};
            $element = ["<ul class='select-box carListSelect hidden'>"];
            ref = res.data;
            for (i = 0, len = ref.length; i < len; i++) {
              o = ref[i];
              if (o.cars.length) {
                $element.push("<li><p>"+ o.year +"</p><ul class='select-box-list'>");
                for (j = 0; j < o.cars.length; j++) {
                  var ochild = o.cars[j];
                  $element.push("<li data-code='" + ochild.carid + "' data-msrp='"+ ochild.msrp +"'>" + ochild.carname + "</li>");
                }
                $element.push("</ul></li>");
              }
            }
            /*
             *  事件绑定0
             */
            $(_this).css("background-color", "#FFF").on("click", function() {
              $(".select-box").addClass("hidden");
               $(this).next(".select-box").removeClass("hidden").scrollTop(0);
            }).parent().append($element.join(""));
             $("body").on("click", function(e) {
              var flag;
              _this = e.target;
              flag = !$(_this).closest(".input-tip").not(".select-box-letter").length;
              if (flag) {
                 $(".select-box").addClass("hidden");
              }
            });
          };
        })(this)
      });
      //comn.ajax({
      //  url: interUrl.common.carModels,
      //  data: {
      //    brandcode: code
      //  },
      //  success: (function(_this) {
      //    return function(res) {
      //      var o;
      //      return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
      //        var j, len, ref, results;
      //        ref = res.data;
      //        results = [];
      //        for (j = 0, len = ref.length; j < len; j++) {
      //          o = ref[j];
      //          for(var o in ref[j].cars)
      //          results.push("<option value='" + ref[j].cars[o].carid + "' data-msrp='"+ref[j].cars[o].msrp+"'>" + ref[j].cars[o].carname + "</option>");
      //        }
      //        return results;
      //      })()).join("")).val(value || "");
      //    };
      //  })(this)
      //});
    }
    return this;
  },
  getInsurance: function(value, callback) {
    comn.ajax({
      url: interUrl.common.insuranceList,
      success: (function(_this) {
        return function(res) {
          var o;
          $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.insuranceCompanyName + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
          if(typeof(callback) == 'function'){callback();}
        };
      })(this)
    });
    return this;
  },
  getLoad: function(callback) {
    if (!$(this).hasClass("loaded")) {
      $(this).load($(this).data("url") + ("?t=" + (new Date().getTime())), (function(_this) {
        return function() {
          if (typeof callback === "function") {
            callback();
          }
          return $(_this).addClass("loaded");
        };
      })(this));
    }
    return this;
  },
  getBank: function(value) {
    comn.ajax({
      url: interUrl.gr.bankList,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  getBanks: function(value) {
    comn.ajax({
      url: 'deliver/bankList',
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                var j, len, ref, results;
                ref = res.data;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                  o = ref[j];
                  results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
                }
                return results;
              })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  getCarDealer: function(value) {
    comn.ajax({
      url: interUrl.common.loanCarList,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.dealerName + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  getCompany_1: function() {
	    comn.ajax({
	      url: interUrl.common.getCompany,
	      success: (function(_this) {
	        return function(res) {
	          var o;
	          ref = res.data;
	          o = ref[0];
	        $(_this).html("<option value='" + o.id + "' >" + o.name + "</option>");
	        };
	      })(this)
	    });
	    return this;
	  },
  getCompany: function(value) {
    comn.ajax({
      url: interUrl.common.getCompany,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              results.push("<option value='" + o.id + "'>" + o.name + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  getDealerGroup: function(value) {
    comn.ajax({
      url: interUrl.carDealer.getDealerGroup,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                var j, len, ref, results;
                ref = res.data;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                  o = ref[j];
                  results.push("<option value='" + o.id + "'>" + o.groupName + "</option>");
                }
                return results;
              })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  //获取费用类别
  getFeeCategoryCode: function(value, feeApply) {
	var url = interUrl.feeManage.feeCategoryList;
 	if(feeApply == "feeRecycle"){
		url = interUrl.feeManage.recycleFeeCategoryList;
	}
    comn.ajax({
      url: url,
      success: (function(_this) {
        return function(res) {
          var o;
          return $(_this).html(  ((function() {
            var j, len, ref, results;
            ref = res.data;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              o = ref[j];
              if (feeApply == "feeApply" && o.codeName == "垫款") {
                continue;
              }
              results.push("<option data-id='" + o.id + "' value='" + o.codeId + "'>" + o.codeName + "</option>");
            }
            return results;
          })()).join("")).val(value || "");
        };
      })(this)
    });
    return this;
  },
  //获取费用名称
  getFeeCode: function(codeLibraryFeedTypeId, value) {
    if (codeLibraryFeedTypeId) {
      comn.ajax({
        url: interUrl.feeManage.feeList,
        data: {
          codeLibraryFeedTypeId: codeLibraryFeedTypeId
        },
        success: (function(_this) {
          return function(res) {
            var o;
            return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
              var j, len, ref, results;
              ref = res.data;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                o = ref[j];
                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
              }
              return results;
            })()).join("")).val(value || "");
          };
        })(this)
      });
    }
    return this;
  },
    //获取费用原因
    getFeeReason: function(feeNameCode,feeCategoryCode, value) {
        if (feeNameCode && feeCategoryCode) {
            comn.ajax({
                url: interUrl.feeManage.feeReasonList,
                data: {
                    feedNameCode: feeNameCode,
                    feeCategoryCode:feeCategoryCode
                },
                success: (function(_this) {
                    return function(res) {
                        var o;
                      var j, len, ref, results;
                      ref = res.data;
                      results = [];
                      for (j = 0, len = ref.length; j < len; j++) {
                        o = ref[j];
                        results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                      }
                      if(len>0){
                        $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                              return results;
                            })()).join("")).val(value || "");
                        if($(_this).prev('input').length>0){
                          $(_this).removeClass('hide');
                          $(_this).prev().addClass('hide');
                        }
                      }else{
                        $(_this).html("<option value=''>--请选择--</option>");
                        if($(_this).prev('input').length>0){
                          $(_this).addClass('hide');
                          $(_this).prev().removeClass('hide');
                        }
                      }

                    };
                })(this)
            });
        }
        return this;
    },
  getGroup_1: function() {
      comn.ajax({
        url: interUrl.common.getGroupNew,
        success: (function(_this) {
          return function(res) {
        	var j, len, ref, results,o;
            ref = res.data;
            len = ref.length;
            if(len==1){
            	  o = ref[0];
      	        $(_this).html("<option value='" + o.id + "' >" + o.name + "</option>");
            }else{
            	return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
                    results = [];
                    for (j = 0; j < len; j++) {
                      o = ref[j];
                      results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                    }
                    return results;
                  })()).join(""));
            }
          };
        })(this)
      });
    return this;
  },
  getGroup: function(companyId, value) {
    if (companyId) {
      comn.ajax({
        url: interUrl.common.getGroup,
        data: {
          companyId: companyId
        },
        success: (function(_this) {
          return function(res) {
            var o;
            return $(_this).html("<option value=''>--请选择--</option>" + ((function() {
              var j, len, ref, results;
              ref = res.data;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                o = ref[j];
                results.push("<option value='" + o.id + "'>" + o.name + "</option>");
              }
              return results;
            })()).join("")).val(value || "").change();
          };
        })(this)
      });
    }
    return this;
  },
  
  getGroup_comp: function(companyId, value) {
    if (companyId) {
      comn.ajax({
        url: interUrl.common.getGroup,
        data: {
          companyId: companyId
        },
        success: (function(_this) {
        	
          return function(res) {
            var o;
            return $(_this).html("<option value='-2'>--所有业务组--</option>" + ((function() {
              var j, len, ref, results;
              ref = res.data;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                o = ref[j];
                results.push("<option value='" + o.id + "'>" + o.name + "</option>");
              }
              return results;
            })()).join("")).val(value || "").change();
          };
        })(this)
      });
    }
    return this;
  },
  //获取token值校验重复提交
  getPaymentToken:function(){
    var _this=this;
    comn.ajax({
      url:interUrl.myTask.getPaymentToken,
      success:function(res){
        $(_this).val(res.data);
      }
    })
  },
  flexBtnInit: function(value){//flexBtn初始化，value取值0或1，0代表展开状态，1代表折叠状态
      value=value?value:0;
      var pbody=$(this).parents('.collapseFlex').find('.panel-body');
      $(this).off('click').click(function(){
      var status=$(this).attr('data-status');
      if(status=='0'){
      pbody.slideUp();
      $(this).attr('data-status',1).css('transform','rotate(0)');
      }else{
      pbody.slideDown();
      $(this).attr('data-status',0).css('transform','rotate(90deg)');
      }
      });
      if(value==0){
      pbody.show();
      $(this).css('transform','rotate(90deg)');
      }else{
      pbody.hide();
      $(this).css('transform','rotate(0)');
      }
      }
});
comn.callbackKeysrt=function(key, desc){//对象数组升降序函数
  return function(a, b) {
    if(!a[key]){
      a[key]=0;
    }
    if(!b[key]){
      b[key]=0;
    }
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
  }
}
$(function() {
  $(document).on("click", ".select-box-list li", function(){
    var $el = $(this).parents(".select-box").addClass("hidden").prev("input");
    var nameId = $el.attr("id");
    if (nameId === "getCarModel" || nameId === "getCarModel1") {
      $el.attr("data-msrp", $(this).attr("data-msrp"))
    }
    nameId === "getBrand1" ? $el.attr("data-id", $(this).attr("data-id")) : "";
    $el.val($(this).html()).attr("data-code", $(this).attr("data-code")).trigger("change");
  });
  $(document).on("click", ".select-box p", function() {
    $(this).parents(".select-box").animate({scrollTop: '0px'}, 300);
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
  });
  $(window).resize(function() {
    var base;
    return typeof (base = $("table")).bootstrapTable === "function" ? base.bootstrapTable('resetView') : void 0;
  });
  $("body").on("click", "a", function(e) {
    var ref;
    if (((ref = $(this).href) != null ? ref.index(".html") : void 0) > -1) {
      e.preventDefault();
      return comn.toUrl({
        "url": $(this).href
      });
    }
  }).on("focus", ".date", function() {
    //if(!$(this).is(":disabled")){ $(this).attr("readonly", true).css("background-color", "#FFF"); }
    var base;
    return typeof (base = $(this)).datetimepicker === "function" ? base.datetimepicker({
      format: "yyyy-mm-dd",
      pickerPosition: "bottom-right",
      language: "zh-CN",
      minView: 2,
      todayHighlight: true,
      autoclose: true,
      todayBtn: true,
      show: true
    }).on('changeDate',function(e){if(typeof (changeDateFun)=='function'){changeDateFun(e)}}) : void 0;
  }).on("show.bs.tab", "[data-toggle='tab']", function(e) {
    return $($(this).attr("href")).find("[data-url]").each(function(){ $(this).getLoad(); });
  }).on("click", ".btn[modal='reset']", function() {
    var ref;
    return (ref = $(this).parents("form")[0]) != null ? ref.reset() : void 0;
  }).on("keyup", ".number, .mobile", function(){
	  //if(!/^\d*(?:\.\d{0,2})?$/.test(this.value)){
		  //this.value = ''; 
	  //}
	  //this.value = this.value.replace(/\D+.]/g,''); 
  });
  $(".modal").on("show.bs.modal", function() {
    if ($(this).find("form").length) {
      return $(this).find("form")[0].reset();
    }
  });
  return $("#btn-search").click(function() {
    return $("#table").bootstrapTable('refresh', {url: "..."});
  });
});

if (typeof Mock !== "undefined" && Mock !== null) {
  Mock.mock(/list.json/, {
    'totalItem': 500,
    'data|40': [
      {
        'id': '@INT(1000, 60000)',
        'customerId': '@INT(1000, 60000)',
        'cardNo': '@INT(1000000000000000, 6000000000000000)',
        'loanAmount': '@INT(1000, 60000)',
        'loanTerm|1': [1, 2, 3],
        'customerName': '@CHINESENAME',
        'cardId': '@INT(1,100)',
        'projcetName|1': ['车贷项目申请', '某某项目申请'],
        'mobile': '@INT(600000)',
        'proceing|1': ['调度岗', '集团估计师', '录入内勤', '审核内勤'],
        'handleP': '@NAME',
        'proced|1': ['银行征信', '公安征信', '签单分配', '签单调查'],
        'orgname|1': ['杭州分公司', '湖北分公司'],
        'faqiren': '@CHINESENAME',
        'dbe': '@FLOAT(1,2)',
        'modifyTime': Random.datetime('yyyy-MM-dd A HH:mm:ss')
      }
    ]
  });
}

if ((ref = $.validator) != null) {
  ref.setDefaults({
    highlight: function(e) {
      return $(e).closest(".input-tip").removeClass("has-success").addClass("has-error");
    },
    success: function(e, r) {
      return $(r).closest(".input-tip").removeClass("has-error").addClass("has-success");
    },
    errorPlacement: function(e, r) {
	  if(r.parent('.input-group').length) {
		  e.insertAfter(r.parent());
	  } else {
		  if (e.text()) {
			return e.appendTo((r.is(":radio") || r.is(":checkbox") ? r.parent().parent().parent() : r.parent()));
		  }
	  }
    }
  });
}

tableData = function(params, data, url, callback) {
  var p;
  p = params.data;
  if (url) {
    return comn.ajax({
      url: url,
      data: $.extend(data, p),
      success: function(res) {
          params.success({
          'total': res.totalItem,
          'rows': res.data
        });
        params.complete();
        return typeof callback === "function" ? callback(res) : void 0;
      }
    });
  }
};

queryParams = function(params) {
  return {
    search: params.search,
    page: (params.limit + params.offset) / params.limit,
    pageSize: params.limit
  };
};

$(".gray-bg").removeClass("styleCR");

function gsh_slice10(v) {
    var len = Math.ceil(v.length/10);
    if(len >1){
        var str = '';
        for(var i=0; i<len; i++){
            str += v.slice(i*10,10*(i+1))+'<br>';
        }
        return str;
    }else {
        return v;
    }
}
//动态列格式化显示数据
function dynamicFormatter(v,row,index){
    if(v){
        if(v.isChecked){
            return '已发';
        }else if(v.isChecked==false)
        return '待发';
        else
        	 return '未配置';
    }

}
function dynamicFormatter_list(v,row,index){
  if(v.isChecked){
    return "<span>已发</span><img src='../../../images/tip.png' data-html='true' style='margin:0 0 0 3px;cursor: pointer' data-container='body' data-trigger='hover' id='" + row['id']+"' value='"+v.value+"' onmouseover='showConclusion2(this)' data-toggle='popover' data-placement='bottom' data-content=''>";
  }else if(v.isChecked==false)
    return '待发';
  else
    return '未配置';
}
function dynamicFormatter1(v,row,index){
		if(v.checked){
			return "<img src='../../../images/icon_right.png'><input type='checkbox' class='hide' checked='checked' value="+v.value+">"
		}
		return "<input type='checkbox' class='hide' value="+v.value+">"
	
}
//////动态列表头
//function initdynamicTitle(id,url) {
//    $.ajax({
//        url:interUrl.basic+ url,
//        async:false,
//        success: function (res) {
//            if(res.code === 10000 && res.data != null){
//                var files = res.data;
//                //初始化列
//                var thStr = '';
//                if(id=='#deli'){
//                  for(var k in files){
//
//                    if(k=='file64'){
//                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'<img src="../../../images/tip.png" data-html="true" style="float:right;margin-top:3px;cursor: pointer" data-container="body" data-trigger="hover" onmouseover="showConclusion2(this)" data-toggle="popover" data-placement="top" data-content="抵押资料（已用印）：<br>委托书、备用申请表、主合同"></th>';
//                    }else if(k=='file1'){
//                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'<img src="../../../images/tip.png" data-html="true" style="float:right;margin-top:3px;cursor: pointer" data-container="body" data-trigger="hover" onmouseover="showConclusion2(this)" data-toggle="popover" data-placement="top" data-content="全套资料"></th>';
//                    }
//                    //else if(k=='file2'){
//                    //  thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'</th>';
//                    //}
//                  }
//                }else{
//                  thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">抵押状态</th>'
//                  for(var k in files){
//                    if(k=='file64'){
//                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'</th>';
//                    }else if(k=='file1'){
//                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'</th>';
//                    }
//                    //else if(k=='file2'){
//                    //  thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter">'+files[k]+'</th>';
//                    //}
//                  }
//                }
//
//                $(id).after(thStr);
//            }
//        }
//    });
//}
////动态列表头
function initdynamicTitle(id,url) {
  $.ajax({
    url:interUrl.basic+ url,
    async:false,
    success: function (res) {
      if(res.code === 10000 && res.data != null){
        var files = res.data;
        //初始化列
        var thStr = '';
        if(id=='#deli'){
          thStr += '<th data-field="guarantyStatus" data-formatter="dynamicGuarantyStatus">抵押状态</th>';
          thStr += '<th data-field="file64" data-width="100px" data-formatter="dynamicFormatter_list">抵押资料<img src="../../../images/tip.png" data-html="true" style="float:right;margin-top:3px;cursor: pointer" data-container="body" data-trigger="hover" onmouseover="showConclusion1(this)" data-toggle="popover" data-placement="top" data-content="抵押资料（已用印）：<br>委托书、备案申请表、主合同"></th>';
          thStr += '<th data-field="file1" data-width="100px" data-formatter="dynamicFormatter_list">合同资料<img src="../../../images/tip.png" data-html="true" style="float:right;margin-top:3px;cursor: pointer" data-container="body" data-trigger="hover" onmouseover="showConclusion1(this)" data-toggle="popover" data-placement="top" data-content="全套资料"></th>';
        }else{
          thStr += '<th data-field="guarantyStatus" data-formatter="dynamicGuarantyStatus">抵押状态</th>';
          thStr += '<th data-field="file64" data-formatter="dynamicFormatter_list">抵押资料</th>';
          thStr += '<th data-field="file1" data-formatter="dynamicFormatter_list">合同资料</th>';
        }
        $(id).after(thStr);
      }
    }
  })
}
var dynamicGuarantyStatus=  function (value, row, index) {
  if(value){
    if(value==1){
      return '未抵押';
    }else{
      return "已抵押";
    }
  }else{
    return "已抵押";
  }
}

var fileListStatus=function(value, row, index) {
  if(value){
    if(value.length==0) return  '未发'
    return value;
  }
};
function showConclusion2(item,adr){//传adr需要拼接发往地址
  function formart(time){
    return "<span>"+time+"<br/></span>"
  }
  $.ajax({
    url: "/deliver/send/history",
    type: 'POST',
    data: {
      deliverId:item.id,
      value:item.getAttribute('value')
    },
    success: function(res) {
      //var res={"code":10000,"data":[{"orgName":"办事处测试","sendTime":"2018-07-11 00:00:00"},{"orgName":"办事处测试","sendTime":"2018-07-10 14:29:30"},{"orgName":"办事处测试","sendTime":"2018-07-10 00:00:00"},{"orgName":"办事处测试","sendTime":"2018-07-10 14:35:32"},{"orgName":"办事处测试","sendTime":"2018-07-10 14:41:35"},{"orgName":"办事处测试","sendTime":"2018-07-10 14:44:01"},{"orgName":"合肥办事处","sendTime":"2018-07-10 00:00:00"},{"orgName":"合肥办事处","sendTime":"2018-07-10 18:19:05"},{"orgName":"合肥办事处","sendTime":"2018-07-10 00:00:00"},{"orgName":"办事处测试","sendTime":"2018-07-10 00:00:00"}]}
      if(res.data.length>0){
        var timeArr=[]
        var time='';
        res.data.forEach(function(m,i){
          if(m != null && m.sendTime !=undefined )
          {
            //if(adr){
              var item= m.sendTime.slice(0,10)+'发往'+ m.orgName;
            //}else{
            //  var item= m.sendTime.slice(0,10);
            //}

        	  time+=formart(item);
          }
        })
        item.setAttribute('data-content','<div>已发记录：<br/>'+time+'</div>')
      }else{
        item.setAttribute('data-content','<div>已发记录：<br/>无</div>')
      }
    }
  });
}
function showConclusion1(item){
  $("[data-toggle='popover']").popover();
}
function showConclusionZ(item){
  $(item).popover('show');
}
function addDynamicColumn(id,url) {
	$.ajax({
		url:interUrl.basic+ url,
		async:false,
		success: function (res) {
			if(res.code === 10000 && res.data != null){
				var files = res.data;
				//初始化列
				var thStr = '';
				for(var k in files){
					if(k.indexOf('file') === 0){
						thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter1">'+files[k]+'</th>';
					}
				}
				$(id).after(thStr);
			}
		}
	});
}




//新增
//动态列格式化显示数据
//function dynamicFormatter_add(v,row,index){
//	if(v){
//		if(v.isChecked){
//			if(v.title=="办事处资料")
//				return "<span class='hide loan'>已发</span>";
//			else if(v.title=="合同资料"|v.title=="抵押资料")
//				return "<span class='hide other'>已发</span>";
//			else
//				return "已发"
//		}
//		if(v.title=="办事处资料")
//			return "<input type='checkbox'  checked='checked'  class='hide loan' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
//			else if(v.title=="合同资料"|v.title=="抵押资料")
//				return "<input type='checkbox'  checked='checked'  class='hide other' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
//				else
//					return "<input type='checkbox' checked='checked' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
//	}
//
//}
function dynamicFormatter_add(v,row,index){
    if(v){
        if(v.isChecked){
//            return "<input type='checkbox' data-ischeck="+v.isChecked+" class='hide other' data-documentDeliverId='" + row['id']+"' value="+v.value+">";
        	if(v.title=="办事处资料")
        	return "<input type='checkbox' class='loan' data-documentDeliverId='" + row['id']+"' value="+v.value+"  style='position:relative;top:3px;right:2px;'><span class='loan'>已发</span><img src='../../../images/tip.png' data-html='true' style='margin:0 0 0 3px;cursor: pointer' data-container='body' data-trigger='hover' id='" + row['id']+"' value='"+v.value+"' onmouseover='showConclusion2(this)' data-toggle='popover' data-placement='bottom' data-content=''>";
        	else if(v.title=="合同资料")
        		return "<input type='checkbox' data-documentDeliverId='" + row['id']+"' value="+v.value+" class='loan aaa' style='position:relative;top:3px;right:2px;'><span class='loan'>已发</span><img src='../../../images/tip.png' data-html='true' style='margin:0 0 0 3px;cursor: pointer' data-container='body' data-trigger='hover' value='"+v.value+"' id='" + row['id']+"' onmouseover='showConclusion2(this)' data-toggle='popover' data-placement='bottom' data-content=''>";
            else if(v.title=="抵押资料")
                return "<input type='checkbox' data-documentDeliverId='" + row['id']+"' value="+v.value+" class='loan bbb' style='position:relative;top:3px;right:2px;'><span class='loan'>已发</span><img src='../../../images/tip.png' data-html='true' style='margin:0 0 0 3px;cursor: pointer' data-container='body' data-trigger='hover' value='"+v.value+"' id='" + row['id']+"' onmouseover='showConclusion2(this)' data-toggle='popover' data-placement='bottom' data-content=''>";
        	else
        		return "<input type='checkbox'  style='position:relative;top:3px;right:2px;'><span class='other'>已发</span><img src='../../../images/tip.png' data-html='true' style='margin:0 0 0 3px;cursor: pointer' data-container='body' data-trigger='hover' value='"+v.value+"' onmouseover='showConclusion2(this)' data-toggle='popover' id='" + row['id']+"' data-placement='top' data-content=''>"
        }else if(v.isChecked==undefined){
        	return "未配置"
        }
        if(v.title=="办事处资料"){
            return "<input type='checkbox'   class='loan' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
        }else if(v.title=="合同资料"){
            return "<input type='checkbox' class='loan aaa' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
        }else if(v.title=="抵押资料"){
            return "<input type='checkbox' class='loan bbb' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
        }else{
            return "<input type='checkbox' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
        }
    }
}
//动态列格式化显示数据
function dynamicFormatter_edit(v,row,index){
	if(v){
		if(v.isChecked){
			if(v.title=="办事处资料")return "<input type='checkbox'  checked='checked'  class='loan' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
			if(v.title=="合同资料"|v.title=="抵押资料")return "<input type='checkbox'  checked='checked'  class='other' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
			return "<input type='checkbox' checked='checked' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
		}
		if(v.title=="办事处资料")
			return "<input type='checkbox'  data-ischeck="+v.isChecked+"  class='loan' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
			else if(v.title=="合同资料")
				return "<input type='checkbox'  data-ischeck="+v.isChecked+"  class='other' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
            else if(v.title=="抵押资料")
                return "<input type='checkbox'  data-ischeck="+v.isChecked+"  class='other' data-documentDeliverId='" + row['id']+"' value="+v.value+">"
				else
					return "<input type='checkbox'  data-documentDeliverId='" + row['id']+"' value="+v.value+">"
	}
}
//动态列表头
function initdynamicTitle_add(id,url) {
    $.ajax({
        url:interUrl.basic+ url,
        async:false,
        success: function (res) {
            if(res.code === 10000 && res.data != null){
                var files = res.data;
                //初始化列
                var thStr = '';
                for(var k in files){
                    if(k=='file64'){
                        thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allSecond" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                    }else if(k=='file32'){//办事处
                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allFirst" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                    }else if(k=='file1'){
                      thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allFirst" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                    }
                }
                $(id).after(thStr);
            }
        }
    });
}
//动态列表头
function initdynamicTitle_edit(id,url) {
	$.ajax({
		url:interUrl.basic+ url,
		async:false,
		success: function (res) {
			if(res.code === 10000 && res.data != null){
				var files = res.data;
				//初始化列
				var thStr = '';
				for(var k in files){
                  if(k=='file64'){
                    thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allSecond" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                  }else if(k=='file32'){//办事处
                    thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allFirst" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                  }else if(k=='file1'){
                    thStr += '<th data-field="'+k+'" data-formatter="dynamicFormatter_add"><input id="select_allFirst" type="checkbox" style="position:relative;top:3px;right:2px;"/>'+files[k]+'</th>';
                  }
				}
				$(id).after(thStr);
			}
		}
	});
}
//提交流程
//参数说明:_url1=预提交接口 _url2=准提交接口 _url3=提交结束跳转页面路径  _data=请求参数
function flowSubmit(_url1,_url2,_url3,_data){
  comn.ajax({
      url: _url1,
      data: _data,
      success: function (res0) {
          var nextNodeUserName=res0.data.userTasks[0].userName;
          var nextNodeUserId=res0.data.userTasks[0].userId;
          var nodeCode={nodeCode:res0.data.nextFlowNodeCode};
          var p3={nextNodeUserName:nextNodeUserName,nextNodeUserId:nextNodeUserId};
          if(res0.data.userTasks.length>1){
              table_sign = function (params) {
                  var p=params.data;
                  params.success({'total':res0.data.userTasks.length, rows: res0.data.userTasks});
                  params.complete();
              };
              tableEvent_sign = {
                  "click .role": function (e, a, item, index) {
                      p2 = {nextNodeUserName: item.userName, nextNodeUserId: a}
                  }
              };

              handle_sign = function (value, row, index) {
                  return ["<input type='radio' name='userId' class='role' value='" + value + "'/>"].join("");
              };
              $("#nextNode").html(res0.data.nextFlowNodeName);
              $("#table_sign").bootstrapTable();
              $("#table_sign").bootstrapTable('load', res0.data.userTasks);
              $("#signModal").modal("show");
              setTimeout("$('#table_sign').find('tr').eq(1).find('[name=\"userId\"]').prop('checked','checked')",500);
              p2=p3;
              $("#select-sign-btn").unbind("click").click(function(){
                  comn.ajax({
                      url: _url2,
                      data: $.extend(_data,p2),
                      success: function (res2) {
                          $("#signModal").modal("hide");
                          tip({content:res2.message});
                          comn.closeTab();
                      }
                  })
              })
          }else{
              comn.ajax({
                  url: _url2,
                  data: $.extend(_data,p3),
                  success: function (res4) {
                      tip({content:res4.message});
                      comn.closeTab();
                  }
              })
          }
      }
  })
}

var checkboxeFirsts,checkboxeSeconds, firstCheckBox,secondCheckBox;
function firstCheck(){  //第一列
  var get = $("tbody .aaa");
  firstCheckBox=[]
  for (i = 0 ; i < get.length; i++) {
    if (get[i].checked) {
      firstCheckBox.push(get[i].value);
    }
  }
}
function secondCheck(){  //第一列
  var get = $("tbody .bbb");
  secondCheckBox=[]
  for (i = 0 ; i < get.length; i++) {
    if (get[i].checked) {
      secondCheckBox.push(get[i].value);
    }
  }
}
//全选，全不选
$(document).on('click','#select_allFirst',function(){
  checkboxeFirsts=$(this).parents('.fixed-table-container').find('#table1').find('.aaa')
  for (var i = 0; i < checkboxeFirsts.length; i++) {
    var checkbox = checkboxeFirsts[i];
    if (!$(this).get(0).checked) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  }
})

$(document).on('click','#select_allSecond',function(){
  checkboxeSeconds=$(this).parents('.fixed-table-container').find('#table1').find('.bbb')
  for (var i = 0; i < checkboxeSeconds.length; i++) {
    var checkbox = checkboxeSeconds[i];
    if (!$(this).get(0).checked) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  }
});

//zch收发件的新增公共部分
//粘贴
function addMark(e) {
  var batchCard;
  e.preventDefault();
  if (window.clipboardData && window.clipboardData.getData) { // IE
    batchCard = window.clipboardData.getData('Text');
  } else {
    batchCard = e.clipboardData.getData('text/plain');//e.clipboardData.getData('text/plain');
  }

  batchCard = batchCard.trim().replace(/\s+/ig, ' ');
  var arr = batchCard.split(' ');
  $("#cardNo").val("");
  var html = '';
  for (var i = 0; i < arr.length && i < 100; i++) {
    if (/[\u4e00-\u9fa5]/.test(batchCard) || /[a-zA-Z]/.test(batchCard) || /[0-9]/.test(batchCard)) {
      html += '<div  class="batchCard-item" style="padding: 0px 10px;border-radius:3px;margin: 5px;cursor: pointer;border:1px solid #d2d2d2"><span class="num">' + arr[i] + '</span>&nbsp;&nbsp;<span class="remove"><img style="margin-bottom:3px" src="../../../images/close.png"/></span></div>'
    }
  }
  $('.batchCard-allItem').append(html);
  $('.batchCardNo').css('height', '52px');
  $('#cardNo').css('height', '60%');
  return false;

};
//备注格式化
function remarkFormat(value, row, index){
  if(value){
    //return '<div style="max-width: 170px;word-break: break-all;margin: auto;text-align: justify">'+value+'</div>';
    return '<div style="white-space: nowrap;overflow-x: hidden;text-overflow: ellipsis;width:150px" data-container="body" data-trigger="hover"  onmouseover="showConclusionZ(this)" data-toggle="popover" data-placement="bottom" data-content="'+value+'" >'+value+'</div>'
  }
}
var contentFormat=function(value,row,index){
  if(value){
    return '<p class="ellipsis contentWidth" style="cursor:pointer" data-container="body" data-trigger="hover" onmouseover="showConclusion1(this)" data-toggle="popover" data-placement="bottom" data-content="'+value+'">'+value+'</p>'
  }
};
//备注提交部分
(function(){
  $('#sub_editor').click(function(){
    //将数据保存在table数据中
    var index=$('#remark').data('row');
    console.log(index);
    var content=$('[name="remark"]').val();
    if(content||_data[index].sendRemark){
      _data[index].sendRemark=content;
      $("#table1").bootstrapTable('load',_data);
      $(window).resize();
    }
    $('#remark').modal('hide');
  })
})();

//数组是否含有某个值
function is_inArray(item,arr){
  for(var i=0;i<arr.length;i++){
    if(item==arr[i])
      break;
  }
  if(i>=arr.length||arr.length<=0){
    i=-1;
  }
  return i;
}
//获取对象长度
var objectLength=function(obj){
  var arr=Object.keys(obj);
  return arr.length;
}
var yuan=function(value,index,row){
  if(value){
    return Number(value).toFixed(2);
  }
}
var slice10=function(value,index,row){
  if(value){
    return String(value).slice(0,10);
  }
}
var rate=function(value,index,row){
    if(!isNaN(Number(value))){
      value=Number(value*100).toFixed(2);
      return value+'%';
    }else{
      return '--'
    }
}
var wanCH=function(value){
  if(value){
    value=(value/10000).toFixed(2)+' 万元';
    return value;
  }
}
var nowrap=function(){
  return {css:{"white-space":"nowrap"}}

}
var secondLine=function(value){
  function sliceSpace(value,n,reg){
    var end=n+1;
    var single=value.slice(n,end);
    if(reg.test(single)){
      sliceSpace(value,--n,reg);
    }else{
      m=end;
    }
  }
  if(value){
    var reg=/[a-zA-Z\.0-9]/;
    var standN=20;
    var m=standN+1;
    value=value+'';
    var len=value.length
    if(len>standN){
      var nstar=len/2>standN?parseInt(len/2):standN;
      sliceSpace(value,nstar,reg);
      return value.slice(0,m)+'<br>'+value.slice(m);
    }
  }
}
//限制输入长度的时间绑定（含中文）
function limitInput(dom,fn){
    var doing = false;
    var doSomething = function (e) {
      fn();
    }
  dom.addEventListener('compositionstart', function (e) {
      doing = true;
    }, false);
  dom.addEventListener('input', function (e) {
      if (!doing) {
        doSomething();
      }
    }, false);

  dom.addEventListener('compositionend', function (e) {
      doing = false;
      fn();
    }, false);

}
