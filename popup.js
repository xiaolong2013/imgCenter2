
(function($) {
	//给页面装载CSS样式
	     var LG = 'linear-gradient(top, #fafafa, #eee)', CSS = '<style type="text/css">' +
		'#operationBlank{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}' +
		//'.wrap_out{border: 5px solid #ccc;border: 5px solid rgba(204, 204, 204, 0.8);-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;background: #FFF;position:absolute;z-index:2000;left:-9999px;}' +
		'.wrap_out{border: 5px solid #dcdcdc;background: #FFF;position:absolute;z-index:2000;left:-9999px;}' +
		//'.wrap_in{background:#fafafa;border:1px solid #ccc;padding:0px 10px;}' +
		'.wrap_in{background:#fff;padding:0px;}' +
		//'.wrap_bar{border-bottom:1px solid #ddd;background:#FFF;background:-moz-'+ LG +';background:-o-'+ LG +';background:-webkit-'+ LG +';background:'+ LG +';}' +
		'.wrap_bar{background:#f5f5f5;}' +	'.wrap_title{height:40px;line-height:40px;padding-left:0px;padding-top:0px;_padding-top:0px;padding-bottom:0px;margin:0;font-size: 18px;font-family: "微软雅黑","黑体";color: #333;text-indent: 12px;font-weight:normal;border:1px solid #c7c7c7;border-bottom:0;}' +
		'.wrap_close{position:relative;}' +
		'.wrap_close a{float: right;margin: -30px 8px 0 0;display: inline-block;width: 19px;height: 18px;text-indent: -9999em;overflow: hidden;background: url("http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/contor_icon.png") no-repeat -21px 0px;}' +
		'.wrap_close a:hover{text-decoration:none;color: #EF4222;background-position:0 0}' +
		'.wrap_body{background:white;}' +
		'.wrap_foot{text-align:center;}' +
		'.wrap_foot input{border: 1px solid #302F2E;height: 24px;line-height: 22px;background: url(http://style.org.hc360.com/images/manage/btnbg.gif);color: #fff;cursor: pointer;margin-right: 15px;margin-bottom: 10px;}' +
		'.wrap_remind{width:16em;padding:30px 40px;}' +
		'.wrap_remind p{margin:10px 0 0;}' +
		'.submit_btn, .cancel_btn{display:inline-block;padding:3px 12px 1.99px;line-height:16px;border:1px solid;cursor:pointer;overflow:visible;}' +
		'.submit_btn{background:#486aaa;border-color:#a0b3d6 #34538b #34538b #a0b3d6;color:#f3f3f3;}' +
		'.submit_btn:hover{text-decoration:none;color:#fff;}' +
		'.cancel_btn{background:#eee;border-color:#f0f0f0 #bbb #bbb #f0f0f0;color:#333;}' +
	    '</style>';
	    $("head").append(CSS);	  
	
	var WRAP = '<div id="operationBlank" onselectstart="return false;"></div>' + 
		'<div class="wrap_out" id="wrapOut">' +
			'<div class="wrap_in" id="wrapIn">' +
				'<div id="wrapBar" class="wrap_bar" onselectstart="return false;">' +
					'<h4 id="wrapTitle" class="wrap_title"></h4>' +
					'<div class="wrap_close"><a href="javasctipt:" id="wrapClose" title="关闭"></a></div>' +	
				'</div>' +
				'<div class="wrap_body" id="wrapBody"></div>' +
				'<div class="wrap_foot" id="wrapFoot"></div>' +
			'</div>' +
		'</div>';
	
	var objId = "";
	
	$.fn.operationbox = function(options) {	
		console.log(options);
		objId = $(this).attr("id");
		console.log('objId==='+objId);
		options = options || {};
		//相当于options覆盖掉operationboxDefault中的同名属性
		var s = $.extend({}, operationboxDefault, options);
		console.log(this);
		return this.each(function() {		
			var node = this.nodeName.toLowerCase();
			
			if (node === "a" && s.ajaxTagA) {
				$(this).click(function() {
					var href = $.trim($(this).attr("href"));
					if (href && href.indexOf("javascript:") != 0) {
						if (href.indexOf('#') === 0) {
							$.operationbox($(href), options);
						} else {
							//加载图片
							$.operationbox.loading();
							var myImg = new Image(), element;
							myImg.onload = function() {
								var w = myImg.width, h = myImg.height;
								if (w > 0) {
									var element = $('<img src="'+ href +'" width="'+ w +'" height="'+ h +'" />');
									options.protect = false;
									$.operationbox(element, options);
								}
							};
							myImg.onerror = function() {
								//显示加载图片失败
								$.operationbox.ajax(href, {}, options);
							};
							myImg.src = href;
						}
					}	
					return false;
				});
			} else {
			    console.log(123123123);
				$.operationbox($(this), options);	
			}
		});				
	};
	
	$.operationbox = function(elements, options) {
	
	    console.log('hello=='); 
		if (!elements) {
			return;	
		}
        //这个继承的方法是,用户自定义的属性会覆盖掉默认的属性
		var s = $.extend({}, operationboxDefault, options || {});

		//弹框的显示
		var eleOut = $("#wrapOut"), eleBlank = $("#operationBlank");
					
		if (eleOut.size()) {
			eleOut.show();
			eleBlank[s.bg? "show": "hide"]();
		} else {
			$("body").append(WRAP);	
		}
		
		if (typeof(elements) === "object") {
			elements.show();
		} else {
			elements = $(elements);
		}
		//一些元素对象
		$.o = {
			s: s,
			ele: elements,
			bg: eleBlank.size()? eleBlank: $("#operationBlank"), 
			out: eleOut.size()? eleOut: $("#wrapOut"), 
			tit: $("#wrapTitle"),
			bar: $("#wrapBar"), 
			clo: $("#wrapClose"),
			bd: $("#wrapBody"),
			ft:$("#wrapFoot")
		};
		
		// 标题以及关闭内容
		$.o.tit.html(s.title);
		$.o.clo.html(s.shut);
		
		//装载元素
		$.o.bd.empty().append(elements);
        if ($.isFunction(s.onshow)) {
			s.onshow();
		}
		//设置主体内容的尺寸
		$.operationbox.setSize();
		//定位
		$.operationbox.setPosition();
        //设置button属性 可以配置
		if(s.button.isShow){      
		    var buttonStr = "";
			
			var index = 0; 
			for(var i in s.button.callBack){
			   
			    var input = document.createElement("input");
				input.onclick = s.button.callBack[i];
				input.type  = "button";
				input.value = s.button.name[index];
				//2014-04-15  给button 增加class
                if(s.button.className && s.button.className.length){
				   input.className = s.button.className[index];
				}
				$.o.ft.append($(input));
			    index++; 
			}
			
			/*
			for(var i=0;i<s.button.name.length;i++){
			    var input = document.createElement("input");
				input.onclick = s.button.callBack[i];
				input.type  = "button";
				input.value = s.button.name[i];
				//2014-04-15  给button 增加class
                if(s.button.className && s.button.className.length){
				   input.className = s.button.className[i];
				}
				$.o.ft.append($(input));
			}*/
		    //$.o.ft.html(buttonStr);
            $.o.bd.append($.o.ft);  			
		}
		
	    if (s.fix) {
			$.operationbox.setFixed();
		}
		if (s.drag) {
			$.operationbox.drag();	
		} else {
			$(window).resize(function() {
				$.operationbox.setPosition();					  
			});	
		}
		if (!s.bar) {
			$.operationbox.barHide();	
		} else {
			$.operationbox.barShow();	
		}
		if (!s.bg) {
			$.operationbox.bgHide();
			//2014-5-26 针对实际业务的需要 
		    //2014-5-22 增加iframe的功能 主要解决ie6下面的 select 穿透的问题
           if(s.iframe){
		      
			  var str = '<iframe frameBorder="0" style="position:absolute;left:-5px;top:-5px;width:'+(parseInt($.o.s.width)+10)+'px;height:'+(parseInt($.o.s.height)+10)+'px;z-index:-1;filter:Alpha(Opacity=0);border:0;"></iframe>';
		      $("#wrapOut").append(str);
			  $("input").blur(); 
		   }
		} else {
		   //2014-5-22 增加iframe的功能 主要解决ie6下面的 select 穿透的问题
           if(s.iframe){
		      var w = $(window).width(), h = $(window).height(), st = $(window).scrollTop(), ph = $("body").height();
			  if (ph < h) {
				ph = h;	
			  }
		      
		      var screenWidth  = w -1;
			  var screenHeight = ph -1;
			  
			  var tempHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			  if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
                  tempHeight += st;
              }			  
		      //var str = '<iframe id="iframe" frameBorder="0" style="position:absolute;left:-'+(parseInt($.o.out.css("left"))+5)+'px;top:-'+(parseInt($.o.out.css("top"))+5)+'px;width:'+screenWidth+'px;height:'+screenHeight+'px;z-index:-1;filter:Alpha(Opacity=0);border:0;"></iframe>';
		      var str = '<iframe id="iframe" frameBorder="0" style="position:absolute;left:-'+(parseInt($.o.out.css("left"))+5)+'px;top:-'+(parseInt($.o.out.css("top"))+5)+'px;width:'+screenWidth+'px;height:'+tempHeight+'px;z-index:-1;filter:Alpha(Opacity=0);border:0;"></iframe>';
			  $("#wrapOut").append(str);
			  // $("#iframe").width(w).height(ph);
			  //var str = '<iframe frameBorder="0" style="background:red;position:absolute;left:0px;top:0px;width:'+screenWidth+'px;height:'+screenHeight+'px;z-index:-1;filter:Alpha(Opacity=0);border:0;"></iframe>';
		      //$("#operationBlank").after(str);
			  $("input").blur(); 
		   }
		   $.operationbox.bgShow();
		}
		if (!s.btnclose) {
			$.operationbox.closeBtnHide();	
		} else {
			$.o.clo.click(function() {
				$.operationbox.hide();	
				return false;
			});
		}
		if (s.bgclose) {
			$.operationbox.bgClickable();	
		}
		//设定系统关闭的时间
		if (s.delay > 0) {
		    
		    var close_Id = setInterval(function(){
                if(s.delay == 1){
				   clearInterval(close_Id);
				   $.operationbox.hide();
				}else{
                   $.o.ele.find("p strong").css("color","red").html(--s.delay);
				}
				//$("#"+objId+" p strong").css("color","red").html(--s.delay);  
			},1000);
			$.o.ele.css("textAlign","center");
			//$("#"+objId+"").css("textAlign","center");
            //$("#"+objId+" p strong").css("color","red").html(s.delay);
            $.o.ele.find("p strong").css("color","red").html(s.delay);			
			//setTimeout($.operationbox.hide, s.delay);	
		}
		
	    //2014-06-05  修正IE6下的select 会闪动的问题  
		$.operationbox.fixIe6Select(1);
		//2014-11-25 增加 imgCount 和 tabArr
       	s.imgObj.obj&&s.imgObj.obj.html(s.imgObj.count);	
		s.tabObj.obj.hide();
		s.tabObj.content.hide();
		s.tabObj.arr.sort();
        for(var i=0;i<s.tabObj.arr.length;i++){
		   $(s.tabObj.obj[s.tabObj.arr[i]]).show();
		}		
		$(s.tabObj.obj[s.tabObj.arr[0]]).addClass($(s.tabObj.obj[0]).attr('class'));
		$(s.tabObj.content[s.tabObj.arr[0]]).show();
	};
	$.extend($.operationbox, {
		setSize: function() {
			if (!$.o.bd.size() || !$.o.ele.size() || !$.o.bd.size()) {
				return;	
			}
			//主体内容的尺寸
			
			$.o.out.css({
				"width": $.o.s.width,
				//"height:": $.o.s.height 高度不起作用的原因
				"height": $.o.s.height
			});
			
			return $.o.out;
		},
		setPosition: function(flag) {
			flag = flag || false;
			if (!$.o.bg.size() || !$.o.ele.size() || !$.o.out.size()) {
				return;	
			}
			var w = $(window).width(), h = $(window).height(), st = $(window).scrollTop(), ph = $("body").height();
			if (ph < h) {
				ph = h;	
			}
			if(navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0){
			  $.o.bg.width(w).height(ph+st).css("opacity", $.o.s.opacity);
			  $.o.bg.width(w).height(ph+st).css("background", $.o.s.background);
			}else{
			  $.o.bg.width(w).height(ph).css("opacity", $.o.s.opacity);
			  $.o.bg.width(w).height(ph).css("background", $.o.s.background);
			}
			//主体内容的位置
			//获取当前主体元素的尺寸
			var xh = $.o.out.outerHeight(), xw = $.o.out.outerWidth();
			var t = st + (h - xh)/2, l = (w - xw)/2;
			
			if ($.o.s.fix && window.XMLHttpRequest) {
				t = (h - xh)/2;
			}
			if (flag === true) {
				$.o.out.animate({
					top: t,
					left: l
				});
			} else {
				$.o.out.css({
					top: t,
					left: l,
					zIndex: $.o.s.index
				});
			}
			return $.o.out;
		},
		//定位
		setFixed: function() {
			if (!$.o.out || !$.o.out.size()) {
				return;	
			}
			if (window.XMLHttpRequest) {
				$.operationbox.setPosition().css({
					position: "fixed"			
				});
			} else {
				$(window).scroll(function() {
					$.operationbox.setPosition();						  
				});
			}
			return $.o.out;
		},
		//背景可点击
		bgClickable: function() {
			if ($.o.bg && $.o.bg.size()) {
				$.o.bg.click(function() {
					$.operationbox.hide();
				});
			}
		},
		//背景隐藏
		bgHide: function() {
			if ($.o.bg && $.o.bg.size()) {
				$.o.bg.hide();
			}
		},
		//背景层显示
		bgShow: function() {
			if ($.o.bg && $.o.bg.size()) {
				$.o.bg.show();
			} else {
				$('<div id="operationBlank"></div>').prependTo("body");	
			}
		},
		//标题栏隐藏
		barHide: function() {
			if ($.o.bar && $.o.bar.size()) {
				$.o.bar.hide();
			}
		},
		//标题栏显示
		barShow: function() {
			if ($.o.bar && $.o.bar.size()) {
				$.o.bar.show();
			}
		},
		//关闭按钮隐藏
		closeBtnHide: function() {
			if ($.o.clo && $.o.clo.size()) {
				$.o.clo.hide();
			}
		},
		//弹框隐藏
		hide: function() {
			if ($.o.ele && $.o.out.size() && $.o.out.css("display") !== "none") {
				$.o.out.fadeOut("fast", function() {
					if ($.o.s.protect && (!$.o.ele.hasClass("wrap_remind") || $.o.ele.attr("id"))) {
						$.o.ele.hide().appendTo($("body"));
					}
					$(this).remove();
					if ($.isFunction($.o.s.onclose)) {
						$.o.s.onclose();
					}
				});
				if ($.o.bg.size()) {
					$.o.bg.fadeOut("fast", function() {
						$(this).remove();								
					});
				}
			}
			$.operationbox.fixIe6Select(0); 
			return false;
		},
		//拖拽
		drag: function() {
			if (!$.o.out.size() || !$.o.bar.size()) {
				$(document).unbind("mouseover").unbind("mouseup");
				return;
			}
			var bar = $.o.bar, out = $.o.out;
			var drag = false;
			var currentX = 0, currentY = 0, posX = out.css("left"), posY = out.css("top");
			bar.mousedown(function(e) {
				drag = true;
				currentX = e.pageX;
				currentY = e.pageY;							 
			}).css("cursor", "move");	
			$(document).mousemove(function(e) {
			    //2014-7-25 修正 解决 ie  chrome 下input 不能选中的问题
				var node = e.target || e.srcElement;
				if(node.nodeName == "INPUT" || node.nodeName == "TEXTAREA"){
				   return true;
				}
				if (drag) {
					var nowX = e.pageX, nowY = e.pageY;
					var disX = nowX - currentX, disY = nowY - currentY;
					out.css("left", parseInt(posX) + disX).css("top", parseInt(posY) + disY);
				}
                return false;				
			});
			$(document).mouseup(function() {
				drag = false;
				posX = out.css("left");
				posY = out.css("top");
			});
			
		},
		//预载
		loading: function() {
			var element = $('<div class="wrap_remind">加载中...</div>');
			$.operationbox(element, { bar: false });
		},
		//ask询问方法
		ask: function(message, sureCall, cancelCall, options) {
			var element = $('<div class="wrap_remind">'+message+'<p><button id="operationSureBtn" class="submit_btn">确认</button>&nbsp;&nbsp;<button id="operationCancelBtn" class="cancel_btn">取消</button></p></div>');
			$.operationbox(element, options);
			//回调方法
			$("#operationSureBtn").click(function() {
				if ($.isFunction(sureCall)) {
					sureCall.call(this);
				}						
			});
			$("#operationCancelBtn").click(function() {
				if (cancelCall && $.isFunction(cancelCall)) {
					cancelCall.call(this);
				}
				$.operationbox.hide();						  
			});	
		},
		//remind提醒方法
		remind: function(message, callback, options) {
			var element = $('<div class="wrap_remind">'+message+'<p><button id="operationSubmitBtn" class="submit_btn">确认</button</p></div>');
			$.operationbox(element, options);
			$("#operationSubmitBtn").click(function() {
				//回调方法
				if (callback && $.isFunction(callback)) {
					callback.call(this);	
				}
				$.operationbox.hide();							  
			});
		},
		//uri Ajax方法
		ajax: function(uri, params, options) {
			if (uri) {
				$.operationbox.loading();
				options = options || {};
				options.protect = false;
				$.ajax({
					url: uri,
					data: params || {},
					success: function(html, other) {
						$.operationbox(html, options);
					},
					error: function() {
						$.operationbox.remind("加载出了点问题。");	
					}
				});	
			}
		},
		//
		fixIe6Select:function(flag){
		    
		    if(navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0)
            {
               //是IE6
			   if(flag){
			      document.getElementsByTagName("body")[0].style.overflow = "hidden";
			      document.body.onmousewheel = function(event) {
		            return false;
		          } 
			   }else{
			     document.getElementsByTagName("body")[0].style.overflow = "auto";
			     document.body.onmousewheel = function(event) {
		            return true;
		         } 
			   }
			    
	        }
		}
	});
	var operationboxDefault = {
		title: "对话框",
		shut: "×",
		index: 2000,
		opacity: 0.5,
		background:"#333",
		width: "auto",
		height: "auto",
		bar: true, //是否显示标题栏
		bg: true, //是否显示半透明背景
		btnclose:true, //是否显示关闭按钮
		fix: false, //是否弹出框固定在页面上
		bgclose: false, //是否点击半透明背景隐藏弹出框
		drag: false, //是否可拖拽
		ajaxTagA: true, //是否a标签默认Ajax操作
		protect: "auto", //保护装载的内容
		onshow: $.noop, //弹窗显示后触发事件
		onclose: $.noop, //弹窗关闭后触发事件
	    delay: 0, //弹窗打开后关闭的时间, 0和负值不触发
		button:false, //增加按钮的可配置性
        iframe:false  //增加iframe的功能		
	};
})(jQuery);
