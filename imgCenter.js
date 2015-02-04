/*! 
*   imgCenter.js 
*   展现给用户的是最简单的调用方法
*   里面的内容都是动态生成的
*         
*/
(function($) {
	
	//给页面装载CSS样式 js 由HC.W.load 来加载
	//页面的内容 按用户配置的参数来加载
	/*
	 var CSS = '<link rel="stylesheet" type="text/css" href="http://style.org.hc360.com/css/my/style/corcenter/mmt4/item-control/photo_img_control.css"/>';
	 $("head").append(CSS);	  
	 //上传的库
     var JS = '<script type="text/javascript" src="webUploader.js"></script>'    
	 $("head").append(CSS);
	*/
    //先定义整个页面的html文件
	//var IMGCENTER = ''
	var WRAP = '<div id="imgCenterBg"></div><div class="item-control-wrap">'+
	 '<div id="item-control-cont" class="item-control-cont">'+
		'<div id="item-control-top" class="item-control-top">'+
			'<span class="item-cont-tit">插入图片</span>'+
			'<a href="javascript:;" class="close">×</a>'+
		'</div>'+
		'<div class="control-main-c">'+
			'<div class="control-main-c-tab">'+
				'<div class="main-c-tab-btn">'+
					'<ul class="main-c-tab-left">'+
						'<li class="tab-btn-cur"><a href="javascript:;">从图片中心选择</a></li>'+
						'<li><a href="javascript:;">选择电脑中图片</a></li>'+
						'<li><a href="javascript:;">引用网络图片</a></li>'+
					'</ul>'+
					'<div class="main-c-tab-right">'+
						'<span class="img-use">图片应用<s>▼</s></span>'+
						'<div class="img-cont-list" style="display:none;"></div>'+
					'</div>'+
				'</div>'+
			'</div>'+

			'<div class="photo-area-wrap" id="photo-center-w">'+
			'<div class="item-album-wrap">'+
					'<div class="pompt-f"></div>'+
					'<div class="item-album-sel">'+
						'<span class="album-sel-tit">选择相册：</span>'+
						'<div class="album-list-box">'+
							 
							'<span class="album-tit-cur">默认相册(<em>0</em>)</span>'+
							'<s>▼</s>'+
							'<ul class="album-list-cont" style="display:none;">'+
								 
							'</ul>'+
						'</div>'+
						'<i class="text-mid">或</i>'+
						'<div class="create"><a href="javascript:;">创建相册</a></div>'+
					'</div>'+
					'<div class="freeSpace-wrap">'+
						'<span class="freeSpace-tit album-sel-tit">剩余空间：</span>'+
						'<div class="progress-wrap">'+
							'<div class="path"></div>'+
							'<span class="path-numb">43%</span>'+
						'</div>'+
						'<div class="count-wrap">'+
							'<span class="residue">460M</span>/<span class="amounts">4G</span>'+
						'</div>'+
						'<div class="storage-wrap">'+
							'<div class="storage">'+
								'<p class="storage-txt"><span>图片空间不够？</span><a href="#" target="_blank" class="now-buy">立即购买</a><a href="#" class="close"></a></p>'+
							'</div>'+
							'<s></s>'+
						'</div>'+
					'</div>'+
			'</div>'+
			'<div class="photo-contWrap">'+
			    <!--从图片中心选择 S-->
				'<div class="photo-area-cont">'+
				'<div class="figure-img">'+
					'<ul class="left-area-list">'+
						/*
						'<li class="item-cross">'+
							'<dl>'+
								'<dt>'+
									'<div class="item-use-img">'+
									   '<img src="http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/img100x100.png" alt=""/>'+
									 '</div>'+
									 '<div class="item-sel-true"></div>'+									
									 '<div class="item-floor">遮罩层</div>'+
								'</dt>'+
								'<dd><a href="#">尼康数码单反相机</a></dd>'+
							'</dl>'+
						'</li>'+
						*/
				    '</ul>'+
				'</div>'+
				/*
				'<div class="no-image" style="display:block;">'+
					'<p>相册中还没有任何图片哦！</p>'+
					'<div class="sel-ablum">'+
						'<p>请选择<a href="#">其他相册</a>或</p><a class="Selimg-btn">从电脑中选择图片</a>'+
					'</div>'+
				'</div>'+
				 */
				'</div>'+
                <!--从图片中心选择 E--->
				<!--没有图片的情况 S---> 
                '<div class="no-image">'+
					'<p>相册中还没有任何图片哦！</p>'+
					'<div class="sel-ablum">'+
						'<p>请选择<a href="#">其他相册</a>或</p><a class="Selimg-btn">从电脑中选择图片</a>'+
					'</div>'+
				'</div>'+
                <!--没有图片的情况 E--->				
				
				<!--图片加载的loadingS -->
				    
				 '<div class="loading">&nbsp;</div>'+
				<!--图片加载的loadingE -->
				<!--选择电脑中图片 S-->
				/* 2014-12-22 发现这个div 可以去掉   2014-12-25 经调试 发现不能去掉*/
				
				'<div class="photo-area-cont unLoad-scroll-w">'+
				        '<ul class="left-area-list">'+
							/*
							'<li class="item-cross">'+
								'<dl>'+
									'<dt>'+
										'<div class="item-use-img">'+
										'<img src="http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/img100x100.png" alt="">'+
										 '</div>'+
											'<div class="item-progress">'+
												'<div class="item-path"></div>'+
												'<span class="item-numb">30%</span>'+
											'</div>'+
											'<div class="item-floor">遮罩层</div>'+
									'</dt>'+
									'<dd><a href="#">尼康数码单反相机</a></dd>'+
								'</dl>'+
							'</li>'+
							'<li>'+
								'<dl>'+
									'<dt>'+
										'<div class="non-confor">'+
											'<div class="item-noimg"></div>'+
											'<div class="item-img-txt">图片大小超过5M</div>'+
										'</div>'+
									'</dt>'+
									'<dd></dd>'+
								'</dl>'+
							'</li>'+
							 */
						'</ul>'+
				'</div>'+ 
				 
				'<div class="photo-area-cont">'+
					/*
					'<div class="upLoad-img" style="display:none;">'+
					    '<ul class="left-area-list">'+
							
							'<li class="item-cross">'+
								'<dl>'+
									'<dt>'+
										'<div class="item-use-img">'+
										'<img src="http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/img100x100.png" alt="">'+
										 '</div>'+
											'<div class="item-progress">'+
												'<div class="item-path"></div>'+
												'<span class="item-numb">0%</span>'+
											'</div>'+
											'<div class="item-floor">遮罩层</div>'+
									'</dt>'+
									'<dd><a href="#">尼康数码单反相机</a></dd>'+
								'</dl>'+
							'</li>'+
							'<li>'+
								'<dl>'+
									'<dt>'+
										'<div class="item-use-img">'+
										  '<img src="http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/img100x100.png" alt=""/>'+
										'</div>'+
										'<div class="item-delete-img">删除</div>'+
										'<div class="item-floor">遮罩层</div>'+
									'</dt>'+
									'<dd><a href="#">尼康数码单反相机</a></dd>'+
								'</dl>'+
							'</li>'+
							'<li>'+
								'<dl>'+
									'<dt>'+
										'<div class="non-confor">'+
											'<div class="item-noimg"></div>'+
											'<div class="item-img-txt">图片大小超过5M</div>'+
										'</div>'+
									'</dt>'+
									'<dd></dd>'+
								'</dl>'+
							'</li>'+
							 
						'</ul>'+
					'</div>'+*/
					'<div class="foot-sel" style="display:none;">'+
						'<div class="upload-btn-wrap">'+
							'<div class="sel-upload-left" id="filePicker2">'+
							 '<button class="select-imgBtn">选择图片</button></div><div id="filePicker2_go"><button  id="uploadContinue" class="gon-upload">继续上传</button></div>'+
							 '<div class="sel-upload-right">'+
								'<label><input type="checkbox"/>使用水印</label>'+
								'<a href="#" target="_blank" class="install">设置</a>'+
							 '</div>'+
						'</div>'+
						'<div class="frid-remind">请上传5MB以内图片，支持jpg、jpeg、gif、png、bmp格式，建议您上传产品真实拍摄图片。</div>'+
					'</div>'+
					'<div class="foot-sel cur-foot-sel" style="display:block;">'+
						'<div class="upload-btn-wrap">'+
							'<div class="sel-upload-left" id="filePicker"><button class="sel-upload-Btn">选择并上传图片</button></div>'+
						'</div>'+
						'<div class="frid-remind">请上传5MB以内图片，支持jpg、jpeg、gif、png、bmp格式，建议您上传产品真实拍摄图片。</div>'+
						'<div class="sel-upload-right">'+
								'<label><input type="checkbox"/>使用水印</label>'+
								'<a href="#" target="_blank" class="install">设置</a>'+
						'</div>'+
					'</div>'+
					/*
					  '<div class="loading">&nbsp;</div>'+
					*/
				'</div>'+
			<!--选择电脑中图片 E-->
					
			<!--引用网络图片 S-->
				'<div class="photo-area-cont">'+
					 '<div class="upload-pic">'+
						'<div class="upload-pic-txt">'+
							'<span class="img-address">图片地址</span>'+
							'<div class="add-img-cont">'+
								'<input type="text" value="在此输入图片网络地址" class="inputxt"/><button class="add-img-btn">添加图片</button>'+
							'</div>'+
						'</div>'+
						'<div class="upload-tit-cont">'+
							'<p class="upload-tit-hint"></p>'+
							'<p class="upload-tit">支持上传5MB以内图片，支持jpg、jpeg、gif、png、bmp格式，建议您上传产品真实拍摄图片。</p>'+
						'</div>'+
					'</div>'+
				'</div>'+
			<!--引用网络图片 E-->
			'</div>'+
			<!--已选图片 E-->
			'<div class="right-cont-sel">'+
				'<div class="selecting-img">已选图片(<span class="">18</span>/<span class="img-amounts">20</span>)</div>'+
				'<div class="selecting-img-area">'+
					'<ul class="selimg-area-list">'+
						/*
						'<li><a class="selimg-list-img" href="#">'+
						'<img alt="" src="http://style.org.hc360.com/images/my/images/corcenter/mmt4/item-control/area_right01.jpg"></a>'+
						'<a class="img-del" href="#">×</a></li>'+
						*/
					'</ul>'+
				'</div>'+
			'</div>'+
		  '</div>'+
	     '</div>'+
		'<div class="btm-help">'+
				'<div class="btm--left-link"><a href="#">新手帮助</a><a href="#">反馈建议</a></div>'+
				'<div class="btn-right-btn"><button class="btn-true">确定</button><button class="btn-reset">取消</button></div>'+
		'</div>'+
	'</div>'+
	<!--弹窗 S-->
	'<div id="createAlbum" class="update-alert-wrap">'+
			'<div class="update-alert">'+
			  '<div class="alert-con">'+
				'<div class="title">'+
				  '<h2>添加相册</h2>'+
				   '<a href="javascript:;" class="close"></a></div>'+
				'<dl>'+
				  '<dd class="ablum-name">'+
					  '<span>相册名称：</span>'+
					  '<input type="text" value="" class="name" name="text2">'+
					  '<s class="wrong">相册名称中有违禁词,请重新输入。</s>'+
				  '</dd>'+
				  '<dd>'+
					'<span>访问权限：</span>'+
					'<label><input type="radio" checked="checked" value="0" name="radio">公开到商铺</label>'+
					'<label><input type="radio" value="1" name="radio">仅自己可见</label>'+
				  '</dd>'+
				  '<dd><span>所属分类：</span>'+
					  '<div class="alert-select"><s></s>'+
						'<p class="namber">相册相册相册相册相册相册相册相</p>'+
						'<ul style="display:none;">'+
						   '<li class="gary">相册2</li>'+
						   '<li>相册</li>'+
						   '<li>相册</li>'+
						'</ul>'+
					  '</div>'+
				  '</dd>'+
				  '<dd class="alert-bottom">'+
					'<button class="determine">确定</button>'+
					'<button class="cancel">取消</button>'+
				  '</dd>'+
				'</dl>'+
			  '</div>'+
			'</div>'+
		'</div>'+  
	     <!--弹窗 E-->
'</div>';
	
	 
 
	
	
	
	/*
    $.fn.imgOpeBox = function(options){	
		//objId = $(this).attr("id");
		options = options || {};
		//相当于options覆盖掉operationboxDefault中的同名属性
		var s = $.extend({}, imgOpeBoxDefault, options);
		
		$(WRAP).appendTo($('body'));
	    return this.each(function() {		
			console.log($(this));
			$.imgOpeBox($(this), options);	
		});
            		
	};*/
	
	$.imgOpeBox = function(options) {
	 
         
		//避免重复加载html内容 
	    if($("#imgCenterBg").css('display') == "none"){
		    $(".item-control-wrap").show();
		    $("#imgCenterBg").show();
		    return false; 	
		} 
		 
	    //这个继承的方法是,用户自定义的属性会覆盖掉默认的属性
		var s = $.extend({}, imgOpeBoxDefault, options || {});
        $(WRAP).appendTo($('body')); 
		
		 
		//一些元素对象
		$.o = {
			s: s,
			wrap:$('.item-control-wrap'), //整个弹出框
			tabList:$('.main-c-tab-left li'),
			tabContent:$('.photo-contWrap .photo-area-cont'),
			albumSelect:$('.album-list-box .album-list-cont'),
			albumDefaultName:$('.album-list-box .album-tit-cur:eq(0)'),
			selectedPictureList:$('.right-cont-sel .selimg-area-list'), //已选图片列表
			createAlbumTarget:$('.item-album-wrap .create a'),
			createAlbum:$('#createAlbum'),
			setImg:$('.right-cont-sel .selecting-img span'),
			tip:$('.item-album-wrap .pompt-f'),
			btn:$('.btn-right-btn button'),
			bg:$('#imgCenterBg')
		};
		
		// 标题以及关闭内容
		/*
		//装载元素
		$.o.bd.empty().append(elements);
        if ($.isFunction(s.onshow)) {
			s.onshow();
		}
		//设置主体内容的尺寸
		$.operationbox.setSize();
		*/
		//定位
		$.imgOpeBox.init();  
	};
	
	//给imgOpeBox对象加方法
	$.extend($.imgOpeBox, {
		
		setPosition:function(){
		    var h  = $(window).height();
            var w  = $(window).width();
            var st = $(window).scrollTop();
            var bh = $('body').height();
            
			//console.log('h==='+h+"st==="+st);
			if(bh < h){
		       bh = h;
			} 
            var eleWidth  = $.o.wrap.width();
		    var eleHeight = $.o.wrap.height();
			var left = w/2 - eleWidth/2; 
			var top  = st + (h - eleHeight)/2;
		    $.o.wrap.css({'left':left+'px','top':top+'px','position':'absolute'});
			//设置背景的高度
			$.o.bg.css({'height':bh+'px'});
		},
		setFixed:function(){
		    
			if(window.XMLHttpRequest){
			    $.o.wrap.css('position','fixed');
		    }else{
		        
				$(window).scroll(function(){
			        $.imgOpeBox.setPosition();   
			    });
                 				
		    }
		},
		fixIe6Select:function(flag){
		    
		    if(navigator.userAgent.indexOf("MSIE 6.0") > 0 )
            {
                //是IE6
			    if(flag){
			        document.getElementsByTagName("html")[0].style.overflow = "hidden";
			        document.body.onmousewheel = function(event) {
		               return false;
		            } 
			    }else{
			        document.getElementsByTagName("html")[0].style.overflowX = "auto";
				    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
			        document.body.onmousewheel = function(event) {
		                return true;
		            } 
			    }
			}
		},
		dnd:function(){
		     
			var demo = document.getElementById("item-control-top"); 
		    
			demo.onmousedown = function(event){
	              
				event = event || window.event;
			    var x = event.clientX - $.o.wrap[0].offsetLeft;
				var y = event.clientY - $.o.wrap[0].offsetTop;
			    document.onmousemove = function(event){
				    event = event || window.event;
					var difX = event.clientX - x;   
					var difY = event.clientY - y;
					$.o.wrap[0].style.left = difX + "px";
					$.o.wrap[0].style.top  = difY + "px"; 			   
					if(event.preventDefault){
						event.preventDefault();
					}else{
						event.returnValue = false;
					}
				}
			   
				document.onmouseup = function(){
				    this.onmousemove = null;
					this.onmouseup = null;	
				}
	        }
		},
	    //初始化用户的配置
		init:function(){
		     
		    //已选图片总数
		    var tabs = $.o.s.showTabs;
            var imgTotal = $.o.s.imgTotal;
            //var imgSrcList = $.o.s.imgListObj;			
		    //imgCenter:true,   //图片中心tab
			//imgUp:true,       //本地上传tab 
			//netRefrence:true
		    //如果图片中心显示的话
			if(tabs.imgCenter && tabs.imgUp && tabs.netRefrence){
			     //全显示
		         $.o.tabList.show();
				 //根据判断显示不同的内容
				 //$($.o.tabContent.get(0)).show();
                 //如果全部显示的话 
				  
				  
                 commonModule.showTabContent({imgCenter:true});				 
			}else if(tabs.imgCenter && tabs.imgUp && !tabs.netRefrence){
			     //显示前两个
			     $.o.tabList.eq(0).show();
				 $.o.tabList.eq(1).show();
				 commonModule.showTabContent({imgCenter:true});
				 //根据判断显示不同的内容
				 //$($.o.tabContent.get(0)).show();
		    }else if(tabs.imgCenter && !tabs.imgUp && !tabs.netRefrence){
			     //显示第一个			    
				 $.o.tabList.eq(0).show();
				 commonModule.showTabContent({imgCenter:true});
				 //根据判断显示不同的内容
				 //$($.o.tabContent.get(0)).show(); 
			}else if(!tabs.imgCenter && tabs.imgUp && tabs.netRefrence){
			     //显示后两个
			     $.o.tabList.eq(1).show();
				 $.o.tabList.eq(2).show();
				 $.o.tabList.removeClass('tab-btn-cur');
				 $.o.tabList.eq(1).addClass('tab-btn-cur');
				 commonModule.showTabContent({imgUp:true});
				 //根据判断显示不同的内容
				 //$($.o.tabContent.get(0)).show(); 
			}else if(!tabs.imgCenter && !tabs.imgUp && tabs.netRefrence){
			     $.o.tabList.eq(2).show();
                 $.o.tabList.removeClass('tab-btn-cur');
				 $.o.tabList.eq(2).addClass('tab-btn-cur');
                  				 
			     //显示最后一个
			     //$('.item-album-wrap').hide();
				 commonModule.showTabContent({netRefrence:true});
			}else if(!tabs.imgCenter && tabs.imgUp && !tabs.netRefrence){
			     //只显示第2个 
			     $.o.tabList.eq(1).show();
				 //根据判断显示不同的内容
		         commonModule.showTabContent({imgUp:true});
			} 
			 
			//设置 已选图片总数
			$.o.setImg.eq(0).html(0);
			$.o.setImg.eq(1).html($.o.s.imgTotal);
			
			$.imgOpeBox.setPosition();
			$.imgOpeBox.setFixed();
			$.imgOpeBox.dnd();
			$.imgOpeBox.fixIe6Select(1);
			commonModule.switchTab();
			//commonModule.albumSelect.getAlbumAndCount(option);
			$.o.createAlbumTarget.bind('click',function(){
			    commonModule.albumAdd.addAlbumShow.call(commonModule.albumAdd);
			});
		    commonModule.btnOpt();
			
			
		}
    });
	
	//图片中心模块
	var imgCenterModule = (function (my) {
		/**
           包括        
             1.根据相册获取图片
             2.图片的滚动加载
			 3.相册下拉框的交互操作 
        **/
		my.AddPhoto = function () {
			//添加内部代码
			return 1; 		
		};
		
		my.li_id_arr = []; //用于存放已选图片列表中的id 值
		
		//实现图片的滚动加载
		my.getImgByScroll = function(albumId,page,pageSize){
		    var  ul = $.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list:eq(0)')[0];
		    var scrollHeight = ul.scrollHeight;
		    var offsetHeight = ul.offsetHeight;
			console.log('offsetHeight=='+offsetHeight+"==scrollHeight==="+scrollHeight);
			ul.onscroll = function(){
			     if(offsetHeight + ul.scrollTop >= scrollHeight){
					 alert('发起请求');
					 console.log('发起请求');
					 $('.loading').show();
					 commonModule.getPhotoByAlbumId({id:albumId,page:page,pageSize:pageSize});
				 }
			}
		}
		  
		
		
		return my;
	}(imgCenterModule || {})); 
	
	
	//本地上传模块
	var imgUpModule = (function (my) {
		/**
            包括        
                
		       1.类型、数量、容量的判断及图片的展示
               2.初始用户进来以后页面的展示、上传失败时页面的展示			 
		       3.上传接口的处理
		**/
		my.AddPhotoTo = function () {
			//添加内部代码
			return 1; 		
		};
		return my;
	}(imgUpModule || {}));
	
	
	//网络引用模块
	var netRefrence = (function (my) {
		/**
           包括        
              1.违禁词校验
		      2.url 验证及错误的显示
              3.点击确定以后的操作			 
		**/
		my.checkUrl = function (url) {
			//添加内部代码
			// 1.先验证是否有 http
            // 2.验证后缀名
			if($.trim(url) == ''){
			    return "url 不能为空";
			}
			
			if(!/^http:\/\//.test(url.toLowerCase())){
			   url = 'http://'+url; 
			}
			
			if(!/\.(jpg|jpeg|png|gif|bmp)$/i.test(url)){
			   
			   return "后缀名不对";
			}
			
			return {url:url};
		};
		
		
		my.opt = function(){
		
		      var _this = this;
			  
			  var inputObj = $.o.tabContent.eq(commonModule.tabIndex+1).find('.inputxt');
			
		      var btn = $.o.tabContent.eq(commonModule.tabIndex+1).find('.add-img-btn');
		     
			  var tip = $.o.tabContent.eq(commonModule.tabIndex+1).find('.upload-tit-hint');
			 
			  btn.click(function(){
			        if(_com().obj){
					   
					    //查看已选图片数					
					    var now   = Number($.o.setImg.eq(0).html()); 
					    var total = Number($.o.setImg.eq(1).html());	
					    if(now == total){
							 tip.html('已选图片已达到上限!');
							 return; 						 
						}
						tip.html('');
						commonModule.selectedPictureList.opt(1,_com().obj);
						now++;
					    $.o.setImg.eq(0).html(String(now));
				    }
			  });
			  
			  inputObj.on('click',function(){
			      if("在此输入图片网络地址" == inputObj.val()){
				     inputObj.val('');
				  }
			  });
			  
			  
			  inputObj.on('blur',function(){
			       _com();
			  });
			  
			  
			  function _com(){
			        
			       var obj = _this.checkUrl(inputObj.val());
			       if(!obj.url){
				      tip.html(obj);
				   }else{
				      return {obj:obj};
                   }
                   return {obj:false};				   
			  }
			  
			 
		}
		
		
		
		return my;
	} (netRefrence || {}));
	
    //定义一个通用的代码
	var commonModule = (function(my){
	    
	    
		my.tabIndex = 0;
		
		// 1.获取用户的相册和数量接口  
		// 2.获取容量和用户身份的接口
		// 3.添加相册的接口
		// 4.点击确定 取消 关闭的操作   
	    // 5.tab的切换
		/**
           包括        
             1.用户容量的计算及提示
		     2.添加相册的交互操作
        **/		
	    //接口出错时的提示
	    my.switchTab = function(){
		    
		    $.o.tabList.each(function(index){
			
			    $(this).click(function(){
			       my.tabIndex = index;
				   $.o.tabList.removeClass('tab-btn-cur');  
			       $(this).addClass('tab-btn-cur'); 
			       $.o.tabContent.hide();
				    //如果没有相册的话
                      					
				    if(index != 0){
				      $('.item-album-wrap').css('visibility','visible'); 
					  if($.o.tabContent.eq(index).find(".left-area-list li").size()){
					      $.o.tabContent.eq(index).show();
						  if(!$("#filePicker").hasClass("element-invisible")){
						     $("#filePicker").parent().parent().addClass("element-invisible");
						  };
					  }
					  $.o.tabContent.eq(index+1).show();
					  $('.item-album-wrap').show();
					   
                      if(index == 1){
					     
						 imgUpModule.uploadImgOpt();
						 $('.album-sel-tit:eq(0)').html('上传到');
					  }else if(index == 2){
				         
						 $('.item-album-wrap').css('visibility','hidden');
						 netRefrence.opt();
				      }                         
 					}else{
				      $.o.tabContent.eq(index).show();
					  $('.item-album-wrap').css('visibility','visible');
                      $('.album-sel-tit:eq(0)').html('选择相册'); 					  
				    }
					
					/*
						$.o.tabContent.eq(index).show();
						$('.item-album-wrap').show(); 
						if(index == 1){
							//[0].style.cssText
							//alert($("#filePicker").html());
							imgUpModule.uploadImgOpt();
						}else if(index == 2){
							$('.item-album-wrap').css('visibility','hidden');
							netRefrence.opt();
						}
				    */
				});
		    });
			
			
			
	    }
		
		//用于显示tab下的内容
		my.showTabContent = function(option){
		   
		    option = option || {};			
		    
			 
			if(option.imgCenter){
			    //显示第一个 tabContent
				//显示 公共的区域
				//主要是为了解决 ie6 初次点击上传按钮无反应的问题
				commonModule.albumSelect.getAlbumAndCount({imgCenter:true});			   
			    
			}else if(option.imgUp){
			    //显示第二个tab
			    commonModule.albumSelect.getAlbumAndCount({imgUp:true});
				
		    }else if(option.netRefrence){
			  
			    //显示第三个tab
			    //只显示
				$('.item-album-wrap').hide();
				$.o.tabContent.last().show();
		    }
	    }
		
		//http://my.b2b.hc360.com/my/turbine/template/corcenter,common,busin_album_add.html?callback=jQuery17106273212910164148_1418201711371&userid=xxxxxx&album_title=xxxxxx&_=1418203569521   
        //jQuery17106273212910164148_1418201711371(8042884)
		
		
		my.albumAdd = {};
		
		//显示添加相册的面板
		my.albumAdd.addAlbumShow = function(){
		         
			$.o.createAlbum.show();
			//获取分类
			 
			//给添加相册的元素添加事件
			var _this = this;
			//console.log(this);
			$.o.createAlbum.find('input[name="text2"]').bind('blur',function(){
			     //此时需要做违禁词校验
				 
			     if($.trim($(this).attr('value')) != ''){
				    _this.checkWord($(this).attr('value'));
				 } 
		    });
			 
			$.o.createAlbum.find('.determine').bind('click',function(){
			        
			       //先获取到词
				   var word = $.o.createAlbum.find('input[name="text2"]').attr('value');
			       if($.trim(word) == ''){
				        
					   $.o.createAlbum.find('.wrong').html('不能为空');	
					   
				   }else if(my.albumAdd.wordFlag){
				        
				       $.o.createAlbum.find('.wrong').html('有违禁词');
				   }
				   
				   //获取到权限的值
				   var permision = $.o.createAlbum.find('input[type="radio"]:checked').val();
				   
				   //获取到分类的值
				   var classification = $.o.createAlbum.find('.namber').val();
				   
				   _this.addAlbum({userid:'hczhuyangyang04',title:word,permision:permision,classification:classification});
				   
			});
			 
			 $.o.createAlbum.find('.cancel,.close').bind('click',function(){
			 
			      $.o.createAlbum.hide();
			 })
			 
		}
		 
		//添加相册的违禁词校验 
		my.albumAdd.checkWord = function(content){
		     //违禁词接口得修改成jsonp 方式 目前是ajax 方式不支持跨域
		      
			 $.ajax({
				type:"GET",
				url:'http://my.b2b.hc360.com/my/turbine/template/common,CheckInput.html',
				async:false,
				data:{word:encodeURIComponent(content),filterwordtype:"1"},
				dataType:"text",
				success:function(data){
				   //切换到当前相册 并且提示用户上传图片
				   //console.log('data==='+data);
				   //如果有违禁词的话
				   if(data.flag){
				      //如果有违禁词的话
				      my.albumAdd.wordFlag = 1;
				   }else{
				      my.albumAdd.wordFlag = 0;
				   }
				},
				error:function(errMsg){
				   //console.info(errMsg);
				}
		    });  
	    } 
		 
		//添加相册
		my.albumAdd.addAlbum = function(option){
		     
		    $.ajax({
				type:"GET",
				url:'http://my.b2b.hc360.com/my/turbine/template/corcenter,common,busin_album_add.html',
				async:false,
				data:{userid:option.userId,album_title:option.title,permision:option.permision,classification:option.classification},
				dataType:"jsonp",
				success:function(data){
				   //切换到当前相册 并且提示用户上传图片
				   $.o.createAlbum.hide();
				   my.albumSelect.addNewAlbumToSelect({name:option.title,id:data});
				},
				error:function(errMsg){
				  // console.info(errMsg);
				}
		    });
		}
		
		//{"optArray":[{"optName":"冰毒","optUrl":"http://my.b2b.hc360.com/my/turbine/template/corcenter,business,albumjson.html","photoAlbumUrl":"http://my.b2b.hc360.com/my/turbine/template/corcenter,business,photojson.html","tag":"8042889"}]}
		
		my.albumSelect = {}
		
		//接收两个参数 相册名称和相册ID
		my.albumSelect.addNewAlbumToSelect = function(option){
		
		     $('<li id='+option.id+' name='+option.name+' count=0>'+option.name+'(0)</li>').prependTo($.o.albumSelect);
		     $.o.albumDefaultName.html(option.name+'<em>0</em>');
			 
			 //现在已经统一为一个了
			 /*
			 if(commonModule.tabIndex == 0){
			    $($.o.tabContent.get(0)).hide();
			 }else if(commonModule.tabIndex == 1){
			    $($.o.tabContent.get(1)).hide(); 
			    $($.o.tabContent.get(2)).hide();
		     }*/
			 
			 $.o.tabContent.eq(commonModule.tabIndex).hide();
			 $('.no-image').show(); 
		     
		}
		
		my.albumSelect.getAlbumAndCount = function(option){
		     
			$('.loading').show();
			var _this = this;
			$.ajax({
				type:"GET",
				url:'http://my.b2b.hc360.com/my/turbine/template/corcenter,business,albumjson.html',
				async:false,
				dataType:"jsonp",
				success:function(data){
				   //console.log('option==='+option);
				   //alert(5555);
				   _this.fillSelect(data,option); 
				},
				error:function(errMsg){
				   //alert(77777); 
				  // console.info(errMsg);
				}
		    });
		}

		my.albumSelect.fillSelect = function(data,option){
		    
			//console.log('option==='+option);
			
			data  = data || {};   
		    var arr = data.optArray;
		    //先填充默认的值
			$.o.albumDefaultName.html(arr[0].optName+'<em>'+(arr[0].count?arr[0].count:0)+'</em>');
			//在这进行相册的判断
			
			//如果相册为0 的话
		    /*
			  if(!arr[0].count){
			    this.emptyOpt();
			  }else{}
		    */
			
		    var str = ''
			
			//console.log("arr===="+arr.length);
			
			for(var i=0;i<arr.length;i++){
			   str += '<li id='+arr[i].tag+' name='+arr[i].optName+' count='+(arr[i].count?arr[i].count:0)+'>'+arr[i].optName+'('+(arr[i].count?arr[i].count:0)+')</li>';
		    }
			$.o.albumSelect.html(str);
			this.opt();
			$.o.tabContent.eq(commonModule.tabIndex).show();
			if(option.imgCenter){
			    //如果图片数为0的话 则显示空的显示
				//$.o.tabContent.eq(commonModule.tabIndex).show();
				$.o.albumSelect.children().eq(0).click();
				
			}else if(option.imgUp){
			    //默认显示上传的页面
                //$.o.tabContent.eq(1).hide();			    
				//$.o.tabContent.eq(2).show();
				$('.album-sel-tit').html('上传到');
	        } 
		}
		
		my.albumSelect.emptyOpt = function(){
		     $('.no-image').show();   
		}
		
		my.albumSelect.opt = function(){
		    var _this = this;
		     
			$.o.albumDefaultName.parent().click(function(e){
			    
				var e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName.toLowerCase() == 'span' || target.nodeName.toLowerCase() == 's'){
				     $(this).find(".album-list-cont").toggle();
					 return false;
				}
			}); 
			 
			
			$.o.albumSelect.children().click(function(){
			
			    //alert(1); 
			    $.o.albumDefaultName.html($(this).attr('name')+'<em>'+$(this).attr('count')+'</em>');    
			    $(this).parent().hide();
                //显示当前相册下的照片
                /*
				 if(!$(this).attr('count')){
				   _this.emptyOpt();   
				 }else{
				   my.getPhotoByAlbumId({id:$(this).attr('id'),page:1,pageSize:10});
				 }*/
				my.getPhotoByAlbumId({id:$(this).attr('id'),page:1,pageSize:10});
		    });
			
			//关闭下拉框
			$('body').click(function(event){
			    var event = event || window.event;
			    var target = event.target || event.srcElement;
                if($(target).next().attr('class') != 'album-list-cont'){
			         $.o.albumSelect.hide();
			    } 
		    });
			
		}
		
		my.getPhotoByAlbumId = function(option){
		    var _this = this; 
		    //http://my.b2b.hc360.com/my/turbine/template/corcenter,business,photojson.html?callback=jQuery1710868671968113631_1418204470607&albumid=8037377&page=1&pageSize=1&_=1418204480160& 
            $.ajax({
				type:"GET",
				url:'http://my.b2b.hc360.com/my/turbine/template/corcenter,business,photojson.html',
				data:{albumid:option.id,page:option.page,pageSize:option.pageSize},
				async:false,
				dataType:"jsonp",
				success:function(data){
				   if(!data){
				      _this.showNoPhoto();
				   }else{
				      _this.showPhoto(data.imagePool,option.id,page,pageSize);
				   }
				},
				error:function(errMsg){
				  // console.info(errMsg);
				}
		    });
        }
		
		
		my.showPhoto = function(data,alblumId,page,pageSize){
		     
			 $('.loading').hide();
			 var $con0 = $.o.tabContent.eq(0).children().eq(0);
			 var $con1 = $.o.tabContent.eq(0).children().eq(1);
		     $con0.show();
		     $con1.hide(); 
		     $con0.children().html();
			 var str = '';
			 //class="item-sel-true"
			 if(page == 1){
			    //如果是第一页的话 请清空列表内容
			    $con0.children().html('');
			 }
			 for(var i = (page-1)*pageSize;i<data.length;i++){
			    str += '<li id="imgCenter_'+alblumId+'_'+i+'" class="item-cross"><dl><dt><div class="item-use-img"><img src="'+data[i].thumb+'" alt="" width=100 height=100></div><div></div><div class="item-floor">遮罩层</div></dt><dd><a href="javascript:;">'+data[i].title+'</a></dd></dl></li>'; 
			 }
			 $con0.children().append(str);
			 
			// if(){
			   imgCenterModule.getImgByScroll(alblumId,page,pageSize);
		    // }
			 
			 
			 //先进行已选列表的扫描
			 //console.log('imgCenterModule.li_id_arr==='+imgCenterModule.li_id_arr.length);
			 for(var i=0;i<imgCenterModule.li_id_arr.length;i++){
			     $.o.tabContent.eq(0).children().eq(0).find('#'+imgCenterModule.li_id_arr[i]).find('div:eq(1)').addClass('item-sel-true');
			 }
			 
			 //图片和已选图片的互动
			 $.o.tabContent.eq(0).children().eq(0).find('li').click(function(){
			       
                   var now   = Number($.o.setImg.eq(0).html()); 
                   var total = Number($.o.setImg.eq(1).html());	
                   var obj = $(this).find('div:eq(1)');
			       if(obj.hasClass('item-sel-true')){
				       
					  obj.removeClass('item-sel-true');
					  my.selectedPictureList.opt(0,$(this));   
				      now--;
					  
					  $.o.setImg.eq(0).html(String(now));
				   }else{
				      if(now == total){
				         $.o.tip.html('已选图片已达到上限!').show(200);
						 setTimeout(function(){
						   $.o.tip.hide(200);
						 },2000);
                         return; 						 
					  }
					  obj.addClass('item-sel-true');
				      //alert(1);
					  my.selectedPictureList.opt(1,$(this));
				      now++;
					  //alert('now=='+now);
					  $.o.setImg.eq(0).html(String(now));
				   }  
			});
		 
			 
	    }
		
		my.selectedPictureList = {};
		
		my.selectedPictureList.opt = function(flag,obj){
		     
		    if(flag){
		        
				if(obj.url){
				   var str = '<li id=""><a class="selimg-list-img" href="javascript:;"><img alt="" src="'+obj.url+'" width=78 height=78></a><a class="img-del" href="javascript:;">×</a></li>';
				}else{
				   var str = '<li id="'+obj.attr('id')+'"><a class="selimg-list-img" href="javascript:;"><img alt="" src="'+obj.find('img').attr('src')+'" width=78 height=78></a><a class="img-del" href="javascript:;">×</a></li>';
				}
				$.o.selectedPictureList.append(str);
				//只要能进入已选图片列表 已选数加一
				$.o.selectedPictureList.sortable();   
			    //都是多次绑定惹的祸啊 先解除绑定
				//$.o.selectedPictureList.find('li .img-del').unbind('click'); 
			    $.o.selectedPictureList.find('li .img-del').unbind('click').bind('click',function(){
				    
					//当删除的时候 如果不是图片中心的时候 则直接删除 
					if(!/imgCenter_/.test($(this).parent().attr('id'))){
					    $(this).parent().remove();  
					    var now   = Number($.o.setImg.eq(0).html());
					    now--;
					    $.o.setImg.eq(0).html(String(now));
						return;
					}
					
					//alert($(this).parent().attr('id'));
					var _this = $(this);
					/*
					var flag = 0;
					obj.parent().children().each(function(index){
					    if($(this).attr('id') == _this.parent().attr('id')){
						   flag = 1;
						   return;
						}   
					});
					
					
					
					if(!flag){
					    alert('该照片不在当前相册里面');
					}else{
					   $(this).parent().remove(); 
				       obj.parent().find('#'+$(this).parent().attr('id')).find('div:eq(1)').removeClass('item-sel-true');
					   var now   = Number($.o.setImg.eq(0).html());
					   now--;
					   $.o.setImg.eq(0).html(String(now));
					   //删除数组中的元素
					   for(var i=0;i<imgCenterModule.li_id_arr.length;i++){
					      if(imgCenterModule.li_id_arr[i] == $(this).parent().attr('id')){
						     imgCenterModule.li_id_arr.splice(i,1);
						     break;
						  }
					   }
					}*/
					
					
				    $(this).parent().remove(); 
				    
					if($.o.tabContent.eq(0).find('#'+$(this).parent().attr('id'))){
					   
					   $.o.tabContent.eq(0).find('#'+$(this).parent().attr('id')).find('div:eq(1)').removeClass('item-sel-true');
				       
					}
				    var now   = Number($.o.setImg.eq(0).html());
				    now--;
					if(now == 0){
					   
					   imgCenterModule.li_id_arr = []; 
					}
				    $.o.setImg.eq(0).html(String(now));
				    //删除数组中的元素
				    for(var i=0;i<imgCenterModule.li_id_arr.length;i++){
					  if(imgCenterModule.li_id_arr[i] == $(this).parent().attr('id')){
						 imgCenterModule.li_id_arr.splice(i,1);
						 break;
					  }
				    }
				});
				imgCenterModule.li_id_arr.push(obj.attr && obj.attr('id'));
			}else{
		        
				$.o.selectedPictureList.find('#'+obj.attr('id')).remove();
            } 
		}
		
		
	    my.showNoPhoto = function(){
		    
			$.o.tabContent.eq(0).children().eq(1).show();
		    $.o.tabContent.eq(0).children().eq(0).hide();
		}
		
		
		my.btnOpt = function(){
		    
			//确定
		    $.o.btn.eq(0).click(function(){
			    //点击确定的时候 先把图片的src 取出来
				//console.log($.o.selectedPictureList.find("img").size()+"ddddd");
				var srcArr = [];
				$.o.selectedPictureList.find("img").each(function(){
				     srcArr.push($(this).attr("src"));  
				});
				$.o.s.callback(srcArr);
			    //$.o.wrap.hide();
				$("#imgCenterBg").hide();
				$.o.wrap.hide();
				$.imgOpeBox.fixIe6Select(0);
            });
			//取消
			$.o.btn.eq(1).click(function(){
			   $.o.wrap.hide();
			   $("#imgCenterBg").hide();
			   $.imgOpeBox.fixIe6Select(0);
            });
			
			//关闭
			$('.item-control-top .close').click(function(){
			    $("#imgCenterBg").hide();
			    $.o.wrap.hide();
                $.imgOpeBox.fixIe6Select(0);				
			});
	    }
		
		
		my.setSelectedList = function(arr){
	        /*
			    for(var i=0;i<arr.length;i++){}
			    $.o.selectedPictureList.find("img").each(function(){
				    $(this) srcArr.push($(this).attr("src"));  
			    }); 
		    */
	    } 
		  
		   return my;
	    }(commonModule || {}));
	
	
	//拖拽定义为独立的模块
	(function() {
		var dragging, placeholders = $();
		$.fn.sortable = function(options) {
			var method = String(options);
			options = $.extend({
				connectWith: false
			}, options);
			return this.each(function() {
				if (/^(enable|disable|destroy)$/.test(method)) {
					var items = $(this).children($(this).data('items')).attr('draggable', method == 'enable');
					if (method == 'destroy') {
						items.add(this).removeData('connectWith items')
							.off('dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s');
					}
					return;
				}
				var isHandle, index, items = $(this).children(options.items);
				var placeholder = $('<' + (/^(ul|ol)$/i.test(this.tagName) ? 'li' : 'div') + ' class="sortable-placeholder">');
				items.find(options.handle).mousedown(function() {
					isHandle = true;
				}).mouseup(function() {
					isHandle = false;
				});
				$(this).data('items', options.items)
				placeholders = placeholders.add(placeholder);
				if (options.connectWith) {
					$(options.connectWith).add(this).data('connectWith', options.connectWith);
				}
				items.attr('draggable', 'true').on('dragstart.h5s', function(e) {
					if (options.handle && !isHandle) {
						return false;
					}
					isHandle = false;
					var dt = e.originalEvent.dataTransfer;
					dt.effectAllowed = 'move';
					dt.setData('Text', 'dummy');
					index = (dragging = $(this)).addClass('sortable-dragging').index();
				}).on('dragend.h5s', function() {
					if (!dragging) {
						return;
					}
					dragging.removeClass('sortable-dragging').show();
					placeholders.detach();
					if (index != dragging.index()) {
						dragging.parent().trigger('sortupdate', {item: dragging});
					}
					dragging = null;
				}).not('a[href], img').on('selectstart.h5s', function() {
					this.dragDrop && this.dragDrop();
					return false;
				}).end().add([this, placeholder]).on('dragover.h5s dragenter.h5s drop.h5s', function(e) {
					if (!items.is(dragging) && options.connectWith !== $(dragging).parent().data('connectWith')) {
						return true;
					}
					if (e.type == 'drop') {
						e.stopPropagation();
						placeholders.filter(':visible').after(dragging);
						dragging.trigger('dragend.h5s');
						return false;
					}
					e.preventDefault();
					e.originalEvent.dataTransfer.dropEffect = 'move';
					if (items.is(this)) {
						if(options.forcePlaceholderSize) {
							placeholder.height(dragging.outerHeight());
						}
						dragging.hide();
						$(this)[placeholder.index() < $(this).index() ? 'after' : 'before'](placeholder);
						placeholders.not(placeholder).detach();
					} else if (!placeholders.is(this) && !$(this).children(options.items).length) {
						placeholders.detach();
						$(this).append(placeholder);
					}
					return false;
				});
			});
		};
	})();
	
	
	//定义图片上传的控制类
	// 当domReady的时候开始初始化
	imgUpModule.uploadImgOpt = function(){
        
		//$.o.tabContent.eq(1).find('.left-area-list');
		 
        var $wrap = $.o.tabContent.eq(commonModule.tabIndex),

            // 图片容器
            $queue = $.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list:eq(0)'),

            // 添加的文件数量
            fileCount = 0,

            // 添加的文件总大小
            fileSize = 0,

            // 优化retina, 在retina下这个值是2
            ratio = window.devicePixelRatio || 1,

            // 缩略图大小
            thumbnailWidth = 110 * ratio,
            thumbnailHeight = 110 * ratio,

            // 可能有pedding, ready, uploading, confirm, done.
            state = 'pedding',

            // 所有文件的进度信息，key为file id
            percentages = {},
            // 判断浏览器是否支持图片的base64
            isSupportBase64 = ( function() {
                var data = new Image();
                var support = true;
                data.onload = data.onerror = function() {
                    if( this.width != 1 || this.height != 1 ) {
                        support = false;
                    }
                }
                data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                return support;
            } )(),

            // 检测是否已经安装flash，检测flash的版本
            flashVersion = ( function() {
                var version;

                try {
                    version = navigator.plugins[ 'Shockwave Flash' ];
                    version = version.description;
                } catch ( ex ) {
                    try {
                        version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                                .GetVariable('$version');
                    } catch ( ex2 ) {
                        version = '0.0';
                    }
                }
                version = version.match( /\d+/g );
                return parseFloat( version[ 0 ] + '.' + version[ 1 ], 10 );
            } )(),

            supportTransition = (function(){
                var s = document.createElement('p').style,
                    r = 'transition' in s ||
                            'WebkitTransition' in s ||
                            'MozTransition' in s ||
                            'msTransition' in s ||
                            'OTransition' in s;
                s = null;
                return r;
            })(),

            // WebUploader实例
            uploader;

        if ( !WebUploader.Uploader.support('flash') && WebUploader.browser.ie ) {

            // flash 安装了但是版本过低。
            if (flashVersion) {
                (function(container) {
                    window['expressinstallcallback'] = function( state ) {
                        switch(state) {
                            case 'Download.Cancelled':
                                alert('您取消了更新！')
                                break;

                            case 'Download.Failed':
                                alert('安装失败')
                                break;

                            default:
                                alert('安装已成功，请刷新！');
                                break;
                        }
                        delete window['expressinstallcallback'];
                    };

                    var swf = './expressInstall.swf';
                    // insert flash object
                    var html = '<object type="application/' +
                            'x-shockwave-flash" data="' +  swf + '" ';

                    if (WebUploader.browser.ie) {
                        html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                    }

                    html += 'width="100%" height="100%" style="outline:0">'  +
                        '<param name="movie" value="' + swf + '" />' +
                        '<param name="wmode" value="transparent" />' +
                        '<param name="allowscriptaccess" value="always" />' +
                    '</object>';

                    container.html(html);

                })($wrap);

            // 压根就没有安转。
            } else {
                $wrap.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img alt="get flash player" src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>');
            }

            return;
        } else if (!WebUploader.Uploader.support()) {
            alert( 'Web Uploader 不支持您的浏览器！');
            return;
        }
        
		
		//alert(123123123); 
        // 实例化
		uploader = WebUploader.create({
            pick: {
                id: '#filePicker',
                label: '点击选择图片2'
            },
			 
            formData: {
                uid: 123
            },
            //dnd: '#dndArea',
            //paste: '#uploader',
            swf: './dist/Uploader.swf',
            chunked: false,
            chunkSize: 512 * 1024,
            server: './server/fileupload.php',
            // runtimeOrder: 'flash',
            accept: {
                 title: 'Images',
                 extensions: 'gif,jpg,jpeg,bmp,png',
                 mimeTypes: 'image/*'
            },
            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 300,
            fileSizeLimit: 200 * 1024 * 1024,    // 200 M
            fileSingleSizeLimit: 5 * 1024 * 1024,    // 50 M
			auto:true
        });
		
		
		if(navigator.userAgent.indexOf("MSIE 6.0") > 0 ){
		    
		    $("#filePicker .webuploader-pick").next().css({"left":"-8px","top":"-8px"});
		}
		//alert(2);
		//alert($('#dp_swf_engine')[0]); 
		//alert($("#filePicker .webuploader-pick").next().css("left")+"=="+$("#filePicker .webuploader-pick").next().css("top"));
		//alert();
        //console.log(uploader);
        //console.info(uploader);
		 
        //$.o.tabContent.eq(0).css('visibility','visible'); 		
        // 拖拽时不接受 js, txt 文件。
        function  accetFile(file){
		
            var rExt = /\.\w+$/;
            var invalid = !file || !file.size || this.accept &&
                 // 如果名字中有后缀，才做后缀白名单处理。
                 rExt.exec( file.name ) && !this.accept.test( file.name );

            return !invalid;
		}
		
		function singleFileSize(file){
		    
		    var opts = uploader.options,
                max =  opts.fileSingleSizeLimit;
             
            if ( !max ) {
                return;
            } 
		     
			if(file.size > max){
			   return false;
			}
			return true;
		}
		
	    uploader.on('filesQueued', function(files) {
            
		    //先把相关不重要的隐藏
			/*
			   开始做验证
			*/
			var flag = false;
			if(files.length){
			    $.o.tabContent.eq(commonModule.tabIndex).show();
				//通过设置元素的高度为1px 成功解决ie6下 当图片进入时 高度被撑高的问题
				$.o.tabContent.eq(commonModule.tabIndex+1).css('height','1px');
				$.o.tabContent.eq(commonModule.tabIndex+1).find('.cur-foot-sel').addClass('element-invisible');
			} 
			  
			$.each(files,function(index){
			    //setTimeout(function(){  
				  var file = files[index];
                  var error = {};
				  fileCount++;
				  //大小
				  //console.log('fileCount====='+fileCount);
				  if(fileCount >= 1) {
					   flag = true; 	
				  }
				  if(!singleFileSize(file)){
				     error.singleFileSize = true;
                  }
				  //console.info(!accetFile(file) || !singleFileSize(file));
				  //类型
				  if(!accetFile(file)){
				     error.type = true;
				  }	 
				  if(!accetFile(file) || !singleFileSize(file)){
				     uploader._widgets[4].removeFile(file,true);
                     addFile(file,error);//添加文件
					 setState( 'ready' );
				  }else{
				     fileSize += file.size;
					 addFile(file);//添加文件
				     setState( 'ready' );
					 //updateTotalProgress();
				  } 
				//},2000);  
			});
			 
        });

         

        // 添加“添加文件”的按钮，
        /*
			uploader.addButton({
				id: '#filePicker2',
				label: '继续添加'
			});
        */
        uploader.on('ready', function() {
            window.uploader = uploader;
        });

        // 当有文件添加进来时执行，负责view的创建
        function addFile( file ) {
           
		    //console.log('*******=='+arguments[1]); 
		     
		    if(arguments[1]){
			   
			   var str = "";
			   if(arguments[1].type){
			      str += '类型不符合<br/>'
			   }
			   
			   if(arguments[1].singleFileSize){
			      str += '文件大小超出限制<br/>'; 
			   }
			   
			   var $li = $('<li id="'+file.id+'" class="item-cross"><dl><dt><div class="non-confor"><div class="item-noimg"></div><div class="item-img-txt">'+str+'</div></div></dt><dd></dd></dl></li>'); 
			   $li.appendTo( $queue );
			   return;
			}
		                    
		    var $li = $('<li id="'+file.id+'" class="item-cross"><dl><dt><div class="item-use-img"></div><div class="item-progress"><div class="item-path"></div><span class="item-numb">30%</span></div><div class="item-delete-img"></div><div class="item-floor">遮罩层</div></dt><dd><a href="#">'+file.name+'</a></dd></dl></li>'),
                $itemProgress = $li.find('.item-progress'),  
                $prgress = $li.find('.item-progress .item-path'),
                $wrap = $li.find( '.item-use-img' ),
                $info = $('<p class="error"></p>'),
                   
                showError = function( code ) {
                    switch( code ) {
                        case 'exceed_size':
                            text = '文件大小超出';
                            break;
                           
                        case 'interrupt':
                            text = '上传暂停';
                            break;

                        default:
                            text = '上传失败，请重试';
                            break;
                    }

                    $info.text( text ).appendTo( $li.find('dt') );
					$li.find(".item-delete-img").show();
                };
               
            if ( file.getStatus() === 'invalid' ) {
                showError( file.statusText );
            } else {
                // @todo lazyload
                $wrap.text( '预览中' );
			    
				uploader.makeThumb( file, function( error, src ) {
                    var img;

                    if ( error ) {
                        $wrap.text( '不能预览' );
                        return;
                    }
                    
					 
                    if( isSupportBase64 ) {
                        img = $('<img src="'+src+'">');
                        $wrap.empty().append( img );
                    } else {
                        $.ajax('./server/preview.php', {
                            method: 'POST',
                            data: src,
                            dataType:'json'
                        }).done(function( response ) {
                            if (response.result) {
                                img = $('<img src="'+response.result+'">');
                                $wrap.empty().append( img );
                            } else {
                                $wrap.text("预览出错");
                            }
                        });
                    }
                }, thumbnailWidth, thumbnailHeight );
                   
                percentages[ file.id ] = [ file.size, 0 ];
                file.rotation = 0;
            }

            file.on('statuschange', function( cur, prev ) {
                if ( prev === 'progress' ) {
                    $prgress.hide().width(0);
					$itemProgress.hide();
                } else if ( prev === 'queued' ) {
                    $li.off( 'mouseenter mouseleave' );
                    //$btns.remove();
					$li.find('.item-delete-img').hide();
                }

                // 成功
                if ( cur === 'error' || cur === 'invalid' ) {
                    //console.log( file.statusText );
                    showError( file.statusText );
                    percentages[ file.id ][ 1 ] = 1;
                } else if ( cur === 'interrupt' ) {
                    showError( 'interrupt' );
                } else if ( cur === 'queued' ) {
                    percentages[ file.id ][ 1 ] = 0;
                } else if ( cur === 'progress' ) {
                    $info.remove();
					$itemProgress.css('display','block');
                    $prgress.css('display', 'block');
                
				} else if ( cur === 'complete' ) {
				    $itemProgress.css('display','none');
					//当图片上传成功时 进入已选图片列表 伴随着容量会增加 并且得判断 是否超出已选图片的总数
					//此时 容量只是动态的增加 如果容量不足时 图片就不应该上传
					var now   = Number($.o.setImg.eq(0).html()); 
                    var total = Number($.o.setImg.eq(1).html());	
                    if(now == total){
				         $.o.tip.html('已选图片已达到上限!').show(200);
						 setTimeout(function(){
						   $.o.tip.hide(200);
						 },2000);
                         //return; 						 
					}else{
					    //alert(1);
					    commonModule.selectedPictureList.opt(1,$li);
				        now++;
					    //alert('now=='+now);
					    $.o.setImg.eq(0).html(String(now));
				        //给当前上传的图片增加 成功标志
                        $li.append('<span class="success"></span>');
					    $li.remove();
					}

                }

                $li.removeClass( 'state-' + prev ).addClass( 'state-' + cur );
            });
            
			//当用户点击删除时  删除该图片
			$li.find('.item-delete-img').on('click',function(){
			     uploader.removeFile(file,true );
				 $(this).parent().parent().parent().remove();
				 //alert($(this).parent().parent().parent().parent().children().size());
				 if($.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list').children().size() == 0){
				        $.o.tabContent.eq(1).hide();
					    $.o.tabContent.eq(2).children().eq(0).hide();
						$.o.tabContent.eq(2).find(".element-invisible").removeClass("element-invisible");
				        $("#filePicker .webuploader-pick").next().css({"left":"217px",top:"149px"});
				 }
		    });
			
            //用于将  
            $li.on( 'mouseenter', function() {
			    $li.find('.item-delete-img').show();
                //$btns.stop().animate({height: 30});
            });

            $li.on( 'mouseleave', function() {
			    $li.find('.item-delete-img').hide();
                //$btns.stop().animate({height: 0});
            });
            //alert(11); 
            $li.appendTo( $queue );
            //alert(22);
		}

        // 负责view的销毁
        function removeFile( file ) {
            var $li = $('#'+file.id);

            delete percentages[ file.id ];
            //updateTotalProgress();
            $li.off().find('.file-panel').off().end().remove();
        }

         

        

        function setState( val ) {
            var file, stats;

            if ( val === state ) {
                return;
            }

            state = val;

            switch ( state ) {
                case 'pedding':
                    //$placeHolder.removeClass( 'element-invisible' );
                    $queue.hide();
                   // $statusBar.addClass( 'element-invisible' );
                    uploader.refresh();
                    break;

                case 'ready':
                    //$placeHolder.addClass( 'element-invisible' );
                    $( '#filePicker2' ).removeClass( 'element-invisible');
                    $queue.show();
                    //$statusBar.removeClass('element-invisible');
                    uploader.refresh();
                    break;

                case 'uploading':
                    $( '#filePicker2' ).addClass( 'element-invisible' );
                    //$progress.show();
                    // $upload.text( '暂停上传' );
                    break;

                case 'paused':
                    //$progress.show();
                    // $upload.text( '继续上传' );
                    break;

                case 'confirm':
                    //$progress.hide();
                    $( '#filePicker2' ).removeClass( 'element-invisible' );
                    // $upload.text( '开始上传' );
                    stats = uploader.getStats();
                    if( stats.successNum && !stats.uploadFailNum ) {
                        setState( 'finish' );
                        return;
                    }else{
					    //把失败的页面展示出来, 并提供重新上传的机会 
					   	//当元素隐藏的时候是不能设置 pos 的
						//console.log($.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list').css("height"));
						//只添加一次button
						if($.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list').css("height") != "300px"){
							$.o.tabContent.eq(commonModule.tabIndex+1).css("height","100px").find('.foot-sel:eq(0)').show();
							$.o.tabContent.eq(commonModule.tabIndex).find('.left-area-list').css({"height":"300px"});
							$.o.tabContent.eq(commonModule.tabIndex).css({"height":"300px","overflow":"hidden"});
							//下面这句话成功解决ie6/7 下内容不随滚动条滚动的bug,顺便也解决了ie6,图片动态插入时布局错乱的问题,现在还有一个问题就是
                            //ie6 下图片刚插入的时候 高度会被撑高							
							//$.o.tabContent.eq(commonModule.tabIndex).find('ul').css({"position":"relative","left":"0","top":"0"});;
							uploader.addButton({
								id: '#filePicker2',
								label: '继续添加'
							});
						}  
					}
                    break;
                case 'finish':
                    stats = uploader.getStats();
                    if ( stats.successNum ) {
                        //alert( '上传成功' );
                        $.o.tip.html('上传成功!').show(200);
						setTimeout(function(){
						   $.o.tip.hide(200);
						},2000);
					    $.o.tabContent.eq(1).children().html('');
						$.o.tabContent.eq(1).hide();
					    $.o.tabContent.eq(2).find(".element-invisible").removeClass("element-invisible");
				        $("#filePicker .webuploader-pick").next().css({"left":"217px",top:"149px"});
                         
                    } else {
                        // 没有成功的图片，重设
                        state = 'done';
                        location.reload();
                    }
                    break;
            }
		}

		
        $('#uploadContinue').on('click',function(){
			    uploader.retry(); 
		}); 		
		 
		 
        uploader.onUploadProgress = function( file, percentage ) {
            
			//显示当前文件的进度条
		    var $li = $('#'+file.id),
                $percent = $li.find('.item-progress .item-path');
             
		    $percent.css( 'width', percentage * 100 + '%');
            $percent.next().html(percentage * 100 + '%'); 
        };

         

        uploader.on( 'all', function( type ) {
            var stats;
            switch( type ) {
                case 'uploadFinished':
                    setState( 'confirm' );
                    break;

                case 'startUpload':
                    setState( 'uploading' );
                    break;

                case 'stopUpload':
                    setState( 'paused' );
                    break;

            }
        });
        
        uploader.onError = function( code ) {
            alert( 'Eroor: ' + code );
        };
    };
    
    //定义默认属性主要包括已选图片的总数及需要显示的tab数
	var imgOpeBoxDefault = {
	    imgTotal:5,           //已选图片总数
		showTabs:{
			 imgCenter:true,   //图片中心tab
			 imgUp:true,       //本地上传tab 
			 netRefrence:true  //引用网络tab		
		},
		imgType:'jpg...',  //图片类型
		imgSize:200,      //图片大小
		uploadUrl:'xxxxxx',  //上传地址
		wordCheckUrl:'xxxx', //违禁词校验接口
		capacityAndVipUrl:'xxx', //容量和用户身份接口
		albumAddUrl:'xxx', //添加相册接口
		getAlbumAndCountUrl:'xxxx', //获取相册列表和图片数的接口
		getPhotoByAlbumNameUrl:'xxxx', //根据相册名称返回图片列表接口
		imgListObj:'imgListObj'    //用户传入的图片列表对象 如果有图片列表则传入图片列表,如果没有的话就不传
    };
})(jQuery);
