/** www.168lore.com */
 ;var loading=null;$(".pt-reply-comment").click(function(){layer.open({type:1,content:$(".pt-comment-box").html(),anim:"up",style:"position:fixed; bottom:0; left:0; width: 100%; height: auto; padding:10px 0; border:none;background-color: #f2f2f7;",success:function(t){var n=parseInt($(t).find(".pt-limit").text());$(t).find(".pt-text").on("input propertychange",function(){$(t).find(".pt-num").text($(this).val().length),n<$(this).val().length?($(t).find(".pt-sum").addClass("color2"),$(this).addClass("color2")):($(t).find(".pt-sum").removeClass("color2"),$(this).removeClass("color2"))}),$(t).find(".pt-submit").click(function(){return $(t).find(".pt-text").hasClass("color2")?(layer.open({content:"操作失败，回复内容不能超过 "+n+" 个字符！",skin:"msg",time:2}),!1):void $.ajax(__REPLY_COMMENT,{type:"post",dataType:"json",data:{type:__TYPE,type_id:__TYPE_ID,comment_id:__COMMENT_ID,content:$(t).find(".pt-text").val()},beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){"-1000"==t.code?window.location.href=t.data.redirect:t.code?layer.open({content:t.msg,skin:"msg",time:2,end:function(){t.data.redirect&&(window.location.href=t.data.redirect)}}):(layer.open({content:"回复成功",skin:"msg",time:2}),window.location.reload())},error:function(){layer.open({content:"回复失败，请刷新页面后重试！",skin:"msg",time:2})}})})}})}),$(".comment-btn-up,.comment-btn-down").click(function(){var t=$(this);return t.hasClass("active")||t.parent().hasClass("disable")?(layer.open({content:"操作失败，您已经评价过了！",skin:"msg",time:2}),!1):void $.ajax(__RATING_COMMENT,{type:"post",dataType:"json",data:{comment_id:t.parents(".pt-comment-cont").data("comment-id"),type:__TYPE,type_id:__TYPE_ID,action:t.hasClass("comment-btn-down")?"bad":"good"},beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(n){"-1000"==n.code?window.location.href=n.data.redirect:n.code?layer.open({content:n.msg,skin:"msg",time:2,end:function(){n.data.redirect&&(window.location.href=n.data.redirect)}}):(t.addClass("active"),t.find("img").attr("src",t.find("img").attr("src").replace(".png","_hover.png")),t.parent().addClass("disable"),t.find(".number").text(parseInt(t.find(".number").text())+1),layer.open({content:"操作成功",skin:"msg",time:2}))},error:function(){layer.alert("操作失败，请刷新页面后重试！",{icon:2})}})}),$(".pt-leave-comment").click(function(){layer.open({type:1,content:$(".pt-comment-box").html(),anim:"up",style:"position:fixed; bottom:0; left:0; width: 100%; height: auto; padding:10px 0; border:none;background-color: #f2f2f7;",success:function(t){var n=parseInt($(t).find(".pt-limit").text());$(t).find(".pt-text").on("input propertychange",function(){$(t).find(".pt-num").text($(this).val().length),n<$(this).val().length?($(t).find(".pt-sum").addClass("color2"),$(this).addClass("color2")):($(t).find(".pt-sum").removeClass("color2"),$(this).removeClass("color2"))}),$(t).find(".pt-submit").click(function(){return $(t).find(".pt-text").hasClass("color2")?(layer.open({content:"操作失败，评论内容不能超过 "+n+" 个字符！",skin:"msg",time:2}),!1):void $.ajax(__ADD_COMMENT,{type:"post",dataType:"json",data:{type:__TYPE,type_id:__TYPE_ID,content:$(t).find(".pt-text").val()},beforeSend:function(){null==loading&&(loading=layer.open({type:2}))},complete:function(){null!=loading&&(layer.close(loading),loading=null)},success:function(t){"-1000"==t.code?window.location.href=t.data.redirect:t.code?layer.open({content:t.msg,skin:"msg",time:2,end:function(){t.data.redirect&&(window.location.href=t.data.redirect)}}):(layer.open({content:"评论成功",skin:"msg",time:2}),window.location.reload())},error:function(){layer.open({content:"评论失败，请刷新页面后重试！",skin:"msg",time:2})}})})}})});