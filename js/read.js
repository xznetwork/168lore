/** www.168lore.com */
 ;function gopage(){var t=t?t:window.event;37==t.keyCode&&(location=prevpage),39==t.keyCode&&(location=nextpage),13==t.keyCode&&(location=gotobook)}var loading=null,mulu,source;document.onkeydown=gopage;var prevpage=__PREVPAGE,nextpage=__NEXTPAGE,gotobook=__DIR;window.onload=function(){function t(t,e,l){$("body").attr("class")&&(theme=$("body").attr("class").match(/readtheme-\d+/))&&$("body").removeClass(theme[0]),$("body").addClass("readtheme-"+t),0==e?$(".pt-read-cont").css({"font-family":"微软雅黑"}):1==e?$(".pt-read-cont").css({"font-family":"宋体"}):2==e?$(".pt-read-cont").css({"font-family":"楷体"}):3==e&&$(".pt-read-cont").css({"font-family":"黑体"}),0==l?$(".pt-read-text").css({"font-size":"14px"}):1==l?$(".pt-read-text").css({"font-size":"16px"}):2==l?$(".pt-read-text").css({"font-size":"26px"}):3==l&&$(".pt-read-text").css({"font-size":"36px"})}function e(t){t=void 0===t?null:t,r.text("播放中"),null===t?(d[p].playbackRate=$(".pt-spd-list .pt-tts-set-btn-select").data("value"),d[p].volume=$(".pt-vol-list .pt-tts-set-btn-select").data("value"),d[p].play()):($(".pt-read-text p:eq("+(t+1)+")").length&&s(t+1),d[t].playbackRate=$(".pt-spd-list .pt-tts-set-btn-select").data("value"),d[t].volume=$(".pt-vol-list .pt-tts-set-btn-select").data("value"),d[t].play(),$(".pt-read-text p:eq("+(t-1)+")").css("text-decoration","none"),$(".pt-read-text p:eq("+t+")").css("text-decoration","underline"),$(window).scrollTop($(".pt-read-text p:eq("+p+")").offset().top),p=t)}function l(){r.text("已暂停"),d[p].pause()}function s(t,l){l=void 0!==l&&l,"object"==typeof d[t]?(startTime=d[t].currentTime,d[t].pause(),document.body.removeChild(d[t])):startTime=0,d[t]=document.createElement("audio"),d[t].onended=function(){"undefined"!=typeof d[t+1]?e(t+1):r.text("播放结束"),document.body.removeChild(d[t])},d[t].volume=1,d[t].style.display="none",document.body.append(d[t]),d[t].setAttribute("src","http://ai.baidu.com/aidemo?type=tns&spd=5&pit=5&vol=15&dt=1&per="+$(".pt-pre-list .pt-tts-set-btn-select").data("value")+"&tex="+encodeURIComponent(encodeURIComponent($(".pt-read-text p:eq("+t+")").text()))),d[t].currentTime=startTime,l&&e(t)}$(".pt-code").qrcode({width:194,height:194,text:__MOBILE_URL});var o=window.localStorage.getItem("pcnovel.chapter.read.color"),a=window.localStorage.getItem("pcnovel.chapter.read.font"),n=window.localStorage.getItem("pcnovel.chapter.read.size");o=null===o?0:parseInt(o),a=null===a?0:parseInt(a),n=null===n?1:parseInt(n),t(o,a,n),$(".pt-read-set-bg").click(function(){$(this).hide(),$(".pt-set-modal").hide(),$(".pt-left-select").removeClass("pt-left-select")}),$(".pt-catalogue-btn").click(function(){$.ajax(__API_NOVEL_DIR,{type:"get",dataType:"json",data:{novelid:__NOVEL_ID,siteid:__SITE_ID_QUERY,withurl:1},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){laytpl($("#dirTpl").html()).render(t.data,function(t){$(".dir-content").html(t),$(".pt-catalogue-list").scrollTop($(".pt-catalogue-item[data-chapter-id="+__CHAPTER_ID+"]")[0].offsetTop-70)}),$(".pt-catalogue-close").click(function(){$(".pt-catalogue-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-catalogue-pop").fadeOut()})},error:function(){layer.alert("加载失败，请刷新页面后重试！",{icon:2})}}),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-read-set-bg").show(),$(this).addClass("pt-left-select"),$(".pt-catalogue-pop").fadeIn()}),$(".pt-set-btn").click(function(){$(".pt-read-set-bg").show(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(this).addClass("pt-left-select"),$(".pt-set-pop").fadeIn(),$(".pt-setcolor-list span:nth-child("+(o+1)+")").addClass("pt-setcolor-select").siblings().removeClass("pt-setcolor-select"),$(".pt-setfont-list span:nth-child("+(a+1)+")").addClass("pt-setfont-select").siblings().removeClass("pt-setfont-select"),$(".pt-setsize-list span:nth-child("+(n+1)+")").addClass("pt-setsize-select").siblings().removeClass("pt-setsize-select")}),$(".pt-setcolor-list span").click(function(){$(this).addClass("pt-setcolor-select"),$(this).siblings().removeClass("pt-setcolor-select"),o=$(this).index(),t(o,a,n)}),$(".pt-setfont-list span").click(function(){$(this).addClass("pt-setfont-select"),$(this).siblings().removeClass("pt-setfont-select"),a=$(this).index(),t(o,a,n)}),$(".pt-setsize-list span").click(function(){$(this).addClass("pt-setsize-select"),$(this).siblings().removeClass("pt-setsize-select"),n=$(this).index(),t(o,a,n)}),$(".pt-setsave-btn").click(function(){t(o,a,n),window.localStorage.setItem("pcnovel.chapter.read.color",o),window.localStorage.setItem("pcnovel.chapter.read.font",a),window.localStorage.setItem("pcnovel.chapter.read.size",n),layer.msg("保存设置成功!"),$(".pt-read-set-bg").hide(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide()}),$(".pt-setsave-regain").click(function(){$(".pt-setcolor-list span:nth-child(1)").addClass("pt-setcolor-select").siblings().removeClass("pt-setcolor-select"),$(".pt-setfont-list span:nth-child(1)").addClass("pt-setfont-select").siblings().removeClass("pt-setfont-select"),$(".pt-setsize-list span:nth-child(2)").addClass("pt-setsize-select").siblings().removeClass("pt-setsize-select"),o=0,a=0,n=1,t(o,a,n),layer.msg("恢复默认设置成功!"),$(".pt-read-set-bg").hide(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide()}),$(".pt-set-close").click(function(){$(".pt-set-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-set-pop").fadeOut()}),$(".pt-phone-btn").click(function(){$(".pt-read-set-bg").show(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(this).addClass("pt-left-select"),$(".pt-phone-pop").fadeIn()}),$(".pt-phone-close").click(function(){$(".pt-phone-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-phone-pop").fadeOut()}),$(".btn-mark").click(function(){$(".pt-read-set-bg").show(),$(".pt-collect-icon").hide(),$(".pt-collect-icon-hover").show(),$(this).hasClass("active")||$.ajax(__ADD_MARK,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID,chapterid:__CHAPTER_ID},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):(layer.msg("操作成功!"),$(".btn-mark").addClass("active"),$("a.btn-mark").text("已收藏"),$(this).find("div.btn-mark .t-collect-text").text("已收藏"))},error:function(){layer.alert("收藏失败，请刷新页面后重试！",{icon:2})}})}),$(".pt-switch-btn").click(function(){$.ajax(__API_CHAPTER_SAME,{type:"get",dataType:"json",data:{novelid:__NOVEL_ID,chapterid:__CHAPTER_ID,withurl:1},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){laytpl($("#sourceTpl").html()).render(t.data,function(t){$(".source-content").html(t)}),$(".pt-switch-close").click(function(){$(".pt-switch-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-switch-pop").fadeOut()})},error:function(){layer.alert("加载其他源失败，请刷新页面后重试！",{icon:2})}}),$(".pt-read-set-bg").show(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(this).addClass("pt-left-select"),$(".pt-switch-pop").fadeIn()}),$(".pt-feedback-btn").click(function(){$(".pt-read-set-bg").show(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(this).addClass("pt-left-select"),$(".pt-error").fadeIn()}),$(".pt-error-close").click(function(){$(".pt-feedback-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-error").fadeOut()});var c=null,i=!0;document.documentElement.clientHeight||document.body.clientHeight,window.onscroll=function(){document.documentElement.scrollTop||document.body.scrollTop,i||clearInterval(c),i=!1},$(".pt-return").click(function(){c=setInterval(function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=Math.floor(-t/6);document.documentElement.scrollTop=document.body.scrollTop=t+e,i=!0,t<=0&&clearInterval(c)},30)}),$(".pt-recomment-btn").click(function(){$.ajax(__ADD_VOTE,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):layer.msg("操作成功!")},error:function(){layer.alert("推荐失败，请刷新页面后重试！",{icon:2})}})}),$("#feedback_submit").click(function(){var t=($("#feedback_title").val(),$("#feedback_content").val());return t.length?void $.ajax(__ADD_FEEDBACK,{type:"post",dataType:"json",data:{novelid:__NOVEL_ID,chapterid:__CHAPTER_ID,content:t},beforeSend:function(){null==loading&&(loading=layer.load(1,{shade:[.1,"#000"]}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){t.code?layer.alert(t.msg,{icon:2},function(e){t.data.redirect?window.location.href=t.data.redirect:layer.close(e)}):layer.msg("操作成功!")},error:function(){layer.alert("推荐失败，请刷新页面后重试！",{icon:2})}}):(layer.msg("内容不能为空"),!1)}),2==parseInt(__SHOW_TYPE)&&$.get(__API_CHAPTER_TRANSCODE,{page:__CHAPTER_PAGE},function(t){t.code?layer.msg(t.msg):$(".pt-read-text").html(t.data.chapter.content)},"json");var d=[],p=0,r=$(".pt-tts .play");$(".pt-tts-set-btn").click(function(){$(this).addClass("pt-tts-set-btn-select").siblings().removeClass("pt-tts-set-btn-select"),"播放中"!==r.text()&&"已暂停"!==r.text()||($(this).parent().hasClass("pt-spd-list")?d[p].playbackRate=parseFloat($(this).data("value")):$(this).parent().hasClass("pt-vol-list")?d[p].volume=$(this).data("value"):$(this).parent().hasClass("pt-pre-list")&&("播放中"===r.text()?s(p,!0):s(p,!1)))}),$(".pt-tts-btn").click(function(){$(".pt-read-set-bg").show(),$(".pt-left-select").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(this).addClass("pt-left-select"),$(".pt-tts-pop").fadeIn()}),$(".pt-tts-close").click(function(){$(".pt-tts-btn").removeClass("pt-left-select"),$(".pt-set-modal").hide(),$(".pt-tts-pop").fadeOut()}),r.click(function(){"开始播放"===r.text()||"播放结束"===r.text()?(r.text("加载中"),s(0,!0)):d[p].paused||d[p].ended?e():d[p].paused||(r.text("加载中"),l())})};